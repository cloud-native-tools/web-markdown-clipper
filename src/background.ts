import { Request, Response } from "./message";

export const send_command_to_active_tab = async (command: string) => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length > 0) {
    const activeTab = tabs[0];
    if (activeTab && activeTab.id) {
      const request: Request = {
        command
      };
      console.info(`send command [${command}] to active tab [${activeTab.title}]`);
      chrome.tabs.sendMessage(activeTab.id, request, (response: Response) => {
        console.log(`got a response for command [${command}]`);
        if (chrome.runtime.lastError) {
          console.error(`runtime error: ${chrome.runtime.lastError.message}`);
        } else {
          if (response && response.failed) {
            console.error(`handle command ${request.command} failed: ${response.msg}`);
          } else {
            console.log(`handle command ${request.command} successfully`);
          }
        }
      });
    }
  } else {
    console.warn(`no active tab found for command: ${command}`);
  }
};

export const inject_code_to_active_tab = async (filename: string) => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length > 0) {
    const activeTab = tabs[0];
    if (activeTab && activeTab.id) {
      console.info(`inject code [${filename}] to active tab [${activeTab.title}]`);
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab.id },
          files: [filename],
        }
      );
    }
  }
};

const commandListener = (command: string) => {
  console.log(`command [${command}] is triggered`);
  // send_command_to_active_tab(command);
  inject_code_to_active_tab("static/js/content.js");
};

chrome.commands.onCommand.addListener(commandListener);