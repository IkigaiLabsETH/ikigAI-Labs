import { DefaultSeoProps } from 'next-seo'

export const SITE_DESC =
'ChatGPT，aloha'
export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
title: 'OpenGPT - Create ChatGpt Application in seconds',
titleTemplate: '%s | OpenGPT',
defaultTitle: 'OpenGPT - Create ChatGpt Application in seconds',
description: SITE_DESC,
openGraph: {
images: [
{
url: 'https://vercel.app/xyz.png',
alt: 'Og Image Alt',
},
],
type: 'website',
locale: 'en_IE',
url: 'https://.app/',
siteName: 'OpenGPT',
},
twitter: {
handle: '@livethelifetv',
site: 'https://.app/',
cardType: 'summary_large_image',
},
additionalLinkTags: [
{
rel: 'icon',
href: '/favicon.png',
},
],
}
