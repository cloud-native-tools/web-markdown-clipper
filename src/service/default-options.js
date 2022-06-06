// these are the default options
const defaultOptions = {
  headingStyle: "atx",
  hr: "___",
  "bulletListMarker": "+",
  codeBlockStyle: "fenced",
  fence: "```",
  emDelimiter: "_",
  strongDelimiter: "**",
  linkStyle: "inlined",
  linkReferenceStyle: "full",
  imageStyle: "markdown",
  imageRefStyle: "inlined",
  "frontmatter": "---\ncreated: \"{date:YYYY-MM-DD HH:mm:ss}\"\nsource: \"{baseURI}\"\ntitle: \"{pageTitle}\"\n---\n",
  "backmatter": "",
  "title": "{date:YYYY-MM-DD-HH-mm-ss}-{pageTitle}",
  includeTemplate: true,
  saveAs: false,
  downloadImages: true,
  imagePrefix: '{pageTitle}/',
  mdClipsFolder: 'Clips',
  disallowedChars: '[]#^',
  downloadMode: 'downloadsApi',
  turndownEscape: true,
  contextMenus: true,
  // obsidianVault: null,
  // obsidianPathType: 'name'
}



// function to get the options from storage and substitute default options if it fails
async function getOptions() {
  let options = defaultOptions;
  try {
    options = await browser.storage.sync.get(defaultOptions);
  } catch (err) {
    console.error(err);
  }
  if (!browser.downloads) options.downloadMode = 'contentLink';
  return options;
}