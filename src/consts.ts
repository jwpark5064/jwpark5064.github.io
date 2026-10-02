// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Jongwon Park';
export const SITE_DESCRIPTION = 'Theoretical astronomer studying the formation of the first stars and galaxies.';
export const CV_URL = '/cv';

export const CONTACT = {
  emails: [
    'jwpark5064_at_khu_ac_kr',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'ads' | 'orcid' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=_e_71_UAAAAJ&hl=en',
    icon: 'scholar',
  },
  {
    label: 'ADS',
    href: 'https://ui.adsabs.harvard.edu/public-libraries/A2eDlsA2SuKAY8MSgHue0w',
    icon: 'ads',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0000-0002-2508-5771',
    icon: 'orcid',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Open Source',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};

// Umami analytics — configured via environment variables so no tracking ID is
// committed. Set PUBLIC_UMAMI_WEBSITE_ID (e.g. in a .env file or a CI variable)
// to enable it; leave it unset to disable analytics entirely.
export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
