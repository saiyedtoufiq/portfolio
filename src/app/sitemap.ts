import { MetadataRoute } from 'next';
import { portfolioData } from '../../data/portfolio';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saiyedtoufiq.github.io/portfolio';

  const projectRoutes: MetadataRoute.Sitemap = portfolioData.projects.map(project => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
