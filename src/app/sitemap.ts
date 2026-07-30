import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gordon-amidu-portfolio.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://gordon-amidu-portfolio.vercel.app/about",
      lastModified: new Date(),
    },

    {
      url: "https://gordon-amidu-portfolio.vercel.app/publications",
      lastModified: new Date(),
    },

    {
      url: "https://gordon-amidu-portfolio.vercel.app/research",
      lastModified: new Date(),
    },

    {
      url: "https://gordon-amidu-portfolio.vercel.app/teaching",
      lastModified: new Date(),
    },

    {
      url: "https://gordon-amidu-portfolio.vercel.app/projects",
      lastModified: new Date(),
    },

    {
      url: "https://gordon-amidu-portfolio.vercel.app/news",
      lastModified: new Date(),
    },

    {
      url: "https://gordon-amidu-portfolio.vercel.app/cv",
      lastModified: new Date(),
    },

    {
      url: "https://gordon-amidu-portfolio.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}