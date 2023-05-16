import { DocsThemeConfig } from "nextra-theme-docs";
import { Box, BoxGroup } from "./components/Box";

const config: DocsThemeConfig = {
  logo: <span>TAMUhack Dev</span>,
  project: {
    link: "https://github.com/tamuhack-org",
  },
  chat: {
    link: "https://github.com/tamuhack-org",
  },
  docsRepositoryBase: "https://github.com/tamuhack-org",
  footer: {
    component: <div></div>,
  },
  //primaryHue: 300,
  components: {
    Box: Box,
    BoxGroup: BoxGroup,
  },
};

export default config;
