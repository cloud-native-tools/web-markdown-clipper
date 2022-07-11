
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
        console.log(`got a response for command ${command}: ${response}`);
        if (response && response.failed) {
          console.error(`handle command ${request.command} failed: ${response.msg}`);
        } else {
          console.log(`handle command ${request.command} successfully`);
        }
      });
    }
  } else {
    console.warn(`no active tab found for command: ${command}`);
  }
}

chrome.runtime.onInstalled.addListener(() => {
  console.log('extensions loaded');
  chrome.commands.onCommand.addListener((command) => {
    send_command_to_active_tab(command);
  });
});
