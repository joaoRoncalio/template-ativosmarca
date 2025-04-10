/**
 * Brand Guide Template Configuration
 * 
 * This file contains the main configuration for the brand guide template.
 * Customize these values to match your brand's needs.
 */

export interface TemplateConfig {
  /**
   * Site metadata
   */
  site: {
    title: string;
    description: string;
    favicon: string;
  };
  
  /**
   * Default theme colors
   * These will be used as fallbacks if the brand.json file doesn't define them
   */
  defaultColors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    accentPurple: string;
    accentGreen: string;
    accentRed: string;
    text: string;
    textLight: string;
    background: string;
    secondaryBg: string;
    border: string;
  };
  
  /**
   * Navigation settings
   */
  navigation: {
    showMobileMenu: boolean;
    links: Array<{
      text: string;
      href: string;
    }>;
  };
  
  /**
   * Feature flags
   */
  features: {
    enableColorCopy: boolean;
    enableDownloads: boolean;
    showCMYK: boolean;
    showTypographyDetails: boolean;
  };
}

/**
 * Default template configuration
 */
export const defaultConfig: TemplateConfig = {
  site: {
    title: "Brand Guidelines",
    description: "A comprehensive guide to our brand identity",
    favicon: "/favicon.svg",
  },
  defaultColors: {
    primary: "#2563eb",
    primaryLight: "#60a5fa",
    primaryDark: "#1e40af",
    accentPurple: "#8b5cf6",
    accentGreen: "#10b981",
    accentRed: "#ef4444",
    text: "#1f2937",
    textLight: "#6b7280",
    background: "#ffffff",
    secondaryBg: "#f3f4f6",
    border: "#e5e7eb",
  },
  navigation: {
    showMobileMenu: true,
    links: [
      { text: "Overview", href: "#overview" },
      { text: "Logos", href: "#logos" },
      { text: "Colors", href: "#colors" },
      { text: "Typography", href: "#typography" },
    ],
  },
  features: {
    enableColorCopy: true,
    enableDownloads: true,
    showCMYK: true,
    showTypographyDetails: true,
  },
};

/**
 * Get the template configuration
 * This function allows you to override the default configuration
 */
export function getConfig(overrides: Partial<TemplateConfig> = {}): TemplateConfig {
  return {
    ...defaultConfig,
    ...overrides,
    site: {
      ...defaultConfig.site,
      ...(overrides.site || {}),
    },
    defaultColors: {
      ...defaultConfig.defaultColors,
      ...(overrides.defaultColors || {}),
    },
    navigation: {
      ...defaultConfig.navigation,
      ...(overrides.navigation || {}),
    },
    features: {
      ...defaultConfig.features,
      ...(overrides.features || {}),
    },
  };
}
