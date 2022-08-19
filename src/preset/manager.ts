import { addons, types } from "@storybook/addons";
import { ADDON_ID, THEME_ID } from "../constants";
import { ThemeSelector } from "../ThemeSelector";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register theme
  addons.add(THEME_ID, {
    type: types.TOOL,
    title: "Theme Selector",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ThemeSelector,
  });
});
