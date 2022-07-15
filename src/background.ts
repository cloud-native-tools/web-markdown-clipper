
import { Request, Response } from "./message";


async function send_command_to_active_tab(command: string) {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length > 0) {
    const activeTab = tabs[0];
    if (activeTab && activeTab.id) {
      const request: Request = {
        command
      };
      console.info(`send command [${command}] to active tab [${activeTab.title}]`);
      // chrome.runtime
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
}

const commandListener = (command: string) => {
  send_command_to_active_tab(command);
  listenCommand();
};

const listenCommand = () => {
  console.log("listen command");
  chrome.commands.onCommand.addListener(commandListener);
};

chrome.runtime.onInstalled.addListener(() => {
  console.log('"web-markdown-clipper" extensions loaded');
  listenCommand();
});
