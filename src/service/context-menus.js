// create the context menus
async function createMenus() {
  const options = await getOptions();

  browser.contextMenus.removeAll();

  if (options.contextMenus) {
    // download actions
    browser.contextMenus.create({
      id: "download-markdown-selection",
      title: "Download Selection As Markdown",
      contexts: ["selection"]
    }, () => { });
    browser.contextMenus.create({
      id: "download-markdown-all",
      title: "Download Tab As Markdown",
      contexts: ["all"]
    }, () => { });
  }
}