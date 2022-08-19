import React from "react";
import {
  Icons,
  IconButton,
  TooltipLinkList,
  WithTooltip,
} from "@storybook/components";
import { useGlobals, useParameter } from "@storybook/api";
import { THEME_ID, PARAM_KEY } from "./constants";

const THEMES = {
  themes: ["primary", "dark", "light"],
  dataAttribute: "theme",
};

export const ThemeSelector = () => {
  const [globals, updateGlobals] = useGlobals();
  const themeConfig = useParameter(PARAM_KEY, THEMES);

  const onClick = (value: string) => {
    updateGlobals({
      [THEME_ID]: value,
    });
  };

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={() => {
        return (
          <TooltipLinkList
            links={themeConfig.themes.map((theme) => {
              return {
                id: theme,
                title: theme,
                active: globals[THEME_ID] === theme,
                onClick: () => onClick(theme),
                value: theme,
              };
            })}
          />
        );
      }}
    >
      <IconButton key="theme" title="Change theme">
        <Icons icon="paintbrush" style={{ marginRight: "0.3em" }} />{" "}
        {globals[THEME_ID] ?? themeConfig.themes[0]}
      </IconButton>
    </WithTooltip>
  );
};
