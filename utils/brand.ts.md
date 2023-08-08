/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'ikigAI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'ikigAI',
  },
  Meta: {
    Description: 'Our CEO will learn, think, and do. AI persona with advanced features, and fun UX.',
    SiteName: 'ikigAI | Harnessing AI and web3',
    ThemeColor: '#434356',
    TwitterSite: '@livethelifetv',
  },
  URIs: {
    Home: 'https://livethelife.tv',
    App: 'https://ai-alpha-six.vercel.app/',
    CardImage: 'https://ai-alpha-six.vercel.app//icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/',
    SupportInvite: 'https://discord.gg/',
    Twitter: 'https://www.twitter.com/livethelifetv',
  },
};