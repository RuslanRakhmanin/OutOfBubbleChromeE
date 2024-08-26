# Environment setup  

Install webpack with npm:

```shell
npm install --save-dev webpack webpack-cli webpack-merge copy-webpack-plugin
```

Install TypeScript with:

```shell
npm install --save-dev typescript @tsconfig/recommended ts-node ts-loader @types/chrome
```

We can test `npm run start` and `npm run build` to ensure the new webpack Typescript configurations are working correctly.

To set up ESLint with typescript-eslint, we need to install the following packages:

```shell
npm install --save-dev eslint @eslint/js @types/eslint__js typescript-eslint
```

We can run ESLint with the following command:

```shell
npm run lint
```

To set up Prettier, we need to install the following package:

```shell
npm install --save-dev --save-exact prettier
```

`npm run format` will format all eligible files, while `npm run format-check` will check if the files are formatted.

We will use `style-loader` to inject CSS into our JavaScript and `css-loader` to convert our CSS file to a string. First, install the packages:

```shell
npm install --save-dev style-loader css-loader
```

We will use Tailwind CSS for our extension. It is a popular CSS framework focused on providing CSS utility classes. First, install these packages and generate the TypeScript config file:

```shell
npm install --save-dev tailwindcss postcss-loader
npx tailwindcss init --ts
```

## Snippets

### Set up the icon

Use the chrome.action.setIcon API: In your extension's JavaScript code, you can use the chrome.action.setIcon API to change the icon. Here's an example:

```javascript
chrome.action.setIcon({
  path: {
    128: "new_icon.png"
  }
});
```

### Prompt to generate the plugin default icon:

![Icon](./static/icon128.png)

```text
Create an icon representing the concept "Out of the Bubble." The icon should feature a stylized, minimalist design of a bubble with a person or object emerging from it. The bubble can be semi-transparent, with soft gradients of light blue and white, symbolizing a fragile but protective barrier. The person or object emerging from the bubble should appear dynamic and free, using bold colors like orange or green to contrast with the bubble. The background should be simple, ensuring the focus remains on the bubble and the emerging figure. The overall design should convey the idea of breaking free from limitations or expanding one's horizons.
```

### Prompt to generate popup page

```markdown
I'd like you to generate an html page with tailwind css.
The page should be in vertical layout of 5 blocks.
Every block should be separated by a line.
Please use semantic HTML tags where appropriate and ensure the page is accessible. Add appropriate padding and margins to all elements for better readability.
It will be a small web page to serve as a popup window for a Chrome plugin.


The background should in soft gradients of light blue and white, symbolizing a fragile but protective barrier. The separate lines should be using bold colors like orange or green to contrast with the background.

## Block 1. Checkbox
A check box of apple-style enabled and disabled state. Apple-style means soft borders and round shape.
The checkbox should be larger than default (24x24px), with a smooth transition when toggled.

## Block 2. Other sources
Could be a table of 5 rows and 2 columns.

| Icon 1  | Several links here. Every link should be in a new line. |
|         | Several links here  Every link should be in a new line.|
| Icon 2  | Several links here.  Every link should be in a new line. One link is highlighted as it is currently opened. |
|         | Several links here  Every link should be in a new line.|
| Icon 3  | Several links here  Every link should be in a new line.|

## Block 3. Phycological tactics
A list of text elements. The list should be unordered. Each element should be in a separate line with adequate spacing.

An example:

- Use of emotional language
- Focus on the victim
- Omission of certain details


## Block 4. Summary in 5 bullet points
A list of 5 bullet points. The list should be unordered. Each bullet point should be in a separate line.
Use a custom bullet point style (e.g., a small circle).

An example:

"Irish man shot dead by Maltese police after standoff."
"Ex-partner found murdered in apartment."
"Man suspected of killing ex-partner."
"Standoff lasted three hours."
"Police Commissioner outlines events."

## Block 5. Link to the options page
Add a button styled with Tailwind. The button should have hover and focus states. Include a placeholder for a JavaScript function to be added later.

```

## Tools

### Scrapper

https://r.jina.ai/<original URL is here>

### Send a link to analysis

```shell
curl --location --request POST "https://us-central1-demohack-430817.cloudfunctions.net/function-demo-test" --header "Content-Type: application/json" --data-raw "{\"link\": \"https://www.dailyrecord.co.uk/lifestyle/money/universal-credit-changes-report-dwp-33476729\"}"
```