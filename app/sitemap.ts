import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://moneymaker-pi.vercel.app', // Your homepage
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add other important pages here, for example:
    // {
    //   url: 'https://moneymaker-pi.vercel.app/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}