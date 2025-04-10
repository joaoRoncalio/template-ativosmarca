/**
 * User Configuration
 *
 * This file allows you to customize the template without modifying the core files.
 * Override any settings from the default configuration here.
 */

import { getConfig, type TemplateConfig } from "./template";

/**
 * Your custom configuration
 * Uncomment and modify any settings you want to override
 */
const userConfig: Partial<TemplateConfig> = {
  // Override site metadata
  site: {
    title: "Your Brand Guidelines",
    description: "A comprehensive guide to your brand identity",
    favicon: "/favicon.svg",
  },

  // Override default colors if needed
  // defaultColors: {
  //   primary: "#4f46e5",
  //   primaryLight: "#818cf8",
  //   primaryDark: "#3730a3",
  //   // ... other colors
  // },

  // Customize navigation
  // navigation: {
  //   showMobileMenu: true,
  //   links: [
  //     { text: "Brand Story", href: "#brand-story" },
  //     { text: "Logo", href: "#logos" },
  //     { text: "Colors", href: "#colors" },
  //     { text: "Typography", href: "#typography" },
  //     { text: "Voice", href: "#voice" },
  //   ],
  // },

  // Enable/disable features
  features: {
    enableColorCopy: true,
    enableDownloads: true,
    showCMYK: true,
    showTypographyDetails: true,
  },

  // Admin password (change this to your own secure password)
  adminPassword: "admin",
};

// Export the merged configuration
export const config = getConfig(userConfig);
