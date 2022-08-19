import type { DecoratorFunction } from "@storybook/addons";
import { useEffect } from "@storybook/addons";
import { PARAM_KEY, THEME_ID } from "./constants";

export const withTheme: DecoratorFunction = (StoryFn, context) => {
  const { globals, parameters } = context;

  if (!globals[THEME_ID]) {
    globals[THEME_ID] = parameters[PARAM_KEY].themes[0];
  }

  useEffect(() => {
    const querySelector = global.document.querySelector("html");
    if (querySelector) {
      querySelector.setAttribute(
        `data-${parameters[PARAM_KEY].dataAttribute ?? "theme"}`,
        globals[THEME_ID]
      );
    }
  }, [context, globals[THEME_ID]]);

  return StoryFn();
};
