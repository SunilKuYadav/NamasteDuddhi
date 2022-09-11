import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

import { LIGHT_THEME } from "../../config";

type ThemeProps = {
  theme: string;

  BG: string;
  TEXT: string;
  HEADIND: string;
  TITLE: string;
  HIGHTLIGHT: string;
  TEXT_HOVER: string;
  TITLE_HOVER: string;
  HEADING_HOVER: string;
  HIGHTLIGHT_HOVER: string;

  BG_PRIMARY: string;
  TEXT_PRIMARY: string;
  HEADIND_PRIMARY: string;
  TITLE_PRIMARY: string;
  HIGHTLIGHT_PRIMARY: string;
  TEXT_HOVER_PRIMARY: string;
  TITLE_HOVER_PRIMARY: string;
  HEADING_HOVER_PRIMARY: string;
  HIGHTLIGHT_HOVER_PRIMARY: string;

  BG_SECONDARY: string;
  TEXT_SECONDARY: string;
  HEADIND_SECONDARY: string;
  TITLE_SECONDARY: string;
  HIGHTLIGHT_SECONDARY: string;
  TEXT_HOVER_SECONDARY: string;
  TITLE_HOVER_SECONDARY: string;
  HEADING_HOVER_SECONDARY: string;
  HIGHTLIGHT_HOVER_SECONDARY: string;

  RED: string;
  GREEN: string;
  BLUE: string;
};

const initialState: ThemeProps = LIGHT_THEME;

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme(state: ThemeProps, action: PayloadAction<ThemeProps>) {
      current(state);
      state.theme = action.payload.theme;

      state.BG = action.payload.BG;
      state.TEXT = action.payload.TEXT;
      state.HEADIND = action.payload.HEADIND;
      state.TITLE = action.payload.TITLE;
      state.HIGHTLIGHT = action.payload.HIGHTLIGHT;
      state.TEXT_HOVER = action.payload.TEXT_HOVER;
      state.TITLE_HOVER = action.payload.TITLE_HOVER;
      state.HEADING_HOVER = action.payload.HEADING_HOVER;
      state.HIGHTLIGHT_HOVER = action.payload.HIGHTLIGHT_HOVER;

      state.BG_PRIMARY = action.payload.BG_PRIMARY;
      state.TEXT_PRIMARY = action.payload.TEXT_PRIMARY;
      state.HEADIND_PRIMARY = action.payload.HEADIND_PRIMARY;
      state.TITLE_PRIMARY = action.payload.TITLE_PRIMARY;
      state.HIGHTLIGHT_PRIMARY = action.payload.HIGHTLIGHT_PRIMARY;
      state.TEXT_HOVER_PRIMARY = action.payload.TEXT_HOVER_PRIMARY;
      state.TITLE_HOVER_PRIMARY = action.payload.TITLE_HOVER_PRIMARY;
      state.HEADING_HOVER_PRIMARY = action.payload.HEADING_HOVER_PRIMARY;
      state.HIGHTLIGHT_HOVER_PRIMARY = action.payload.HIGHTLIGHT_HOVER_PRIMARY;

      state.BG_SECONDARY = action.payload.BG_SECONDARY;
      state.TEXT_SECONDARY = action.payload.TEXT_SECONDARY;
      state.HEADIND_SECONDARY = action.payload.HEADIND_SECONDARY;
      state.TITLE_SECONDARY = action.payload.TITLE_SECONDARY;
      state.HIGHTLIGHT_SECONDARY = action.payload.HIGHTLIGHT_SECONDARY;
      state.TEXT_HOVER_SECONDARY = action.payload.TEXT_HOVER_SECONDARY;
      state.TITLE_HOVER_SECONDARY = action.payload.TITLE_HOVER_SECONDARY;
      state.HEADING_HOVER_SECONDARY = action.payload.HEADING_HOVER_SECONDARY;
      state.HIGHTLIGHT_HOVER_SECONDARY =
        action.payload.HIGHTLIGHT_HOVER_SECONDARY;

      state.RED = "#f00";
      state.GREEN = "#0f0";
      state.BLUE = "#00f";
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
