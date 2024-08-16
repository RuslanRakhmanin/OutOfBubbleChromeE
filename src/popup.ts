import { Message, setBadgeText, StoredConfig, TabResponse, setBadgeIcon, ArticleProperties, maxRank } from "./common"
import "./popup.css"

// console.log("Hello, world from popup!")

const otherSourcesSection = document.getElementById("sources",) as HTMLInputElement
const psychologicalTacticsSection = document.getElementById("tactics",) as HTMLInputElement
const summarySection = document.getElementById("summary",) as HTMLInputElement

function setUpSectionsVisibility() {

  chrome.storage.sync.get(null, (data) => {
    const config = data as StoredConfig
    const showOtherSources =
      (config.showOtherSources ?? true) && (config.enabled ?? true)
    // const otherSourcesSection = document.getElementById(
    //   "sources",
    // ) as HTMLInputElement
    otherSourcesSection.style.display = showOtherSources ? "block" : "none"

    const showPsychologicalTactics =
      (config.showPsychologicalTactics ?? true) && (config.enabled ?? true)
    // const psychologicalTacticsSection = document.getElementById(
    //   "tactics",
    // ) as HTMLInputElement
    psychologicalTacticsSection.style.display = showPsychologicalTactics
      ? "block"
      : "none"

    const showSummary = (config.showSummary ?? true) && (config.enabled ?? true)
    // const summarySection = document.getElementById(
    //   "summary",
    // ) as HTMLInputElement
    summarySection.style.display = showSummary ? "block" : "none"
  })
}

// Handle the ON/OFF switch
const checkbox = document.getElementById("enabled") as HTMLInputElement
chrome.storage.sync.get("enabled", (data) => {
  const config = data as StoredConfig
  checkbox.checked = !!config.enabled
  setBadgeText()
})

function fillOtherSources(properties: ArticleProperties) {
  if (otherSourcesSection.style.display === "block") {
    // In this way we can get cells with ids from 'rank1' to 'rank5'
    const rankElementsList: HTMLTableCellElement[] = Array.from(
      { length: maxRank },
      (_, i) => document.getElementById(`rank${i + 1}`) as HTMLTableCellElement
    );

    // Clear the cells
    rankElementsList.forEach((rankElement) => {
      rankElement.innerHTML = ''
    })

    // Fill the cells with the article data
    properties.sources.forEach((record) => {
      const anchor = document.createElement('a');
      anchor.href = record.url;
      anchor.textContent = record.sourceName;
      anchor.className = 'block text-blue-600 hover:underline';

      // Add event listener to open the link in a new tab
      anchor.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        chrome.tabs.create({ url: record.url }); // Open the URL in a new tab
      });

      // Append the new link to the cell
      rankElementsList[record.rank-1].appendChild(anchor);      
    })
  }
}

function fillPsychologicalTactics(properties: ArticleProperties) {
  if (psychologicalTacticsSection.style.display === "block") {
      // Clear existing summary content (everything except the <h4> and <hr>)
      const heading = psychologicalTacticsSection.querySelector('h4');
      const hr = psychologicalTacticsSection.querySelector('hr');

      // Remove all children from the section
      while (psychologicalTacticsSection.firstChild) {
        psychologicalTacticsSection.removeChild(psychologicalTacticsSection.firstChild);
      }

      // Re-add the heading and <hr> element (if they exist)
      if (heading) psychologicalTacticsSection.appendChild(heading);

      // Now, insert your own custom summary points
      properties.psychologicalTactics.forEach(textData => {
          const bulletSpan = document.createElement('span');
          bulletSpan.className = 'text-orange-500 mr-2';
          bulletSpan.textContent = '➤';

          const textSpan = document.createElement('span');
          textSpan.textContent = textData;

          const br = document.createElement('br');

          // Append the bullet, summary text, and line break
          psychologicalTacticsSection.appendChild(bulletSpan);
          psychologicalTacticsSection.appendChild(textSpan);
          psychologicalTacticsSection.appendChild(br);
      });

      // Re-add the <hr> element (if it exists)
      if (hr) psychologicalTacticsSection.appendChild(hr);    
    
  }
}

function fillSummary(properties: ArticleProperties) {
  if (summarySection.style.display === "block") {
      // Clear existing summary content (everything except the <h4> and <hr>)
      const heading = summarySection.querySelector('h4');
      const hr = summarySection.querySelector('hr');

      // Remove all children from the section
      while (summarySection.firstChild) {
          summarySection.removeChild(summarySection.firstChild);
      }

      // Re-add the heading and <hr> element (if they exist)
      if (heading) summarySection.appendChild(heading);

      // Now, insert your own custom summary points
      properties.sumUp5.forEach(summary => {
          const bulletSpan = document.createElement('span');
          bulletSpan.className = 'text-green-500 mr-2';
          bulletSpan.textContent = '●';

          const textSpan = document.createElement('span');
          textSpan.textContent = summary;

          const br = document.createElement('br');

          // Append the bullet, summary text, and line break
          summarySection.appendChild(bulletSpan);
          summarySection.appendChild(textSpan);
          summarySection.appendChild(br);
      });

      // Re-add the <hr> element (if it exists)
      if (hr) summarySection.appendChild(hr);    
  }
}

function fillSections() {
    const message: Message = { type: "getPropertiesCurrentTab"}
    chrome.runtime
      .sendMessage(message)
      .then((response) => {
        if (response === undefined || response === null) {
          // console.warn("Popup requested page properties but got undefined")
          otherSourcesSection.style.display = "none"
          psychologicalTacticsSection.style.display = "none"
          summarySection.style.display = "none"
          return
        }
        const properties: ArticleProperties = response
        
        fillOtherSources(properties)
        fillPsychologicalTactics(properties)
        fillSummary(properties)

      })
      .catch((error: unknown) => {
        console.warn("Popup could not send message", error)
      })  
}

setUpSectionsVisibility()
fillSections()

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


