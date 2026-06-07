import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-08');

  return [
    {
      url: 'https://freddymorara.tech',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://freddymorara.tech/cv.pdf',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
