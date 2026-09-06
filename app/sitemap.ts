import { MetadataRoute } from 'next';
import { projects } from '@/constants/projects';
import { certifications } from '@/constants/certifications';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-06');

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://freddymorara.tech',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://freddymorara.tech/work',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://freddymorara.tech/credentials',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://freddymorara.tech/cv.pdf',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://freddymorara.tech/llms.txt',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  // Dynamic Project Routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://freddymorara.tech/work/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic Credential Routes
  const credentialRoutes: MetadataRoute.Sitemap = certifications
    .filter((cert) => cert.slug)
    .map((cert) => ({
      url: `https://freddymorara.tech/credentials/${cert.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    }));

  return [...staticRoutes, ...projectRoutes, ...credentialRoutes];
}
