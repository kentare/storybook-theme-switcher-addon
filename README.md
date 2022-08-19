# Storybook Addon Theme Switcher (CSS/data-\*)

Storybook addon to switch css theme with the help of HTML data attribute

![demo of addon](/media/demo.webp)

## Installation

```sh
npm i -D storybook-addon-theme-switcher
```

## Getting started

Activate the addon by adding it to `main.js`

```jsx
module.exports = {
  addons: [
    // ...
    "storybook-addon-theme-switcher",
    // ...
  ],
};
```

## Configuration

You can configure the themes and data attribute name in `preview.js`:

```jsx
export const parameters = {
  themeSwitcher: {
    themes: ["psychedelic", "dark"],
    dataAttribute: "tema", // This results in data-tema
  },
};
```
