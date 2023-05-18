import { DocsThemeConfig } from "nextra-theme-docs";
import { Box, BoxGroup } from "./components/Box";
import { Callout } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>TAMUhack Dev</span>,
  project: {
    link: "https://github.com/tamuhack-org",
  },
  darkMode: false,
  docsRepositoryBase: "https://github.com/tamuhack-org/boo",
  toc: {
    title: "",
  },
  footer: {
    component: <div></div>,
  },
  //primaryHue: 300,
  components: {
    Box: Box,
    BoxGroup: BoxGroup,
    Callout: Callout,
  },
};

export default config;
