
import { Request, Response } from "./message";

async function download_selection_as_markdown() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length > 0) {
    const tabId = tabs[0].id;
    if (tabId) {
      const request: Request = {};
      chrome.tabs.sendMessage(tabId, request, (response: Response) => {
        console.log(response);
      });
    }
  }
}

chrome.runtime.onInstalled.addListener(() => {
  console.log('extensions loaded');
});

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case "download_selection_as_markdown":
      download_selection_as_markdown();
      break;
    default:
      console.error(`unknown command ${command}`);
  }
});

