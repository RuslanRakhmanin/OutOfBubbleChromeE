export const maxRank = 5

export interface Message {
  enabled?: boolean
  type?: string
  data?: any
}

// // Old format
// export interface ArticleProperties {
//   url: string,
//   title: string,
//   rank: number,
//   sources: { sourceName: string, url: string, rank: number}[],
//   psychologicalTactics: string[],
//   sumUp5: string[]
// }

export type ScaleName = "Positivity" 
                    | "Objectivity" 
                    | "Complexity" 
                    | "Political" 
                    | "ChildrenSuitable"
export interface Tactic {
  name: string
  reason: string
  text: string
}

export interface Scale {
  name: ScaleName,
  description: string,
  score: number
}
export interface ArticleProperties {
  id: string,
  publisher: string,
  date: string,
  author: string,
  link: string,
  title: string,
  details: string,
  content: string,
  tactics: Tactic[],
  summary: string,
  scales: Scale[],
  conclusion: string,
  related: ArticleProperties[], 
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

export function getScoreFromProperties(properties: ArticleProperties, scaleName: ScaleName): number | undefined {
  return properties.scales.find(s => s.name === scaleName)?.score
}