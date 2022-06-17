// chrome.runtime.onInstalled.addListener(() => {
//   console.log('extentions loaded');
// });


// const defaultOptions = {
//   headingStyle: "atx",
//   hr: "___",
//   "bulletListMarker": "+",
//   codeBlockStyle: "fenced",
//   fence: "```",
//   emDelimiter: "_",
//   strongDelimiter: "**",
//   linkStyle: "inlined",
//   linkReferenceStyle: "full",
//   imageStyle: "markdown",
//   imageRefStyle: "inlined",
//   "frontmatter": "---\ncreated: \"{date:YYYY-MM-DD HH:mm:ss}\"\nsource: \"{baseURI}\"\ntitle: \"{pageTitle}\"\n---\n",
//   "backmatter": "",
//   "title": "{date:YYYY-MM-DD-HH-mm-ss}-{pageTitle}",
//   includeTemplate: true,
//   saveAs: false,
//   downloadImages: true,
//   imagePrefix: '{pageTitle}/',
//   mdClipsFolder: 'Clips',
//   disallowedChars: '[]#^',
//   downloadMode: 'downloadsApi',
//   turndownEscape: true,
//   contextMenus: true,
//   // obsidianVault: null,
//   // obsidianPathType: 'name'
// };

// browser.commands.onCommand.addListener(function (command) {
//   const tab = browser.tabs.getCurrent();
//   console.log(`run command ${command} on ${tab}`);
//   if (command == "download_selection_as_markdown") {
//     const info = { menuItemId: "download-markdown-selection" };
//     downloadMarkdownFromContext(info, tab);
//   }
// else if (command == "copy_tab_as_markdown") {
//   const info = { menuItemId: "copy-markdown-all" };
//   copyMarkdownFromContext(info, tab);
// }
// else if (command == "copy_tab_as_markdown_link") {
//   copyTabAsMarkdownLink(tab);
// }

// });

// chrome.commands.onCommand.addListener((command) => {
//   console.log(`Command: ${command}`);
//   const tab = browser.tabs.getCurrent();
//   // if (command == "download_selection_as_markdown") {
//   //   const info = { menuItemId: "download-markdown-selection" };
//   //   downloadMarkdownFromContext(info, tab);
//   // }
// });

export {};