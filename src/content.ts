import { Request, Response } from "./message";
import {get_html_of_selection,download_content} from "./utils";

type CommandHandler = (a: Request) => Response;

const download_selection_as_markdown_handler: CommandHandler = (request: Request) => {
    console.log(`request: ${request}`);

   const html = get_html_of_selection();
   download_content("test.html", html);

    const response: Response = {
        failed: false,
    };
    return response;
};

const handlers: Map<string, CommandHandler> = new Map<string, CommandHandler>();
handlers.set("download_selection_as_markdown", download_selection_as_markdown_handler);

chrome.runtime.onMessage.addListener((
    request: Request,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response: Response) => void
) => {
    console.log(`receive a command ${request.command}`);
    const handler: CommandHandler | undefined = handlers.get(request.command);
    if (handler) {
        const result = handler(request);
        sendResponse(result);
    } else {
        sendResponse({
            failed: true,
            msg: `unknown command "${request.command}"`,
        });
    }
});

export { };