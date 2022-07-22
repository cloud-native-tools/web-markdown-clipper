import TurndownService from "turndown";

const turndown_service = new TurndownService();

export const download_selection_as_markdown = () => {
    const html = get_html_of_selection();
    const markdown = turndown_service.turndown(html);

    const now = new Date();
    const created = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const content = `---
created: "${created}"
source: "${document.baseURI}"
title: "${document.title}"
---

${markdown}
`;
    const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
    const filename = `${document.title}-${date}`;
    download_content(filename, content);

    return markdown;
};

// reference: https://stackoverflow.com/a/5084044/304786
export const get_html_of_selection = (): string => {
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

export const generateValidFileName = (title: string): string => {
    if (!title) return title;
    else title = title + '';
    // remove < > : " / \ | ? * 
    const illegalRe = /[/?<>\\:*|":]/g;
    return title.replace(illegalRe, "").replace(new RegExp('\u00A0', 'g'), ' ');
};

export const download_content = (filename: string, content: string): void => {
    const encoded = base64EncodeUnicode(content);
    const base64Uri = `data:text/markdown;base64,${encoded}`;
    const link = document.createElement('a');

    link.download = "WebMarkdownClips_" + generateValidFileName(filename) + ".md";
    link.href = base64Uri;
    console.log(`download: [${link.download}]`);
    link.click();
};

export const copy_to_clipboard = async (content: string): Promise<void> => {
    return await navigator.clipboard.writeText(content);
};


// export const download_image = (filename: string, url: string): void => {



/* Link with a download attribute? CORS says no.
var link = document.createElement('a');
link.download = filename.substring(0, filename.lastIndexOf('.'));
link.href = url;
console.log(link);
link.click();
*/

/* Try via xhr? Blocked by CORS.
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'blob';
xhr.onload = () => {
    console.log('onload!')
    var file = new Blob([xhr.response], {type: 'application/octet-stream'});
    var link = document.createElement('a');
    link.download = filename;//.substring(0, filename.lastIndexOf('.'));
    link.href = window.URL.createObjectURL(file);
    console.log(link);
    link.click();
}
xhr.send();
*/

/* draw on canvas? Inscure operation
let img = new Image();
img.src = url;
img.onload = () => {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    var link = document.createElement('a');
    const ext = filename.substring(filename.lastIndexOf('.'));
    link.download = filename;
    link.href = canvas.toDataURL(`image/png`);
    console.log(link);
    link.click();
}
*/
// };


export const base64EncodeUnicode = (content: string): string => {
    const utf8Bytes = encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, function (match, g1) {
        return String.fromCharCode(parseInt('0x' + g1, 16));
    });

    return btoa(utf8Bytes);
};

