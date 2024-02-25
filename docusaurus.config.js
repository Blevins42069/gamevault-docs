// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GameVault",
  tagline: "the self-hosted gaming platform for drm-free games",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://gamevau.lt/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Phalcode", // Usually your GitHub org/user name.
  projectName: "gamevault-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    require.resolve("@cmfcmf/docusaurus-search-local"),
    tailwindPlugin,
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/phalcode/gamevault-docs/tree/master",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/phalcode/gamevault-docs/tree/master",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "GameVault",
          src: "img/logo.png",
        },
        title: "GameVault",
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/gamevault-plus", label: "GameVault+", position: "left" },
          {
            label: "GitHub",
            href: "https://github.com/phalcode",
            position: "right",
          },
          {
            label: "Discord",
            href: "https://discord.gg/NEdNen2dSu",
            position: "right",
          },
          {
            label: "Support us",
            href: "https://gamevau.lt/docs/intro#support",
            position: "right",
          },
        ],
      },
      footer: {
        logo: {
          src: "img/phalcode_bright.png",
          srcDark: "img/phalcode_dark.png",
          height: "30vh",
          href: "https://phalco.de",
        },
        links: [
          {
            title: "Shortcuts",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Server Setup",
                to: "/docs/server-docs/setup",
              },
              {
                label: "Troubleshooting",
                to: "/docs/troubleshooting",
              },
            ],
          },
          {
            title: "Source Control",
            items: [
              {
                label: "Roadmap",
                href: "https://github.com/orgs/Phalcode/projects/4",
              },
              {
                label: "Repositories",
                href: "https://github.com/orgs/Phalcode/repositories?q=gamevault",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Reddit",
                href: "https://reddit.com/r/Phalcode",
              },
              {
                label: "Lemmy",
                href: "https://lemmy.world/c/phalcode",
              },
              {
                label: "Discord",
                href: "https://discord.gg/NEdNen2dSu",
              },
            ],
          },
          {
            title: "Support us",
            items: [
              {
                label: "💙 GitHub Sponsors",
                href: "https://github.com/sponsors/Phalcode",
              },
              {
                href: "https://ko-fi.com/phalcode",
                label: "❤️ Ko-Fi",
              },
              {
                href: "https://liberapay.com/phalcode",
                label: "💛 Liberapay",
              },
              {
                href: "https://www.paypal.me/phalcode",
                label: "🩵 PayPal",
              },
            ],
          },
          {
            title: "Legals",
            items: [
              {
                label: "Privacy Policy",
                href: "https://phalco.de/privacy",
              },
              {
                label: "Legal Notice",
                href: "https://phalco.de/legal",
              },
              {
                label: "Datenschutzerklärung",
                href: "https://phalco.de/privacy-de",
              },
              {
                label: "Impressum",
                href: "https://phalco.de/legal-de",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://phalco.de">Phalcode</a>`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["bash", "json"],
      },
      zoom: {
        selector:
          "img:not(nav img):not(footer img):not(.nozoom):not([alt~='ko-fi']):not([alt~='GameVault'])",
        config: {
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
    }),
};

module.exports = config;
