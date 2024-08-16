import {
  Message,
  setBadgeText,
  setBadgeIcon,
  StoredConfig,
  ArticleProperties,
} from "./common"
import { getDemoData, getDataByURL } from "./demodata"

let articlesData: { [key: string]: ArticleProperties } = {}

function startUp() {
  chrome.storage.sync.get("enabled", (data) => {
    setBadgeText("")
  })
  setBadgeIcon()
}

function getArticleProperties(url?: string) {
  if (url === undefined) {
    return undefined
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
  let properties = getArticleProperties(url)
  if (properties === undefined) {
    return "icon128.png"
  }
  if (properties.rank < 3) {
    return "icon_set1_1_128.png"
  }
  if (properties.rank === 3) {
    return "icon_set1_2_128.png"
  }
  if (properties.rank > 3) {
    return "icon_set1_3_128.png"
  }
}


function updateInfo(currentTab: chrome.tabs.Tab) {
  if (currentTab.id === undefined 
    || currentTab.url === undefined 
    || currentTab.url === "" 
    || currentTab.url.startsWith("chrome://")) {
    setBadgeIcon()
    return
  }


  let iconName = getIconName(currentTab.url)
  if (iconName !== undefined) {
    setBadgeIcon(iconName)
  }
}

// Ensure the background script always runs.
chrome.runtime.onStartup.addListener(startUp)
chrome.runtime.onInstalled.addListener(startUp)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const message = request as Message
  if (message.enabled !== undefined) {
    console.log(
      "Service worker received message from sender %s",
      sender.id,
      request,
    )
    // sendResponse({ message: "Service worker processed the message" })
  }

  if (message.type !== undefined) {
    switch (message.type) {
      case "getPropertiesByURL":
        sendResponse(getArticleProperties(message.data))
        break
      case "getIconNameByURL":
        sendResponse(getIconName(message.data))
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
    console.log("Got focus on tab", currentTab)
    updateInfo(currentTab)
  })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)  =>{
  updateInfo(tab)
});