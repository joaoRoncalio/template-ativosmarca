/**
 * Brand Data Type Definitions
 * 
 * This file defines the structure of the brand.json data file.
 */

export interface Color {
  name: string;
  hex: string;
  cmyk: string;
  description: string;
}

export interface Logo {
  svg: string;
  png: string;
  description: string;
}

export interface FontFamily {
  title: string;
  description: string;
  sample: string;
  weights: string[];
}

export interface TypographyStyle {
  name: string;
  weight: string;
  size: string;
  lineHeight: string;
  example: string;
}

export interface BrandData {
  companyName: string;
  tagline: string;
  
  logos: {
    primary: Logo;
    dark: Logo;
    light: Logo;
    icon: Logo;
    guidelines: string[];
  };
  
  colors: {
    intro: string;
    primary: Color[];
    accent: Color[];
    neutral: Color[];
    usage: {
      primary: string[];
      accent: string[];
      neutral: string[];
    };
  };
  
  typography: {
    font: string;
    intro: string;
    weights: string[];
    headings: TypographyStyle[];
    body: TypographyStyle[];
    families: {
      heading: FontFamily;
      body: FontFamily;
    };
    guidelines: string[];
    downloads: {
      web: string;
      desktop: string;
    };
  };
}
