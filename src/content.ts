import { Request, Response } from "./message";

// reference: https://stackoverflow.com/a/5084044/304786
const get_html_of_selection = (): string => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        const content = [];
        for (let i = 0; i < selection.rangeCount; i++) {
            const range: Range = selection.getRangeAt(0);
            const clonedSelection = range.cloneContents();
            const div = document.createElement('div');
            div.appendChild(clonedSelection);
            content.push(div.innerHTML);
        }
        return content.join("");
    } else {
        return '';
    }
};

const download_content = (filename: string, content: string): void => {
    const base64Uri = `data:text/markdown;base64,${content}`;
    const link = document.createElement('a');
    link.download = filename;
    link.href = base64Uri;
    link.click();
};

async function copy_to_clipboard(content: string) {
    return await navigator.clipboard.writeText(content);
}

// function downloadImage(filename, url) {

//     /* Link with a download attribute? CORS says no.
//     var link = document.createElement('a');
//     link.download = filename.substring(0, filename.lastIndexOf('.'));
//     link.href = url;
//     console.log(link);
//     link.click();
//     */

//     /* Try via xhr? Blocked by CORS.
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'blob';
//     xhr.onload = () => {
//         console.log('onload!')
//         var file = new Blob([xhr.response], {type: 'application/octet-stream'});
//         var link = document.createElement('a');
//         link.download = filename;//.substring(0, filename.lastIndexOf('.'));
//         link.href = window.URL.createObjectURL(file);
//         console.log(link);
//         link.click();
//     }
//     xhr.send();
//     */

//     /* draw on canvas? Inscure operation
//     let img = new Image();
//     img.src = url;
//     img.onload = () => {
//         let canvas = document.createElement("canvas");
//         let ctx = canvas.getContext("2d");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         ctx.drawImage(img, 0, 0);

//         var link = document.createElement('a');
//         const ext = filename.substring(filename.lastIndexOf('.'));
//         link.download = filename;
//         link.href = canvas.toDataURL(`image/png`);
//         console.log(link);
//         link.click();
//     }
//     */
// }

chrome.runtime.onMessage.addListener((
    request: Request,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: Response) => void
) => {
    console.log(`receive a request ${request}`);
    sendResponse();
});

export { };