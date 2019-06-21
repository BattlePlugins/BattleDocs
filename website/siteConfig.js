/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Documentation', // Title for your website.
  tagline: 'Documentation for the BattlePlugins Plugin Suite.',
  url: 'https://docs.battleplugins.org', // Your website URL
  baseUrl: '/', // Base URL for your project */
  noIndex: false,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'BattleDocs',
  organizationName: 'BattlePlugins',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: "https://battleplugins.org/blog", label: "Blog"},
    {href: "https://battleplugins.org/get", label: "Get"},
    {doc: 'index', label: 'Docs'},
    {href: "https://github.com/battleplugins", label: "GitHub"},
    {search: true}
  ],

  // If you have users set above, you add it here:
  users,

  // Edit URL
  editUrl: 'https://github.com/BattlePlugins/BattleDocs/tree/master/docs/',

  /* path to images for header/footer */
  headerIcon: 'img/header.png',
  footerIcon: 'img/footer.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#21a6f0',
    secondaryColor: '#ffffff',
  },

  /* Custom fonts for website */
  /*
    fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // Search Options and Settings
  algolia: {
    apiKey: '2fe8a9725fc83c203f6fcf028f96f25d',
    indexName: 'battleplugins'
  //  appId: '16AVNKSJVT'
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} BattlePlugins.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', 'https://kit.fontawesome.com/24df4ee1a3.js', 'https://twemoji.maxcdn.com/2/twemoji.min.js?12.0.4'],


  // CNAME Entry
  cname: 'docs.battleplugins.org',

  // On page navigation for the current documentation page.
  onPageNav: 'separate',

  // Collapsible Sidebars
  docsSideNavCollapsible: true,

  // No .html extensions for paths.
  cleanUrl: true,

  scrollToTop: true,
  scrollToTopOptions: {
  	zIndex: 100,
  },

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
