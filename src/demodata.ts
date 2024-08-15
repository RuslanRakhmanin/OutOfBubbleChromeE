import { ArticleProperties } from "./common"

let demoData: ArticleProperties[] = [
  {
    url: "https://www.independent.ie/irish-news/crime/irish-man-50-shot-dead-in-malta-after-ex-partners-body-found-in-apartment/a1366613683.html",
    title:
      "Irishman shot dead in Maltese police after ex-partner’s body found in apartment",
    political: 4,
    psychologicalTactics: [
      "Use of emotional language",
      "Focus on the victim",
      "Omission of certain details",
    ],
    sumUp5: [
      "Irish man shot dead by Maltese police after standoff.",
      "Ex-partner found murdered in apartment.",
      "Man suspected of killing ex-partner.",
      "Standoff lasted three hours.",
      "Police Commissioner outlines events.",
    ],
  },
  {
    url: "https://www.irishexaminer.com/news/arid-41454697.html",
    title: "Irishman killed by police in Malta after allegedly murdering woman",
    political: 3,
    psychologicalTactics: ["Not found"],
    sumUp5: [
      "Irish man, Edward Johnston, allegedly murders his ex-partner Nicolette Ghirxi in Malta.",
      "Johnston holds staff at a Hilton Hotel hostage with a replica gun, confesses to the murder.",
      "Police engage in a standoff with Johnston, who eventually points the replica gun at them and is shot dead.",
      "Ghirxi had filed harassment complaints against Johnston previously.",
      "The incident has sparked outrage and calls for action against violence against women in Malta.",
    ],
  },
  {
    url: "https://www.irishtimes.com/crime-law/2024/08/12/irishman-shot-dead-by-police-in-malta-after-allegedly-murdering-former-partner/",
    title:
      "Irish man shot dead by police in Malta after allegedly murdering former partner",
    political: 2,
    psychologicalTactics: ["Emotional Appeal", "Framing", "Omission of Context"],
    sumUp5: [
      "Irish man shot dead by Maltese police.",
      "Man allegedly murdered his former partner before the shooting.",
      "Police negotiated with the man before shooting him.",
      "Woman's body found with multiple knife wounds.",
      "Man had a history of harassing the victim.",
    ],
  },
]

export function getDemoData() {
  return demoData
}

export function getDataByURL(url: string) {
  return demoData.find((article) => article.url === url)
}