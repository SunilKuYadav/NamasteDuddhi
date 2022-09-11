import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
  }
}
