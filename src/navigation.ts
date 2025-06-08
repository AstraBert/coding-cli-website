import { getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'GitHub Repository',
      href: 'https://github.com/AstraBert/browser-ai'
    },
  ],
  actions: [{ text: 'Support this project', href: 'https://github.com/sponsors/AstraBert', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'GitHub Repo', href: 'https://github.com/AstraBert/browser-ai' },
    { text: 'All my links', href: 'https://link.clelia.dev' },
    { text: 'Personal Website', href: 'https://clelia.dev' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/@itsclelia' },
    { ariaLabel: 'BlueSky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/cle-does-things.bsky.social' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/clelia-astra-bertelli-583904297' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/AstraBert' },
  ],
  footNote: `
    Made with <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> Astro onWidget</a> · All rights reserved.
  `,
};
