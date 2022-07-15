import { Request, Response } from "./message";
import { get_html_of_selection, download_content } from "./utils";
import TurndownService from "turndown";

import moment from 'moment';

const turndown_service = new TurndownService();

const download_selection_as_markdown = () => {
    const html = get_html_of_selection();
    const markdown = turndown_service.turndown(html);

    const now = new Date();
    const created = moment(now).format("YYYY-MM-DD HH:mm:ss");
    const content = `---
created: "${created}"
source: "${document.baseURI}"
title: "${document.title}"
---

${markdown}
`;

    const filename = `${document.title}-${moment(now).format("YYYY-MM-DD-HH-mm-ss")}`;
    download_content(filename, content);

    const response: Response = {
        failed: false,
        data: markdown
    };
    return response;
};

download_selection_as_markdown();

export { };