import { Message, setBadgeText, StoredConfig, TabResponse, setBadgeIcon } from "./common"
import "./popup.css"

// console.log("Hello, world from popup!")

function setUpSectionsVisibility() {

  chrome.storage.sync.get(null, (data) => {
    const config = data as StoredConfig
    const showOtherSources =
      (config.showOtherSources ?? true) && (config.enabled ?? true)
    const elementOtherSources = document.getElementById(
      "sources",
    ) as HTMLInputElement
    elementOtherSources.style.display = showOtherSources ? "block" : "none"

    const showPsychologicalTactics =
      (config.showPsychologicalTactics ?? true) && (config.enabled ?? true)
    const elementPsychologicalTactics = document.getElementById(
      "tactics",
    ) as HTMLInputElement
    elementPsychologicalTactics.style.display = showPsychologicalTactics
      ? "block"
      : "none"

    const showSummary = (config.showSummary ?? true) && (config.enabled ?? true)
    const elementSummary = document.getElementById(
      "summary",
    ) as HTMLInputElement
    elementSummary.style.display = showSummary ? "block" : "none"
  })
}

// Handle the ON/OFF switch
const checkbox = document.getElementById("enabled") as HTMLInputElement
chrome.storage.sync.get("enabled", (data) => {
  const config = data as StoredConfig
  checkbox.checked = !!config.enabled
  setBadgeText()
})

setUpSectionsVisibility()

checkbox.addEventListener("change", (event) => {
  if (event.target instanceof HTMLInputElement) {
    void chrome.storage.sync.set({ enabled: event.target.checked })
    setBadgeText()
    setBadgeIcon()
    setUpSectionsVisibility()
    // if (event.target.checked) {
    // } else {
    // }


    // Send message to content script in all tabs
    const message: Message = { enabled: event.target.checked }
    chrome.tabs
      .query({})
      .then((tabs) => {
        for (const tab of tabs) {
          if (tab.id === undefined) {
            continue
          }
          // Note: tab properties such as tab.title or tab.url can only be accessed for
          // URLs in the host_permissions section of manifest.json
          // chrome.tabs
          //   .sendMessage(tab.id, message)
          //   .then((response) => {
          //     const tabResponse = response as TabResponse
          //     console.info(
          //       "Popup received response from tab with title '%s' and url %s",
          //       tabResponse.title,
          //       tabResponse.url,
          //     )
          //   })
          //   .catch((error: unknown) => {
          //     console.warn(
          //       "Popup could not send message to tab %d",
          //       tab.id,
          //       error,
          //     )
          //   })
        }
      })
      .catch((error: unknown) => {
        console.warn("Popup could not query tabs", error)
      })
    chrome.runtime
      .sendMessage(message)
      .then((response) => {
        console.info("Popup received response", response)
      })
      .catch((error: unknown) => {
        console.warn("Popup could not send message", error)
      })
  }
})

// // Handle the input field
// const input = document.getElementById("item") as HTMLInputElement
// chrome.storage.sync.get("item", (data) => {
//   const config = data as StoredConfig
//   input.value = ""
// })
// input.addEventListener("change", (event) => {
//   if (event.target instanceof HTMLInputElement) {
//     void chrome.storage.sync.set({ item: event.target.value })
//   }
// })

// Options page
const optionsElement = document.querySelector("#go-to-options")
if (!optionsElement) {
  console.error("Could not find options element")
} else {
  optionsElement.addEventListener("click", function () {
    // This code is based on Chrome for Developers documentation
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage().catch((error: unknown) => {
        console.error("Could not open options page", error)
      })
    } else {
      window.open(chrome.runtime.getURL("options.html"))
    }
  })
}
