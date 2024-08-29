import {
  Message,
  setBadgeText,
  setBadgeIcon,
  StoredConfig,
  ArticleProperties,
  RelatedProperties,
  Scale,
  Tactic,
  getScoreFromProperties
} from "./common"
import { getDemoData, getDataByURL } from "./demodata"

let articlesData: { [key: string]: ArticleProperties } = {}

let currentPageProperties: ArticleProperties | undefined

let currentTabCached: chrome.tabs.Tab | undefined

function startUp() {
  chrome.storage.sync.get("enabled", (data) => {
    setBadgeText("")
  })
  setBadgeIcon()
}

function checkTabReady(tab: chrome.tabs.Tab) {
  return !(tab === undefined
    || tab.id === undefined 
    || tab.url === undefined 
    || tab.url === "" 
    || tab.url.startsWith("chrome://"))
}

function getArticleProperties(url: string = "Current tab") {
  // console.log("getArticleProperties", url)
  if (url === "Current tab") {
    //// Does not work on clicking the extension icon
    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //   const currentTab = tabs[0] as chrome.tabs.Tab
    //   if (checkTabReady(currentTab) === false) {
    //     return undefined
    //   }
    //   url = currentTab.url as string
    // })

    return currentPageProperties
  }

  if (articlesData[url] === undefined) {
    let data: ArticleProperties | undefined = getDataByURL(url)
    if (data === undefined) {
      return undefined
    } else {
      articlesData[url] = data as ArticleProperties
    }
  }
  return articlesData[url]
}

function getIconName(url?: string) {
  if (url === undefined) {
    return "icon128.png"
  }
  currentPageProperties = getArticleProperties(url)
  if (currentPageProperties === undefined) {
    return "icon128.png"
  }
  
  // TODO: make universal for all scales
  let politicalScore: number | undefined = getScoreFromProperties(currentPageProperties, "Political")
  if (politicalScore !== undefined) {
    if (politicalScore < 3) {
      return "icon_set1_1_128.png"
    }
    if (politicalScore === 3) {
      return "icon_set1_2_128.png"
    }
    if (politicalScore > 3) {
      return "icon_set1_3_128.png"
    }
      
  }

  return "icon128.png"
}


function updateInfo(currentTab: chrome.tabs.Tab) {
  if (checkTabReady(currentTab) === false) {
    setBadgeIcon()
    return
  }

  currentTabCached = currentTab

  let iconName = getIconName(currentTab.url)
  if (iconName !== undefined) {
    setBadgeIcon(iconName)
  }
  // highlightTactics
  chrome.tabs.sendMessage(currentTab.id as number, 
      {enabled : true, 
        type: "highlightTactics", 
        data: getArticleProperties(currentTab.url)?.tactics})
  .then()
  .catch(() => {})
  .finally()
}

function getTacticsFromServerData(serverData: any) : Tactic[] {
  let tactics: Tactic[] = []
  serverData.results.tactics.forEach((tactic: any) => {
    tactics.push({name: tactic.Name, reason: tactic.Reason, text: tactic.Text})
  })
  return tactics
}

function getScalesFromServerData(serverData: any) : Scale[] {
  let scales: Scale[] = []
  serverData.results.scales.forEach((scale: any) => {
    scales.push({name: scale.Name, score: scale.Score, description: scale.Description})
  })
  return scales
}

function getArticleFromServerData(serverData: any) : ArticleProperties {
  let articleProperties: ArticleProperties = {
    id: serverData.id,
    publisher: serverData.results.publisher,
    date: serverData.results.date,
    author: serverData.results.author,
    link: serverData.results.link,
    title: serverData.results.title,
    details: serverData.results.details,
    content: [""], //serverData.results.content,
    tactics: getTacticsFromServerData(serverData) as Tactic[], 
    summary: serverData.results.summary,
    scales: getScalesFromServerData(serverData) as Scale[],
    conclusion: serverData.results.conclusion,
    related: serverData.results.related as RelatedProperties[],
  }

  return articleProperties
}

const fetchData = async (data2Send: object) => {
  try {
    const response = await fetch(
      "https://us-central1-demohack-430817.cloudfunctions.net/function-demo-test",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data2Send),
      }
    );

    // console.info("Raw response", response);

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    // console.log("Parsed response data:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

function sendCurrentURL2Server() {
    
  const link = currentTabCached?.url ?? ""
  console.info("Link sent to analysis", link)
  fetchData({ link: link})
  .then((result) => {
    // chrome.tabs.sendMessage(currentTabCached?.id as number, {
    //   enabled: true,
    //   type: "logToConsole",
    //   data: result,
    // }).catch((error) => console.error("Error sending logs to console", error));
    console.log("Raw data:", result);
    articlesData[link] = getArticleFromServerData(result);
    console.log("Final result:", articlesData[link]);
  })
  .catch((error) => {
    console.error("Error in main execution:", error);
  });  

}

function sendSelectedText2Server() {
  if (currentTabCached === undefined) {
    return
  }
  let selectedText: string = "";
  console.info("Tab to send getSelectedText", currentTabCached?.id, currentTabCached?.url);
  chrome.tabs.sendMessage(currentTabCached?.id as number, {action: "getSelectedText"}, function(response) {
    if (response && response.selectedText) {
      selectedText = response.selectedText;
    } else {
      return;
    }
  });

  fetchData({ text: selectedText})
  .then((result) => {
    console.log("Final result:", result);
  })
  .catch((error) => {
    console.error("Error in main execution:", error);
  });


}


// Ensure the background script always runs.
chrome.runtime.onStartup.addListener(startUp)
chrome.runtime.onInstalled.addListener(startUp)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const message = request as Message
  // if (message.enabled !== undefined) {
  //   console.log(
  //     "Service worker received message from sender %s",
  //     sender.id,
  //     request,
  //   )
  //   // sendResponse({ message: "Service worker processed the message" })
  // }

  if (message.type !== undefined) {
    switch (message.type) {
      case "getPropertiesByURL":
        sendResponse(getArticleProperties(message.data))
        break
      case "getPropertiesCurrentTab":
        sendResponse(getArticleProperties())
        break
      case "getIconNameByURL":
        sendResponse(getIconName(message.data))
        break
      case "sendCurrentURL2Server":
        sendCurrentURL2Server()
        break
      case "sendSelectedText2Server":
        sendSelectedText2Server()
        break
      default:
        console.warn("Unknown message type", message.type)
        sendResponse(undefined)
        break
    }
  } else {
    console.warn("Unknown message", message)
    sendResponse(undefined)
  }
})


// console.log("Add listener on Activated")
chrome.tabs.onActivated.addListener((activeInfo) => {
  // console.log("Got focus on tab")
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0] as chrome.tabs.Tab
    // console.log("Got focus on tab", currentTab)
    updateInfo(currentTab)
  })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)  =>{
  updateInfo(tab)
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0] as chrome.tabs.Tab
    // console.log("Got focus on window", windowId, "with tab", currentTab)
    updateInfo(currentTab)
  })
});
