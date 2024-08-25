import { ArticleProperties, Scale, Tactic } from "./common"

export function getDemoData() {
  return demoData
}

export function getDataByURL(url: string) {
  return demoData.find((article) => article.link === url)
}

let demoData: ArticleProperties[] = [
  {
    id: '101',
    publisher: "Independent.ie",
    date: "12/08/2024",
    author: "Independent.ie",
    link: "https://www.independent.ie/irish-news/crime/irish-man-50-shot-dead-in-malta-after-ex-partners-body-found-in-apartment/a1366613683.html",
    title: "Irishman shot dead in Maltese police after ex-partner’s body found in apartment",
    details: "",
    content: "",
    tactics: [
        {
          "name": "Emotional Appeal",
          "reason": "Uses emotionally charged language to evoke a strong response from the reader.",
          "text": "An Irish man has been shot dead after a stand-off with police in Malta after he allegedly killed his ex-partner in an apartment."
      },
      {
          "name": "Omission of Context",
          "reason": "Does not provide a complete picture of the relationship between the victim and perpetrator.",
          "text": "The article doesn't delve into the complexities of the relationship between the victim and the perpetrator"
      }
    ] as Tactic[],

    summary: `
      Irish man shot dead by Maltese police after standoff.
      Ex-partner found murdered in apartment.
      Man suspected of killing ex-partner.
      Standoff lasted three hours.
      Police Commissioner outlines events.
      `,
      scales: [{name: "Political", description: "Not found", score: 4}] as Scale[],
      conclusion: "",
      related: [
        {
          id: '101',
          publisher: "Independent.ie",
          date: "12/08/2024",
          author: "Independent.ie",
          link: "https://www.independent.ie/irish-news/crime/irish-man-50-shot-dead-in-malta-after-ex-partners-body-found-in-apartment/a1366613683.html",
          title: "Irishman shot dead in Maltese police after ex-partner’s body found in apartment",
          details: "",
          content: "",
          tactics: [{name: "Not found", reason: "Not found", text: ""}] as Tactic[],
          summary: `
            Irish man shot dead by Maltese police after standoff.
            Ex-partner found murdered in apartment.
            Man suspected of killing ex-partner.
            Standoff lasted three hours.
            Police Commissioner outlines events.
            `,
            scales: [{name: "Political", description: "Not found", score: 4}] as Scale[],
            conclusion: "",
            related: [],               
        },
        {
          id: '102',
          publisher: "Irish Examiner",
          date: "12/08/2024",
          author: "Irish Examiner",
          link: "https://www.irishexaminer.com/news/arid-41454697.html",
          title: "Irishman killed by police in Malta after allegedly murdering woman",
          details: "",
          content: "",
          tactics: [{name: "", reason: "Not found", text: ""}] as Tactic[],
          summary: `
            Irish man, Edward Johnston, allegedly murders his ex-partner Nicolette Ghirxi in Malta.
            Johnston holds staff at a Hilton Hotel hostage with a replica gun, confesses to the murder.
            Police engage in a standoff with Johnston, who eventually points the replica gun at them and is shot dead.
            Ghirxi had filed harassment complaints against Johnston previously.
            The incident has sparked outrage and calls for action against violence against women in Malta.
            `,
          scales: [{name: "Political", description: "Not found", score: 3}] as Scale[],
          conclusion: "",
          related: [],
        },
        {
          id: '103',
          publisher: "Irish Times",
          date: "12/08/2024",
          author: "Irish Times",
          link: "https://www.irishtimes.com/crime-law/2024/08/12/irishman-shot-dead-by-police-in-malta-after-allegedly-murdering-former-partner/",
          title:
            "Irish man shot dead by police in Malta after allegedly murdering former partner",
          details: "",
          content: "",
          tactics: [
            {name: "Emotional Appeal", reason: "Not found", text: ""},
            {name: "Framing", reason: "Not found", text: ""},
            {name: "Omission of Context", reason: "Not found", text: ""}
          ] as Tactic[],
          summary: `
            "Irish man shot dead by Maltese police.",
            "Man allegedly murdered his former partner before the shooting.",
            "Police negotiated with the man before shooting him.",
            "Woman's body found with multiple knife wounds.",
            "Man had a history of harassing the victim.",
          `,
          scales: [{name: "Political", description: "Not found", score: 2}] as Scale[],
          conclusion: "",
          related: []
        }
      ],     
  },
  {
    id: '102',
    publisher: "Irish Examiner",
    date: "12/08/2024",
    author: "Irish Examiner",
    link: "https://www.irishexaminer.com/news/arid-41454697.html",
    title: "Irishman killed by police in Malta after allegedly murdering woman",
    details: "",
    content: "",
    tactics: [
      {
        "name": "Appeal to emotion",
        "reason": "The article uses emotionally charged language to evoke sympathy for the victims and outrage towards the perpetrator.",
        "text": "The incident has sparked outrage in Malta, with calls to address violence against women."
      },
      {
        "name": "Slippery slope",
        "reason": "The article suggests that if violence against women is not addressed, it could lead to more serious consequences.",
        "text": "The epidemic of violence against women cannot go on."
      }      
    ] as Tactic[],
    summary: `
      Irish man, Edward Johnston, allegedly murders his ex-partner Nicolette Ghirxi in Malta.
      Johnston holds staff at a Hilton Hotel hostage with a replica gun, confesses to the murder.
      Police engage in a standoff with Johnston, who eventually points the replica gun at them and is shot dead.
      Ghirxi had filed harassment complaints against Johnston previously.
      The incident has sparked outrage and calls for action against violence against women in Malta.
      `,
    scales: [{name: "Political", description: "Not found", score: 3}] as Scale[],
    conclusion: "",
    related: [
      {
        id: '101',
        publisher: "Independent.ie",
        date: "12/08/2024",
        author: "Independent.ie",
        link: "https://www.independent.ie/irish-news/crime/irish-man-50-shot-dead-in-malta-after-ex-partners-body-found-in-apartment/a1366613683.html",
        title: "Irishman shot dead in Maltese police after ex-partner’s body found in apartment",
        details: "",
        content: "",
        tactics: [{name: "", reason: "Not found", text: ""}] as Tactic[],
        summary: `
          Irish man shot dead by Maltese police after standoff.
          Ex-partner found murdered in apartment.
          Man suspected of killing ex-partner.
          Standoff lasted three hours.
          Police Commissioner outlines events.
          `,
          scales: [{name: "Political", description: "Not found", score: 4}] as Scale[],
          conclusion: "",
          related: [],               
      },
      {
        id: '102',
        publisher: "Irish Examiner",
        date: "12/08/2024",
        author: "Irish Examiner",
        link: "https://www.irishexaminer.com/news/arid-41454697.html",
        title: "Irishman killed by police in Malta after allegedly murdering woman",
        details: "",
        content: "",
        tactics: [{name: "", reason: "Not found", text: ""}] as Tactic[],
        summary: `
          Irish man, Edward Johnston, allegedly murders his ex-partner Nicolette Ghirxi in Malta.
          Johnston holds staff at a Hilton Hotel hostage with a replica gun, confesses to the murder.
          Police engage in a standoff with Johnston, who eventually points the replica gun at them and is shot dead.
          Ghirxi had filed harassment complaints against Johnston previously.
          The incident has sparked outrage and calls for action against violence against women in Malta.
          `,
        scales: [{name: "Political", description: "Not found", score: 3}] as Scale[],
        conclusion: "",
        related: [],
      },
      {
        id: '103',
        publisher: "Irish Times",
        date: "12/08/2024",
        author: "Irish Times",
        link: "https://www.irishtimes.com/crime-law/2024/08/12/irishman-shot-dead-by-police-in-malta-after-allegedly-murdering-former-partner/",
        title:
          "Irish man shot dead by police in Malta after allegedly murdering former partner",
        details: "",
        content: "",
        tactics: [
          {name: "Emotional Appeal", reason: "Not found", text: ""},
          {name: "Framing", reason: "Not found", text: ""},
          {name: "Omission of Context", reason: "Not found", text: ""}
        ] as Tactic[],
        summary: `
          "Irish man shot dead by Maltese police.",
          "Man allegedly murdered his former partner before the shooting.",
          "Police negotiated with the man before shooting him.",
          "Woman's body found with multiple knife wounds.",
          "Man had a history of harassing the victim.",
        `,
        scales: [{name: "Political", description: "Not found", score: 2}] as Scale[],
        conclusion: "",
        related: []
      }
    ],
  },
  {
    id: '103',
    publisher: "Irish Times",
    date: "12/08/2024",
    author: "Irish Times",
    link: "https://www.irishtimes.com/crime-law/2024/08/12/irishman-shot-dead-by-police-in-malta-after-allegedly-murdering-former-partner/",
    title:
      "Irish man shot dead by police in Malta after allegedly murdering former partner",
    details: "",
    content: "",
    tactics: [
      {
        "name": "Emotional Appeal",
        "reason": "The article heavily relies on emotional content, such as the tragic deaths and the nature of the crime, which can influence readers' perceptions and responses.",
        "text": "An Irish man has been shot dead by police in Birkirkara, Malta after allegedly murdering a woman on Sunday."
      },
      {
        "name": "Framing",
        "reason": "The article's framing of the events, focusing on the actions of the individuals involved rather than broader societal issues, might limit alternative perspectives.",
        "text": "The man, who sources identified as Edward Johnston (50), is believed to have killed Nicolette Ghirxi (48) with a knife in an apartment in Birkirkara, a city in the east of Malta’s main island."
      },
      {
        "name": "Omission of Context",
        "reason": "The article doesn't delve into potential underlying factors that might contribute to such violence, such as mental health, domestic violence statistics, or societal pressures. This omission can shape readers' understanding of the incident.",
        "text": "The Irish embassy in Malta confirmed it is aware an Irish man has been killed by police."
      }
    ] as Tactic[],
    summary: `
      "Irish man shot dead by Maltese police.",
      "Man allegedly murdered his former partner before the shooting.",
      "Police negotiated with the man before shooting him.",
      "Woman's body found with multiple knife wounds.",
      "Man had a history of harassing the victim.",
    `,
    scales: [{name: "Political", description: "Not found", score: 2}] as Scale[],
    conclusion: "",
    related: [
      {
        id: '101',
        publisher: "Independent.ie",
        date: "12/08/2024",
        author: "Independent.ie",
        link: "https://www.independent.ie/irish-news/crime/irish-man-50-shot-dead-in-malta-after-ex-partners-body-found-in-apartment/a1366613683.html",
        title: "Irishman shot dead in Maltese police after ex-partner’s body found in apartment",
        details: "",
        content: "",
        tactics: [{name: "", reason: "Not found", text: ""}] as Tactic[],
        summary: `
          Irish man shot dead by Maltese police after standoff.
          Ex-partner found murdered in apartment.
          Man suspected of killing ex-partner.
          Standoff lasted three hours.
          Police Commissioner outlines events.
          `,
          scales: [{name: "Political", description: "Not found", score: 4}] as Scale[],
          conclusion: "",
          related: [],               
      },
      {
        id: '102',
        publisher: "Irish Examiner",
        date: "12/08/2024",
        author: "Irish Examiner",
        link: "https://www.irishexaminer.com/news/arid-41454697.html",
        title: "Irishman killed by police in Malta after allegedly murdering woman",
        details: "",
        content: "",
        tactics: [{name: "", reason: "Not found", text: ""}] as Tactic[],
        summary: `
          Irish man, Edward Johnston, allegedly murders his ex-partner Nicolette Ghirxi in Malta.
          Johnston holds staff at a Hilton Hotel hostage with a replica gun, confesses to the murder.
          Police engage in a standoff with Johnston, who eventually points the replica gun at them and is shot dead.
          Ghirxi had filed harassment complaints against Johnston previously.
          The incident has sparked outrage and calls for action against violence against women in Malta.
          `,
        scales: [{name: "Political", description: "Not found", score: 3}] as Scale[],
        conclusion: "",
        related: [],
      },
      {
        id: '103',
        publisher: "Irish Times",
        date: "12/08/2024",
        author: "Irish Times",
        link: "https://www.irishtimes.com/crime-law/2024/08/12/irishman-shot-dead-by-police-in-malta-after-allegedly-murdering-former-partner/",
        title:
          "Irish man shot dead by police in Malta after allegedly murdering former partner",
        details: "",
        content: "",
        tactics: [
          {name: "Emotional Appeal", reason: "Not found", text: ""},
          {name: "Framing", reason: "Not found", text: ""},
          {name: "Omission of Context", reason: "Not found", text: ""}
        ] as Tactic[],
        summary: `
          "Irish man shot dead by Maltese police.",
          "Man allegedly murdered his former partner before the shooting.",
          "Police negotiated with the man before shooting him.",
          "Woman's body found with multiple knife wounds.",
          "Man had a history of harassing the victim.",
        `,
        scales: [{name: "Political", description: "Not found", score: 2}] as Scale[],
        conclusion: "",
        related: []
      }
    ],
  },

  {
    "id": "0",
    "publisher": "The Journal",
    "date": "Thu, 9 May 2024 10:48:03 +0000",
    "author": "Sadbh Cox",
    "link": "https://www.thejournal.ie/should-the-voting-age-be-lowered-to-16-poll-6374682-May2024/",
    "title": "Should the voting age be lowered to 16?",
    "details": "Have your say.",
    "content": "JUST UNDER TWO-FIFTHS of young people believe that the voting age should be lowered to sixteen, according to a new survey. The report by the Ombudsman for Children’s Office found that 39% of people voted yes when asked if they think young people in Ireland should be able to vote at age sixteen, while 50% said no and 11% said they’re not sure. Over 1,000 secondary school students took part in the survey. Earlier this year, Minister for Education Norma Foley has said that lowering the voting age to 16 is a “discussion worth having”. Other EU countries already have a lower voting age, with Belgium and Germany joining Austria, Greece and Malta in allowing sixteen-year-olds to cast their vote in the recent European Elections.",
    "tactics": [
      {
        "name": "Framing",
        "reason": "The article emphasizes the percentage of young people who support lowering the voting age (JUST UNDER TWO-FIFTHS) to make it seem like a significant majority, while downplaying the percentage who oppose it.",
        "text": "JUST UNDER TWO-FIFTHS of young people believe that the voting age should be lowered to sixteen, according to a new survey."
      },
      {
        "name": "Cherry-picking",
        "reason": "The article only mentions countries in the EU that have lowered the voting age, ignoring countries that haven't. This creates a misleading impression that lowering the voting age is a common practice.",
        "text": "Other EU countries already have a lower voting age"
      },
      {
        "name": "Appeal to Authority",
        "reason": "Quoting a Minister's statement about lowering the voting age being a “discussion worth having” adds an air of legitimacy and implies that it's a serious proposal worth considering.",
        "text": "MINISTER FOR EDUCATION Norma Foley has said that"
      }
    ],
    "summary": "A survey of over 1,000 Irish secondary school students found that 39% support lowering the voting age to 16, while 50% oppose it.  The survey was conducted by the Ombudsman for Children's Office. The Minister for Education, Norma Foley, has said that lowering the voting age is a \"discussion worth having.\"  Several European countries, including Belgium, Germany, Austria, Greece, and Malta, allow sixteen-year-olds to vote in elections. \n",
    "scales": [
      {
        "name": "Positivity",
        "description": "The article presents a neutral stance on the topic of lowering the voting age. It simply reports on the survey results and mentions the Minister's support for discussion, without expressing an opinion on the issue itself.",
        "score": 50
      },
      {
        "name": "Objectivity",
        "description": "The article focuses on presenting factual information from the survey and mentions the opinions of relevant figures, like the Minister for Education. It avoids biased language and presents both sides of the issue.",
        "score": 80
      },
      {
        "name": "Complexity",
        "description": "The article is relatively simple, focusing on presenting the survey results and providing some context with the Minister's statement and international comparisons. It doesn't delve deeply into the arguments for or against lowering the voting age.",
        "score": 40
      }
    ],
    "conclusion": "The article presents a neutral stance on the issue of lowering the voting age to 16, reporting on a survey of Irish secondary school students and highlighting the Minister for Education's support for discussing the topic. While presenting factual information, the article utilizes framing and cherry-picking tactics to potentially influence reader perception. The article could have benefitted from more complex analysis of the arguments for and against lowering the voting age, going beyond the simple presentation of survey results.  \n",
    "related": [
      {
        "id": "1",
        "publisher": "The Guardian",
        "date": "Thu, 16 May 2024 12:30:17 +0000",
        "author": "Patrick Kingsley",
        "link": "https://www.theguardian.com/world/2024/may/16/should-the-voting-age-be-lowered-to-16-the-arguments-for-and-against",
        "title": "Should the voting age be lowered to 16? The arguments for and against",
        "details": "Across the world, countries are grappling with whether to give 16- and 17-year-olds the right to vote.  The debate has intensified in recent years with several countries lowering their voting age, while others are considering doing the same.  What are the arguments for and against this change?",
        "content": "The debate about lowering the voting age to 16 has intensified in recent years.  In Europe, Austria, Greece, Malta, and Scotland have all lowered their voting age to 16, while other countries such as Belgium and Germany have allowed 16-year-olds to vote in European elections.  In the United States, some states have considered lowering the voting age for local or state elections, but there has been no movement at the federal level.  Proponents of lowering the voting age argue that it would empower young people, encourage civic engagement, and provide a more representative democracy.  They also point out that 16-year-olds are already able to drive, work, and pay taxes.  Opponents argue that young people are not mature enough to make informed political decisions and that lowering the voting age would be a step backward for democracy.  They also worry that it would lead to increased political polarization and that young people would be more easily swayed by political propaganda.  Ultimately, the decision of whether or not to lower the voting age is a complex one with no easy answers.  It is a decision that each country must make based on its own unique circumstances and values.",
        "tactics": [
          {
            "name": "Neutral Tone",
            "reason": "The article presents a balanced overview of the arguments for and against lowering the voting age, avoiding strong opinions or biased language.",
            "text": "The debate about lowering the voting age to 16 has intensified in recent years."
          },
          {
            "name": "Fact-Checking",
            "reason": "The article provides factual information about countries that have lowered the voting age, including both those that have done so for all elections and those that have done so for specific elections.",
            "text": "In Europe, Austria, Greece, Malta, and Scotland have all lowered their voting age to 16, while other countries such as Belgium and Germany have allowed 16-year-olds to vote in European elections."
          },
          {
            "name": "Reasoned Arguments",
            "reason": "The article outlines the main arguments put forward by both proponents and opponents of lowering the voting age, providing context and evidence for each point of view.",
            "text": "Proponents of lowering the voting age argue that it would empower young people, encourage civic engagement, and provide a more representative democracy.  They also point out that 16-year-olds are already able to drive, work, and pay taxes."
          }
        ],
        "summary": "The debate about lowering the voting age to 16 has intensified in recent years, with several countries already taking action and others considering it. Proponents argue that it would empower young people, encourage civic engagement, and provide a more representative democracy. Opponents contend that young people are not mature enough to make informed political decisions and worry about potential negative consequences for democracy. Ultimately, the decision is complex and requires careful consideration of each country's unique circumstances and values.",
        "scales": [
          {
            "name": "Positivity",
            "description": "The article presents a neutral stance on the topic of lowering the voting age, focusing on providing a balanced overview of the arguments for and against. It avoids taking a position or expressing a preference.",
            "score": 50
          },
          {
            "name": "Objectivity",
            "description": "The article is highly objective, presenting factual information about countries that have lowered the voting age and outlining the main arguments from both sides of the debate. It avoids biased language or framing.",
            "score": 90
          },
          {
            "name": "Complexity",
            "description": "The article provides a comprehensive overview of the issue, exploring both the arguments for and against lowering the voting age and considering the potential consequences of such a change. It demonstrates a nuanced understanding of the topic.",
            "score": 80
          }
        ],
        "conclusion": "The article provides a balanced and insightful overview of the debate surrounding lowering the voting age to 16, presenting both sides of the argument and exploring the potential consequences of such a change. It is a valuable resource for anyone interested in understanding the complex issue of voting rights for young people. The article's neutral tone, factual information, and reasoned arguments contribute to its objectivity and overall value as a piece of informative journalism.",
        related: []
      },

      {
        "id": "2",
        "publisher": "The New York Times",
        "date": "Mon, 20 May 2024 17:52:11 +0000",
        "author": "Stephanie Strom",
        "link": "https://www.nytimes.com/2024/05/20/world/europe/voting-age-16-austria-greece-malta-scotland.html",
        "title": "More European Countries Lower Voting Age to 16, but Debate Rages On",
        "details": "A growing number of European countries are lowering the voting age to 16, but the debate over whether it's a good idea is heating up.",
        "content": "A growing number of European countries are lowering the voting age to 16, but the debate over whether it's a good idea is heating up. Austria, Greece, Malta, and Scotland have all lowered their voting age to 16 in recent years.  Belgium and Germany have allowed 16-year-olds to vote in European elections.  Proponents of lowering the voting age argue that it would empower young people, encourage civic engagement, and provide a more representative democracy.  They also point out that 16-year-olds are already able to drive, work, and pay taxes.  Opponents argue that young people are not mature enough to make informed political decisions and that lowering the voting age would be a step backward for democracy.  They also worry that it would lead to increased political polarization and that young people would be more easily swayed by political propaganda.  The debate is likely to continue in Europe and elsewhere, as more countries consider lowering the voting age.  Ultimately, the decision of whether or not to lower the voting age is a complex one with no easy answers.  It is a decision that each country must make based on its own unique circumstances and values.",
        "tactics": [
          {
            "name": "Neutral Tone",
            "reason": "The article presents a neutral overview of the debate, acknowledging both arguments for and against lowering the voting age without taking a side.",
            "text": "A growing number of European countries are lowering the voting age to 16, but the debate over whether it's a good idea is heating up."
          },
          {
            "name": "Fact-Checking",
            "reason": "The article provides factual information about countries that have lowered the voting age and clarifies the types of elections where this change has occurred.",
            "text": "Austria, Greece, Malta, and Scotland have all lowered their voting age to 16 in recent years.  Belgium and Germany have allowed 16-year-olds to vote in European elections."
          },
          {
            "name": "Reasoned Arguments",
            "reason": "The article outlines the main arguments put forward by both proponents and opponents of lowering the voting age, providing a balanced overview of the different perspectives.",
            "text": "Proponents of lowering the voting age argue that it would empower young people, encourage civic engagement, and provide a more representative democracy.  They also point out that 16-year-olds are already able to drive, work, and pay taxes."
          }
        ],
        "summary": "Several European countries, including Austria, Greece, Malta, and Scotland, have recently lowered their voting age to 16. Belgium and Germany have also allowed 16-year-olds to vote in European elections.  Proponents argue that lowering the voting age would empower young people, encourage civic engagement, and create a more representative democracy.  Opponents argue that young people are not mature enough to make informed political decisions and worry about potential negative consequences for democracy. The debate is expected to continue as more countries consider lowering the voting age, requiring careful consideration of each country's unique circumstances and values.",
        "scales": [
          {
            "name": "Positivity",
            "description": "The article presents a neutral stance on the topic of lowering the voting age, focusing on providing a balanced overview of the arguments for and against. It avoids taking a position or expressing a preference.",
            "score": 50
          },
          {
            "name": "Objectivity",
            "description": "The article is highly objective, presenting factual information about countries that have lowered the voting age and outlining the main arguments from both sides of the debate. It avoids biased language or framing.",
            "score": 90
          },
          {
            "name": "Complexity",
            "description": "The article provides a comprehensive overview of the issue, exploring both the arguments for and against lowering the voting age and considering the potential consequences of such a change. It demonstrates a nuanced understanding of the topic.",
            "score": 80
          }
        ],
        "conclusion": "The article provides a balanced and insightful overview of the debate surrounding lowering the voting age to 16, presenting both sides of the argument and exploring the potential consequences of such a change. It is a valuable resource for anyone interested in understanding the complex issue of voting rights for young people. The article's neutral tone, factual information, and reasoned arguments contribute to its objectivity and overall value as a piece of informative journalism.",
        related: []
      },
      {
        "id": "3",
        "publisher": "CNN",
        "date": "Tue, 21 May 2024 09:47:23 +0000",
        "author": "Oliver Darcy",
        "link": "https://www.cnn.com/2024/05/21/media/voting-age-16-europe-debate-intl/index.html",
        "title": "Lowering the voting age to 16: A growing debate in Europe",
        "details": "Several European countries have lowered the voting age to 16, but the debate about whether it's a good idea is intensifying.",
        "content": "The debate over lowering the voting age to 16 has intensified in Europe, with several countries already making the change and others considering it. Austria, Greece, Malta, and Scotland have all lowered their voting age to 16 in recent years.  Belgium and Germany have allowed 16-year-olds to vote in European elections.  Proponents of lowering the voting age argue that it would empower young people, encourage civic engagement, and provide a more representative democracy.  They also point out that 16-year-olds are already able to drive, work, and pay taxes.  Opponents argue that young people are not mature enough to make informed political decisions and that lowering the voting age would be a step backward for democracy.  They also worry that it would lead to increased political polarization and that young people would be more easily swayed by political propaganda.  The debate is likely to continue in Europe and elsewhere, as more countries consider lowering the voting age.  Ultimately, the decision of whether or not to lower the voting age is a complex one with no easy answers.  It is a decision that each country must make based on its own unique circumstances and values.",
        "tactics": [
          {
            "name": "Neutral Tone",
            "reason": "The article presents a neutral overview of the debate, acknowledging both arguments for and against lowering the voting age without taking a side.",
            "text": "The debate over lowering the voting age to 16 has intensified in Europe, with several countries already making the change and others considering it."
          },
          {
            "name": "Fact-Checking",
            "reason": "The article provides factual information about countries that have lowered the voting age and clarifies the types of elections where this change has occurred.",
            "text": "Austria, Greece, Malta, and Scotland have all lowered their voting age to 16 in recent years.  Belgium and Germany have allowed 16-year-olds to vote in European elections."
          },
          {
            "name": "Reasoned Arguments",
            "reason": "The article outlines the main arguments put forward by both proponents and opponents of lowering the voting age, providing a balanced overview of the different perspectives.",
            "text": "Proponents of lowering the voting age argue that it would empower young people, encourage civic engagement, and provide a more representative democracy.  They also point out that 16-year-olds are already able to drive, work, and pay taxes."
          }
        ],
        "summary": "The debate over lowering the voting age to 16 has intensified in Europe, with several countries already making the change and others considering it.  Proponents argue that it would empower young people, encourage civic engagement, and create a more representative democracy.  Opponents argue that young people are not mature enough to make informed political decisions and worry about potential negative consequences for democracy. The debate is expected to continue as more countries consider lowering the voting age, requiring careful consideration of each country's unique circumstances and values.",
        "scales": [
          {
            "name": "Positivity",
            "description": "The article presents a neutral stance on the topic of lowering the voting age, focusing on providing a balanced overview of the arguments for and against. It avoids taking a position or expressing a preference.",
            "score": 50
          },
          {
            "name": "Objectivity",
            "description": "The article is highly objective, presenting factual information about countries that have lowered the voting age and outlining the main arguments from both sides of the debate. It avoids biased language or framing.",
            "score": 90
          },
          {
            "name": "Complexity",
            "description": "The article provides a comprehensive overview of the issue, exploring both the arguments for and against lowering the voting age and considering the potential consequences of such a change. It demonstrates a nuanced understanding of the topic.",
            "score": 80
          }
        ],
        "conclusion": "The article provides a balanced and insightful overview of the debate surrounding lowering the voting age to 16, presenting both sides of the argument and exploring the potential consequences of such a change. It is a valuable resource for anyone interested in understanding the complex issue of voting rights for young people. The article's neutral tone, factual information, and reasoned arguments contribute to its objectivity and overall value as a piece of informative journalism.",
        related: []
      }
    ]
  },
  {
    "id": "1",
    "publisher": "The Journal",
    "date": "Thu, 8 Aug 2024 11:38:03 +0000",
    "author": "Muiris O'Cearbhaill",
    "link": "https://www.thejournal.ie/ireland-ice-cream-exports-6458127-Aug2024/",
    "title": "Ireland is the fifth-largest exporter of ice cream in the EU",
    "details": "A total of 9% of Europe’s ice cream came from Ireland in 2023.",
    "content": "IRELAND EXPORTS ALMOST 25 million kilograms of ice cream last year, ranking it the fifth-largest exporter of the frozen treat in the EU. According to Eurostat, 9% of Europe’s ice cream comes from Ireland, placing behind Italy, Germany, Netherlands and France. In total, 261 million kilograms of sundaes was exported from the EU to non-EU countries last year. Though member states produced 3.2 billion litres of ice cream, there was a 1.4% reduction in the production of the frozen good last year, compared to 2022. There was a similar reduction in the level of dairy exports last year. A total of €4.08 billion of dairy products and birds’ eggs were exported by Ireland last year to other countries. In 2022, €4.35 billion worth of the goods were exported. Dairy and eggs were the second-largest collection of goods in the Food and Live Animal group that were exported last year. France ranked top of the table for ice cream exports last year, with 20% of Europe’s ice cream coming from the country. Approximately 52 million kilograms of French ice cream was exported out of the EU last year. Ireland’s ice cream market, according to Dairyglen in 2020, is worth €150 million. The global gelato market is worth around €56.7 billion. Around a third of purchases of choc ices, and the likes, are impulse buys. The most expensive ice cream in the EU was produced in Austria, with an average price of €7.70 per litre. The cheapest cone can be found in Sweden, at €2.10 per litre. Europeans are the largest consumers of ice cream globally.",
    "tactics": [
      {
        "name": "Appeal to Authority",
        "reason": "The article cites Eurostat, a reputable source, to support its claim about Ireland's ranking as the fifth-largest exporter of ice cream in the EU. This gives the information more credibility, even though the source is not directly related to the ice cream industry.",
        "text": "According to Eurostat, 9% of Europe’s ice cream comes from Ireland, placing behind Italy, Germany, Netherlands and France."
      },
      {
        "name": "Cherry Picking",
        "reason": "The article focuses on Ireland's high ranking in ice cream exports without mentioning the overall decrease in ice cream production across the EU. This paints a more positive picture of the situation than the complete picture would.",
        "text": "IRELAND EXPORTS ALMOST 25 million kilograms of ice cream last year, ranking it the fifth-largest exporter of the frozen treat in the EU. According to Eurostat, 9% of Europe’s ice cream comes from Ireland, placing behind Italy, Germany, Netherlands and France. Though member states produced 3.2 billion litres of ice cream, there was a 1.4% reduction in the production of the frozen good last year, compared to 2022."
      },
      {
        "name": "Bandwagon Effect",
        "reason": "The article mentions that Europeans are the largest consumers of ice cream globally, implying that it's a common and desirable product. This could influence readers to see Ireland's ice cream exports as more positive.",
        "text": "Europeans are the largest consumers of ice cream globally."
      }
    ],
    "summary": "Ireland exported almost 25 million kilograms of ice cream in 2023, ranking it the fifth-largest exporter in the EU. This represents 9% of Europe's ice cream exports. Overall, EU ice cream production decreased by 1.4% in 2023 compared to 2022. Ireland also exported €4.08 billion worth of dairy products and eggs in 2023, a decrease from €4.35 billion in 2022. France is the top EU ice cream exporter, exporting 20% of Europe's ice cream. The global gelato market is worth €56.7 billion, and Europeans are the largest consumers of ice cream globally. \n",
    "scales": [
      {
        "name": "Positivity",
        "description": "The article presents factual information about Ireland's ice cream exports and the broader European ice cream market. There is no explicit expression of positive or negative sentiment.",
        "score": 50
      },
      {
        "name": "Objectivity",
        "description": "The article relies on data and statistics from sources like Eurostat and Dairyglen. It presents facts and figures without significant bias or subjective interpretation.",
        "score": 80
      },
      {
        "name": "Complexity",
        "description": "The article covers a range of data points about ice cream production, export, and consumption in the EU. However, it lacks in-depth analysis or exploration of the underlying factors influencing these trends.",
        "score": 60
      }
    ],
    "conclusion": "This article presents a factual account of Ireland's position as a significant ice cream exporter within the EU. It relies on data from reputable sources like Eurostat and Dairyglen, showcasing objectivity in its presentation. However, the article lacks in-depth analysis, focusing primarily on presenting statistics without exploring the factors driving the trends. While it highlights Ireland's success in the ice cream export market, it also mentions the overall decrease in European ice cream production, which could be further investigated. The article's use of the bandwagon effect to emphasize European ice cream consumption might subtly influence readers towards a positive view of Ireland's export performance. Overall, the article provides valuable data on the ice cream industry but lacks a nuanced perspective on the broader context and potential implications. \n",
    "related": [
      {
        "id": "2",
        "publisher": "The Irish Times",
        "date": "Mon, 5 Aug 2024 18:43:10 +0000",
        "author": "Olivia Lynch",
        "link": "https://www.irishtimes.com/business/2024/08/05/irish-ice-cream-companies-face-challenges-as-sugar-prices-rise/",
        "title": "Irish ice cream makers face sweet dilemma as sugar prices soar",
        "details": "Rising sugar prices are putting pressure on Irish ice cream companies, forcing them to raise prices or absorb the costs.",
        "content": "Irish ice cream producers are facing a sticky situation as global sugar prices soar, forcing them to navigate a sweet dilemma of raising prices or absorbing the costs.   The global sugar price has risen by more than 50 per cent in the past year, according to the International Sugar Organisation, and this is being felt by Irish ice cream makers.  “We are seeing a huge increase in the price of sugar,” said John O’Brien, managing director of O’Brien’s Ice Cream, which has been making ice cream in Dublin since 1985. “It’s really impacting the business. We have had to absorb some of the increase, but we have also had to increase our prices, which is never easy, especially in the current economic climate.”  Some ice cream producers have been able to mitigate the impact of the rising sugar prices by using alternative sweeteners, such as honey or agave syrup. However, this is not always possible, as these alternative sweeteners are often more expensive.  “We have to use sugar in our ice cream, as it is a key ingredient in terms of texture and flavour,” said O’Brien. “We are trying to find ways to reduce the amount of sugar we use, but it is a delicate balance.”  The rising sugar prices are just one of the challenges that Irish ice cream companies are facing. They are also dealing with rising energy costs, labour shortages and supply chain disruptions.  “It’s a tough time for everyone in the food industry,” said O’Brien. “We are all having to adapt to changing circumstances.”   The Irish ice cream industry is worth €150 million, according to Dairyglen, and it is a vital part of the Irish economy. The industry employs over 1,000 people and exports ice cream to over 30 countries.   The rising sugar prices could have a significant impact on the Irish ice cream industry, but many companies are confident that they can weather the storm.  “We are committed to producing high-quality ice cream that our customers love,” said O’Brien. “We are confident that we can overcome these challenges and continue to grow our business.”",
        "tactics": [
          {
            "name": "Appeal to Emotion",
            "reason": "The article uses emotional language like \"sticky situation\" and \"sweet dilemma\" to make the reader empathize with ice cream producers facing rising sugar prices.",
            "text": "Irish ice cream producers are facing a sticky situation as global sugar prices soar, forcing them to navigate a sweet dilemma of raising prices or absorbing the costs."
          },
          {
            "name": "Anecdotal Evidence",
            "reason": "The article uses the experience of John O'Brien, managing director of O'Brien's Ice Cream, to illustrate the challenges faced by the industry. This personalizes the issue and makes it more relatable.",
            "text": "“We are seeing a huge increase in the price of sugar,” said John O’Brien, managing director of O’Brien’s Ice Cream, which has been making ice cream in Dublin since 1985. “It’s really impacting the business. We have had to absorb some of the increase, but we have also had to increase our prices, which is never easy, especially in the current economic climate.”"
          },
          {
            "name": "Appeal to Authority",
            "reason": "The article cites the International Sugar Organisation, a reputable authority on sugar prices, to support its claims about rising prices.",
            "text": "The global sugar price has risen by more than 50 per cent in the past year, according to the International Sugar Organisation, and this is being felt by Irish ice cream makers."
          }
        ],
        "summary": "Irish ice cream producers are struggling with rising sugar prices, which have increased by over 50% in the past year. They are facing the difficult choice of raising prices or absorbing the costs. While some producers are exploring alternative sweeteners, sugar remains a crucial ingredient for ice cream texture and flavor. The rising sugar prices add to other challenges faced by the industry, including rising energy costs, labor shortages, and supply chain disruptions. Despite these challenges, the industry is worth €150 million and exports ice cream to over 30 countries.",
        "scales": [
          {
            "name": "Positivity",
            "description": "The article acknowledges the challenges faced by ice cream producers but also highlights their commitment to producing high-quality products and their confidence in overcoming challenges.",
            "score": 60
          },
          {
            "name": "Objectivity",
            "description": "The article presents the issue of rising sugar prices and its impact on the Irish ice cream industry through a balanced lens, including both the challenges and the potential for adaptation.",
            "score": 70
          },
          {
            "name": "Complexity",
            "description": "The article explores various aspects of the issue, including the rising cost of sugar, alternative sweeteners, other industry challenges, and the overall economic impact on the Irish ice cream industry.",
            "score": 70
          }
        ],
        "conclusion": "This article provides a balanced perspective on the impact of rising sugar prices on the Irish ice cream industry. It showcases the challenges faced by producers, including the difficult choice between price increases and absorbing costs. However, it also highlights the industry's resilience and commitment to quality, suggesting a potential for adaptation and continued growth. The article uses emotional language, anecdotes, and expert opinions to engage the reader and make the issue more relatable. While the focus is on the challenges, the article maintains a degree of optimism by emphasizing the industry's value and export potential. Overall, the article effectively portrays the complexities and potential consequences of rising sugar prices for the Irish ice cream sector.",
        related: []
      }
    ]
  },
  {
    "id": "2",
    "publisher": "The Journal",
    "date": "Mon, 5 Aug 2024 8:31:03 +0000",
    "author": "Paul O'Donoghue",
    "link": "https://www.thejournal.ie/house-prices-children-6444791-Aug2024/",
    "title": "House prices are rising and Ireland is having fewer children, this is not a coincidence",
    "details": "Ideally, people want to be financially stable before having children.",
    "content": "WHICH WOULD YOU prefer – a house, or a child? These two options may appear to be unrelated. But regular readers will know where this is going – property prices have ballooned in such a way in Ireland in recent years that there is now the suspicion that the two have recently become tightly linked.  Essentially, that higher house prices are at least partially responsible for women having less children.  While there has never been an in-depth study of whether this is true in Ireland, recent evidence points to the fact that it is likely something worth looking at.  Research published earlier this year by the Netherlands interdisciplinary demographic institute (NIDI) looked at how the average number of births per woman in the country fell from 1.8 in 2010 to 1.43 in 2022.  In short, it found that approximately 15% of this decline could be directly linked to higher house prices.  The authors of the study found that fertility decreased more strongly in regions with higher house price increases.  While researchers said there could be more factors at play, it gives the strong suggestion that more house prices play a role in fertility.  But why is this important, and why would a similar study be worth doing in Ireland?  Ireland’s plummeting fertility rate  A country’s ‘fertility rate’ refers to the average number of children that are born to a woman over her lifetime, with a rate of 2 meaning a woman would give birth to 2 children.  This then feeds into something else called the ‘replacement level’ – that is, the number of births estimated to be needed to avoid population decline.  This level is generally said to be somewhere around 2.1 – meaning if a country’s fertility rate is below this, all other things being equal, the population would steadily fall.  Ireland previously had an incredibly high fertility rate of 4 around the mid 1960s.  By the mid-90s, this had roughly halved to just under 2 for a variety of reasons – women entering the workforce, greater education, improved access to contraception and so on.  After rising slightly to just under 2.1 between 2008 and 2011, the fertility rate then started steadily dropping.  A brief spike in 2021 aside, it has consistently fallen since, and is now just over 1.5 in 2023.  Putting that in an international context – while previously Ireland’s fertility rate was the highest in the EU for most of the period between 1998 and 2011, it is now barely above the EU average of 1.46.  The average age of first-time mothers is also rising, increasing from 28.2 in 2003 to 31.6 years in 2023.  From an economics standpoint, this is considered bad because it will likely accelerate the imbalance of young workers to retirees.  As covered previously, Ireland’s population is ageing. This means there will be fewer workers and more pensioners.  The implication of this is that a smaller working population will have to cover the tax burden for a variety of services, most notably the state pension.  The CSO has predicted that Ireland’s fertility rate will fall further still to 1.3 in the coming years.  While strong inward migration is predicted in the coming years, it isn’t guaranteed. Without it, Ireland’s population would shrink, with all the possible problems that could bring.  House price link  Now we come to the why – after being relatively stable around the late 2000s, what has caused Ireland’s fertility rate to drop since?  Again, a variety of factors have likely come into play, such as changing social attitudes and rising incomes.  But again, the suspicion is that cost of living pressures, with housing often the biggest expense, are playing an increasingly important role in deciding when – or if – women have children.  The hypothesis is essentially – children are expensive, with estimates that the cost of raising a child from birth until their 21st birthday in Ireland is over €100,000.  Given that, people want to be financially stable before having children if possible and also secure in their home.  Read Next\nRelated Reads  Opinion: Turn empty houses into homes - there is no more time for excuses  Major housing report criticises government for 'ineffective decision-making and risk aversion'\nNeither of these is normally the case in Ireland if you are renting, where your net worth is likely to be a tiny fraction compared to someone who owns their own home.  This is borne out in a 2016 English study, which found that a 10% increase in house prices leads to a 2.8% increase in births among owners and a 4.9% decrease in births among renters.  Good news for homeowners maybe – but the average age of first time buyers has steadily risen along with property values, hitting 35 last year.  Given that this is the age at which fertility begins to drop off, it would leave an extremely short window for someone to have children if they were waiting to secure their first home.  Further study needed  Of course, the counter argument is that as people get more educated and richer, the birth rate declines accordingly.  It is possible that rising house prices merely *delay* fertility – while women may have children later, the overall number of children they have may not vary greatly.  But this could also cause knock-on problems, such as greater difficulty in conceiving.  And while a weaker link between house prices and fertility is possible, the Dutch study indicates that the connection is stronger, indicating an inverse relationship between the two factors.  The possible social cost also shouldn’t be forgotten. Economists will naturally worry what an ageing population and lower births mean for the future workforce and funding pensions.  However, at a societal level, it is clearly a bad thing if women want to have children, but feel unable to because of the cost of keeping a roof over their head.  And while the international evidence is not conclusive, it certainly indicates this could be a factor.  Given the surge in Ireland’s house prices and the coincidental overlap with the sharp drop in the country’s fertility rate, a hard look at the issue by a body such as the Economic and Social Research Institute could be merited.  If women are having fewer children, it is something which should be by choice, rather than enforced as another ugly side effect of Ireland’s dysfunctional housing market.",
    "tactics": [
      {
        "name": "Appeal to Emotion",
        "reason": "The article uses emotional language and anecdotes to evoke feelings of sympathy and concern for women who may feel unable to have children due to housing costs.",
        "text": "However, at a societal level, it is clearly a bad thing if women want to have children, but feel unable to because of the cost of keeping a roof over their head."
      },
      {
        "name": "Correlation/Causation Fallacy",
        "reason": "The article suggests a causal link between rising house prices and declining fertility rates, but the correlation might be due to other factors or be coincidental.",
        "text": "Given the surge in Ireland’s house prices and the coincidental overlap with the sharp drop in the country’s fertility rate, a hard look at the issue by a body such as the Economic and Social Research Institute could be merited."
      },
      {
        "name": "Cherry-Picking",
        "reason": "The article focuses on the Dutch study that supports the claim of a link between house prices and fertility, while ignoring other studies or factors that might contradict the claim.",
        "text": "While researchers said there could be more factors at play, it gives the strong suggestion that more house prices play a role in fertility."
      },
      {
        "name": "Framing",
        "reason": "The article presents the issue of declining fertility as primarily caused by high house prices, potentially downplaying other contributing factors like changing social attitudes or economic conditions.",
        "text": "But again, the suspicion is that cost of living pressures, with housing often the biggest expense, are playing an increasingly important role in deciding when – or if – women have children."
      }
    ],
    "summary": "This article explores the potential link between rising house prices in Ireland and the country's declining fertility rate. While a direct causal relationship hasn't been definitively established, research from the Netherlands suggests a strong correlation. The article highlights the cost of raising children and the financial insecurity often associated with renting, suggesting that higher housing costs may deter people from starting families. The author calls for further research into this issue, particularly by the Economic and Social Research Institute, to better understand the potential impact of Ireland's dysfunctional housing market on women's ability to have children. \n",
    "scales": [
      {
        "name": "Positivity",
        "description": "The article has a negative tone, highlighting the potential negative consequences of high house prices on fertility rates and societal well-being.",
        "score": 20
      },
      {
        "name": "Objectivity",
        "description": "The article presents a balanced perspective by acknowledging both potential causes of the declining fertility rate and presenting evidence from different studies. It also highlights counterarguments and uncertainties.",
        "score": 70
      },
      {
        "name": "Complexity",
        "description": "The article explores a complex issue by discussing multiple factors influencing fertility rates, including economic pressures, social attitudes, and demographic trends. It delves into the potential link between house prices and fertility, using both international and Irish examples.",
        "score": 80
      }
    ],
    "conclusion": "This article raises a thought-provoking issue: the potential link between rising house prices and declining fertility rates in Ireland. While it acknowledges that a direct causal link hasn't been definitively proven, the author presents a compelling case by highlighting research from the Netherlands suggesting a strong correlation. The article effectively uses emotional language to evoke concern for women who may feel unable to have children due to housing costs. However, it relies heavily on the Dutch study and may be susceptible to the correlation/causation fallacy, potentially overlooking other factors influencing fertility rates. The article's strength lies in its call for further research, particularly by the Economic and Social Research Institute, to better understand the complex interplay between housing costs and fertility decisions in Ireland. \n",
    "related": [
      {
        "id": "1",
        "publisher": "The Irish Times",
        "date": "Wed, 7 Aug 2024 12:00:00 +0000",
        "author": "Olivia O'Carroll",
        "link": "https://www.irishtimes.com/news/social-affairs/housing-crisis-a-major-factor-in-declining-birth-rate-1.4875645",
        "title": "Housing crisis a major factor in declining birth rate, experts say",
        "details": "Experts warn that the housing crisis is a significant factor in Ireland's declining birth rate, alongside rising costs of living and changing societal attitudes.",
        "content": "The ongoing housing crisis is a significant factor in Ireland's declining birth rate, alongside rising costs of living and changing societal attitudes, according to experts.  Professor Sarahjane Belton, director of the Economic and Social Research Institute (ESRI), told The Irish Times that the cost of housing is a major barrier for young people who are considering starting a family. \"It's very difficult to have children when you're struggling to pay your rent or mortgage,\" she said.  Dr. Seán Ó Nuallain, a sociologist at University College Dublin, agreed that the housing crisis is a significant factor. \"People are simply unable to afford to have children in the current housing market,\" he said. \"Many young couples are stuck in insecure tenancies, and they are afraid to have children because they don't know where they will live.\"  Dr. Ó Nuallain added that the housing crisis is exacerbating other factors that are contributing to the declining birth rate, such as the rising cost of childcare and the increasing prevalence of precarious work.  The ESRI has predicted that Ireland's fertility rate will fall further still to 1.3 in the coming years. This would make Ireland one of the lowest fertility countries in the EU.  Professor Belton said that the declining birth rate is a serious concern for Ireland's future. \"It will have a significant impact on our economy and our society,\" she said. \"We need to find ways to address the housing crisis and make it easier for young people to start families.\"  Dr. Ó Nuallain said that the Government needs to take urgent action to address the housing crisis. \"We need to build more affordable homes and provide greater support for renters,\" he said. \"We also need to invest in childcare and early education to make it easier for parents to balance work and family life.\"  The Irish Times has contacted the Department of Housing for comment.",
        "tactics": [
          {
            "name": "Expert Opinion",
            "reason": "The article quotes experts from relevant fields to support the claim that the housing crisis is a significant factor in the declining birth rate.",
            "text": "\"It's very difficult to have children when you're struggling to pay your rent or mortgage,\" she said."
          },
          {
            "name": "Data and Statistics",
            "reason": "The article cites predictions from the ESRI regarding the future decline of Ireland's fertility rate.",
            "text": "The ESRI has predicted that Ireland's fertility rate will fall further still to 1.3 in the coming years."
          },
          {
            "name": "Problem-Solution",
            "reason": "The article identifies the housing crisis as a problem and proposes solutions such as building more affordable homes and supporting renters.",
            "text": "We need to build more affordable homes and provide greater support for renters."
          }
        ],
        "summary": "This article reports on the growing concerns surrounding the impact of the housing crisis on Ireland's declining birth rate. Experts from the ESRI and University College Dublin highlight the financial burden of housing on young couples and the resulting difficulty in starting families. The article also points to the increasing cost of childcare and precarious work as exacerbating factors. The article concludes with calls for government action to address the housing crisis and provide support for families.",
        "scales": [
          {
            "name": "Positivity",
            "description": "The article has a neutral tone, presenting the issue of declining birth rates and its connection to the housing crisis without expressing strong opinions.",
            "score": 50
          },
          {
            "name": "Objectivity",
            "description": "The article presents a balanced perspective by quoting experts from different institutions and acknowledging the various factors contributing to the declining birth rate.",
            "score": 70
          },
          {
            "name": "Complexity",
            "description": "The article explores the complex relationship between the housing crisis and declining birth rates, highlighting the impact of housing costs on family formation and the interplay with other economic and societal factors.",
            "score": 70
          }
        ],
        "conclusion": "This article effectively connects the housing crisis in Ireland to the country's declining birth rate, drawing on expert opinions and statistical data. It provides a balanced perspective by acknowledging the multifaceted nature of the issue, including rising costs of living, changing societal attitudes, and the impact of precarious work. The article concludes by advocating for government action to address the housing crisis and provide greater support for families, highlighting the urgency of this issue for Ireland's future.",
        related: []
      }
    ]
  }  

]

