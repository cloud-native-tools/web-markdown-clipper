import { Clip, get_selection_as_clip } from "./utils";

console.log("edit script loaded");
const clip: Clip = get_selection_as_clip();
chrome.runtime.sendMessage({ clip: clip });
export { };