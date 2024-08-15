export interface Message {
  enabled?: boolean
  type?: string
  data?: any
}

export interface ArticleProperties {
  url: string,
  title: string,
  political: number,
  psychologicalTactics: string[],
  sumUp5: string[]
}

export interface StoredConfig {
  enabled?: boolean
  showOtherSources?: boolean
  showPsychologicalTactics?: boolean
  showSummary?: boolean
  customIcons?: { [key: string]: string }
  articles?: ArticleProperties[]
  excludeHosts?: string[]
  whiteList?: string[]
}

export interface TabResponse {
  title: string
  url: string
}

export function setBadgeText(text: string = "") {
  // const text = enabled ? "ON" : "OFF"
  void chrome.action.setBadgeText({ text: text })
}

export function setBadgeIcon(iconName: string = "") {
  if (iconName === "") {
    iconName = "icon128.png"
  }
  chrome.action.setIcon({
    path: {
      128: iconName
    }
  });
}