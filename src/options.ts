import { Message, StoredConfig } from "./common"
import "./options.css"

chrome.storage.sync.get("excludeHosts", (data) => {
  const config = data as StoredConfig
  const excludeHosts = config.excludeHosts ?? []
  const input = document.getElementById(`exclude_hosts`) as HTMLInputElement
  input.value = excludeHosts === undefined ? "" : excludeHosts.join("; ")
  input.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement) {
      const updatedExcludeWebsite = event.target.value
      const updatedConfig: StoredConfig = { excludeHosts: updatedExcludeWebsite.split("; ") }
      void chrome.storage.sync.set(updatedConfig)
      // Send message to content script in all tabs
      void chrome.tabs
        .query({})
        .then((tabs) => {
          const message: Message = { type: "Exclude hosts", data: excludeHosts }
          for (const tab of tabs) {
            if (tab.id !== undefined) {
              chrome.tabs
                .sendMessage(tab.id, message)
                .catch(() => {
                  // We ignore tabs without a proper URL, like chrome://extensions/
                  // Do nothing
                })
            }
          }
        })
        .catch((error: unknown) => {
          console.error("Could not query tabs", error)
        })
    }
  })
})

const checkboxesNames = [
  "showOtherSources",
  "showPsychologicalTactics",
  "showSummary"
]

for (const checkboxName of checkboxesNames) {
  chrome.storage.sync.get(checkboxName, (data) => {
    const config = data as StoredConfig
    const checkboxData = config.showOtherSources ?? true
    const checkbox = document.getElementById(checkboxName) as HTMLInputElement
    checkbox.checked = checkboxData
    checkbox.addEventListener("change", (event) => {
      if (event.target instanceof HTMLInputElement) {
        const checkboxData = event.target.checked
        const updatedConfig: StoredConfig = { [checkboxName]: checkboxData }
        void chrome.storage.sync.set(updatedConfig)
      }
    })
  })
}

