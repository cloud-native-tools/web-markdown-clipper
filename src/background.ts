export const inject_code_to_active_tab = async (filename: string) => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length > 0) {
    const activeTab = tabs[0];
    if (activeTab && activeTab.id) {
      console.info(`inject code [${filename}] to active tab [${activeTab.title}]`);
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab.id },
          files: [filename]
        }
      );
    }
  }
};

const commandListener = (command: string) => {
  console.log(`command [${command}] is triggered`);
  if (command == "download_selection_as_markdown") {
    inject_code_to_active_tab("static/js/content.js");
  } else if (command == "edit_selection_as_markdown") {
    inject_code_to_active_tab("static/js/edit.js");
  }
};

chrome.commands.onCommand.addListener(commandListener);
