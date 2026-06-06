import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/#projects',
        '/#certifications',
        '/#stack',
        '/#about',
        '/#contact',
        '/cv.pdf',
      ],
    },
    sitemap: 'https://freddymorara.tech/sitemap.xml',
  };
}
