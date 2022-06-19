import { Request, Response } from "./message";


chrome.runtime.onMessage.addListener((
    request: Request,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response: Response) => void
) => {
    console.log(`receive a command ${request.command}`);
    switch (request.command) {
        case "download_selection_as_markdown":
            sendResponse({
                failed: false,
                reason: undefined
            });
            break;
        default:
            sendResponse({
                failed: true,
                reason: `unknown command "${request.command}"`
            });
            break;
    }
});

export { };