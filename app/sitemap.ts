import { MetadataRoute } from 'next';
import { projects } from '@/constants/projects';
import { certifications } from '@/constants/certifications';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core static routes
  const staticRoutes = [
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
    {
      url: 'https://freddymorara.tech/work',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://freddymorara.tech/credentials',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ] as MetadataRoute.Sitemap;

  // Dynamic Project Routes
  const projectRoutes = projects.map((project) => ({
    url: `https://freddymorara.tech/work/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  })) as MetadataRoute.Sitemap;

  // Dynamic Credential Routes
  const credentialRoutes = certifications
    .filter((cert) => cert.slug)
    .map((cert) => ({
      url: `https://freddymorara.tech/credentials/${cert.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    })) as MetadataRoute.Sitemap;

  return [...staticRoutes, ...projectRoutes, ...credentialRoutes];
}
