
import { Request, Response } from "./message";

async function send_command_to_active_tab(command: string) {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length > 0) {
    const tabId = tabs[0].id;
    if (tabId) {
      const request: Request = {
        command
      };
      chrome.tabs.sendMessage(tabId, request, (response: Response) => {
        console.log(`got a response for command ${command}: ${response}`);
        if (response && response.failed) {
          console.error(`handle command ${request.command} failed: ${response.msg}`);
        } else {
          console.log(`handle command ${request.command} successfully`);
        }
      });
    }
  }
}

chrome.runtime.onInstalled.addListener(() => {
  console.log('extensions loaded');
});

chrome.commands.onCommand.addListener((command) => {
  send_command_to_active_tab(command);
});

