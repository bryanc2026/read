import type { MetadataRoute } from "next";

const BASE_URL = "https://coaching.boomecommerce.com.au";

const routes = [
  "/",
  "/about",
  "/apply",
  "/contact",
  "/boom-meta-method",
  "/switch",
  "/free-tools",
  "/free-tools/conversion-rate-calculator",
  "/free-tools/discount-calculator",
  "/free-tools/mer-efficiency-calculator",
  "/free-tools/breakeven-profit-calculator",
  "/free-tools/aus-post-surcharge-calculator",
  "/free-tools/aov-shipping-optimiser",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
