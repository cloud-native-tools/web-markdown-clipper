import TurndownService from "turndown";

const turndown_service = new TurndownService();

export const download_selection_as_markdown = () => {
    const html = get_html_of_selection();
    const markdown = turndown_service.turndown(html);

    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const clip = {
        created: date,
        source: document.baseURI,
        title: document.title,
        markdown: `[${document.title}](${document.baseURI})\n\n${markdown}`
    };

    const filename = `${document.title}-${date}`;
    download_content(filename, JSON.stringify(clip));

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

    link.download = "WebMarkdownClips_" + generateValidFileName(filename) + ".json";
    link.href = base64Uri;
    console.log(`download: [${link.download}]`);
    link.click();
};

export const base64EncodeUnicode = (content: string): string => {
    const utf8Bytes = encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, function (match, g1) {
        return String.fromCharCode(parseInt('0x' + g1, 16));
    });

    return btoa(utf8Bytes);
};

