import {
  Message,
  setBadgeText,
  setBadgeIcon,
  StoredConfig,
  ArticleProperties,
  Scale,
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

function sendCurrentURL2Server() {
    
  const link = currentTabCached?.url
  const data = { link }
  console.log(data)
  fetch(
    "https://us-central1-demohack-430817.cloudfunctions.net/function-demo-test",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      console.info("Raw response", response);

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return JSON.stringify(response);
      // // Check if the response is JSON
      // const contentType = response.headers.get("content-type");
      // if (contentType && contentType.includes("application/json")) {
      //   return response.json(); // Parse as JSON
      // } 
      // else if (contentType && contentType.includes("text/html")) {
      //   return  response.text(); // Parse as plain text
      // }
      // else {
      //   throw new Error("Response is not JSON");
      // }
    })
    .then((responseData) => {
      // Log the parsed data to the console
      console.info("Link sent", responseData);
  
      // Send the parsed data to the content script
      chrome.tabs.sendMessage(currentTabCached?.id as number, {
        enabled: true,
        type: "logToConsole",
        data: responseData,
      }).catch((error) => console.error("Error sending logs to console", error));
    })
    .catch((error) => console.error("Error sending link", error));
  

  
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
