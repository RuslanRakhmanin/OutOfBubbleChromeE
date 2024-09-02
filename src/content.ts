import { Message, StoredConfig, TabResponse, Tactic} from "./common"

let config: StoredConfig = {
  enabled: true,
  excludeHosts: [],
  whiteList: [],
}

// Listen for messages from popup and service worker.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const message = request as Message
  if (true) {
     console.log("Received message from sender %s", sender.id, request);

      switch (message.type) {
        case "highlightTactics":
          let tactics: Tactic[] = message.data
          for (let tactic of tactics) {
            searchAndHighlight(tactic.text, tactic.name + ": " + tactic.reason)
          }
          break
        case "logToConsole":
          console.info(message.data)
          break
        case "getSelectedText":
          const selectedText = window.getSelection()?.toString() ?? "";
          console.info("Selected text", selectedText);
          sendResponse({selectedText: selectedText});
          break
        default:
          console.warn("Unknown message type", message.type)
          break  
      }      
      sendResponse(undefined)
  }

  const response: TabResponse = {
    title: document.title,
    url: window.location.href,
  }
  sendResponse(response)
})


// Search the document for the text to search and highlight it if found.
function searchAndHighlight(textToSearch: string, popup_text: string) {
  const nodes = document.evaluate(
    `//text()[contains(., "${textToSearch}")]`,
    document.body,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  for (let i = 0; i < nodes.snapshotLength; i++) {
    const node = nodes.snapshotItem(i) as Text;
    const parent = node.parentNode as HTMLElement;
    const text = node.textContent || "";
    const parts = text.split(new RegExp(`(${textToSearch})`, 'gi'));

    const fragment = document.createDocumentFragment();
    parts.forEach(part => {
      if (part.toLowerCase() === textToSearch.toLowerCase()) {
        const span = document.createElement("span");
        span.classList.add("highlight");
        span.style.backgroundColor = "yellow";
        span.style.cursor = "help";
        span.style.position = "relative";
        span.textContent = part;

        const spanPopupInfo = document.createElement("span");
        spanPopupInfo.classList.add("popup-info");
        spanPopupInfo.style.visibility = "hidden";
        spanPopupInfo.style.width = "200px";
        spanPopupInfo.style.backgroundColor = "#555";
        spanPopupInfo.style.color = "#fff";
        spanPopupInfo.style.textAlign = "center";
        spanPopupInfo.style.borderRadius = "6px";
        spanPopupInfo.style.padding = "5px";
        spanPopupInfo.style.position = "absolute";
        spanPopupInfo.style.zIndex = "9999";
        spanPopupInfo.style.bottom = "100%";
        spanPopupInfo.style.left = "50%";
        spanPopupInfo.style.transform = "translateX(-50%)";
        spanPopupInfo.style.opacity = "0";
        spanPopupInfo.style.transition = "opacity 0.3s";    
        spanPopupInfo.textContent = popup_text;

        span.appendChild(spanPopupInfo);

        // Add event listeners for showing/hiding the popup
        span.addEventListener('mouseenter', () => {
          spanPopupInfo.style.visibility = 'visible';
          spanPopupInfo.style.opacity = '1';
        });

        span.addEventListener('mouseleave', () => {
          spanPopupInfo.style.visibility = 'hidden';
          spanPopupInfo.style.opacity = '0';
        });

        fragment.appendChild(span);
      } else {
        fragment.appendChild(document.createTextNode(part));
      }
    });

    parent.replaceChild(fragment, node);
  }

  // Add a style tag with the necessary CSS
  const style = document.createElement('style');
  style.textContent = `
    .highlight {
      position: relative;
      background-color: yellow;
      cursor: help;
    }
    .popup-info {
      visibility: hidden;
      width: 200px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px;
      position: absolute;
      z-index: 9999;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s;
    }
  `;
  document.head.appendChild(style);
}


// let textToSearch = "The epidemic of violence against women cannot go on."
// searchAndHighlight(textToSearch);


