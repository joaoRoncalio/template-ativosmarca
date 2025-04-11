/**
 * Color Manager Module
 * Handles dynamic color updates and CSS variable management
 * Designed to be completely independent of hardcoded color names
 */

// Create a global module object
window.colorManagerModule = {};

// CSS variable mappings for core UI elements
window.colorManagerModule.UI_CSS_MAPPINGS = {
  // Core UI elements that need specific colors
  primary: {
    cssVar: "--primary",
    description: "Main brand color used for buttons, links, and accents",
  },
  primaryLight: {
    cssVar: "--primary-light",
    description: "Lighter version of primary color for hover states",
  },
  primaryDark: {
    cssVar: "--primary-dark",
    description: "Darker version of primary color for active states",
  },
  accent: {
    cssVar: "--accent",
    description: "Secondary accent color for visual variety",
  },
  text: {
    cssVar: "--text",
    description: "Main text color",
  },
  textLight: {
    cssVar: "--text-light",
    description: "Secondary text color for less emphasis",
  },
  background: {
    cssVar: "--background",
    description: "Main background color",
  },
  secondaryBg: {
    cssVar: "--secondary-bg",
    description: "Secondary background color for contrast",
  },
  border: {
    cssVar: "--border",
    description: "Border color for UI elements",
  },
};

// Function to generate CSS variable name from color data
window.colorManagerModule.generateCssVariableName = function (
  category,
  colorName,
) {
  // Convert color name to kebab-case for CSS variable naming
  const cssName = colorName.toLowerCase().replace(/\s+/g, "-");
  return `--${category}-${cssName}`;
};

// Function to update CSS variables based on color data
window.colorManagerModule.updateCSSVariables = function (colorData) {
  // Process each color category (primary, accent, neutral)
  Object.keys(colorData).forEach((category) => {
    if (Array.isArray(colorData[category]) && colorData[category].length > 0) {
      // Set position-based CSS variables
      // The first color in each category becomes the main color for that category
      const firstColor = colorData[category][0];
      if (firstColor && firstColor.hex) {
        // Set the main category variable
        if (category === "primary") {
          // Primary colors
          document.documentElement.style.setProperty(
            window.colorManagerModule.UI_CSS_MAPPINGS.primary.cssVar,
            firstColor.hex,
          );

          // If we have more colors in the primary category, use them for light/dark variants
          if (
            colorData[category].length > 1 &&
            colorData[category][1] &&
            colorData[category][1].hex
          ) {
            document.documentElement.style.setProperty(
              window.colorManagerModule.UI_CSS_MAPPINGS.primaryLight.cssVar,
              colorData[category][1].hex,
            );
          } else {
            // If no light variant provided, generate one
            const lightHex = window.colorManagerModule.lightenColor(
              firstColor.hex,
              20,
            );
            document.documentElement.style.setProperty(
              window.colorManagerModule.UI_CSS_MAPPINGS.primaryLight.cssVar,
              lightHex,
            );
          }

          if (
            colorData[category].length > 2 &&
            colorData[category][2] &&
            colorData[category][2].hex
          ) {
            document.documentElement.style.setProperty(
              window.colorManagerModule.UI_CSS_MAPPINGS.primaryDark.cssVar,
              colorData[category][2].hex,
            );
          } else {
            // If no dark variant provided, generate one
            const darkHex = window.colorManagerModule.darkenColor(
              firstColor.hex,
              20,
            );
            document.documentElement.style.setProperty(
              window.colorManagerModule.UI_CSS_MAPPINGS.primaryDark.cssVar,
              darkHex,
            );
          }
        } else if (category === "accent") {
          // Accent colors
          document.documentElement.style.setProperty(
            window.colorManagerModule.UI_CSS_MAPPINGS.accent.cssVar,
            firstColor.hex,
          );

          // Also set specific accent colors if we have them
          colorData[category].forEach((color, index) => {
            if (color && color.hex) {
              // Set a CSS variable for each accent color by position
              document.documentElement.style.setProperty(
                `--accent-${index + 1}`,
                color.hex,
              );

              // Also set a CSS variable by color name
              const nameBasedCssVar =
                window.colorManagerModule.generateCssVariableName(
                  category,
                  color.name,
                );
              document.documentElement.style.setProperty(
                nameBasedCssVar,
                color.hex,
              );
            }
          });
        } else if (category === "neutral") {
          // Neutral colors - map by position to UI elements
          const neutralMappings = [
            window.colorManagerModule.UI_CSS_MAPPINGS.text.cssVar,
            window.colorManagerModule.UI_CSS_MAPPINGS.textLight.cssVar,
            window.colorManagerModule.UI_CSS_MAPPINGS.border.cssVar,
            window.colorManagerModule.UI_CSS_MAPPINGS.secondaryBg.cssVar,
            window.colorManagerModule.UI_CSS_MAPPINGS.background.cssVar,
          ];

          // Map each neutral color to its corresponding UI element
          colorData[category].forEach((color, index) => {
            if (color && color.hex && index < neutralMappings.length) {
              document.documentElement.style.setProperty(
                neutralMappings[index],
                color.hex,
              );
            }

            // Also set a CSS variable by color name
            const nameBasedCssVar =
              window.colorManagerModule.generateCssVariableName(
                category,
                color.name,
              );
            document.documentElement.style.setProperty(
              nameBasedCssVar,
              color.hex,
            );
          });
        }
      }

      // Set name-based CSS variables for all colors in all categories
      colorData[category].forEach((color, index) => {
        if (!color || !color.hex) return;

        // Set a CSS variable for each color by position
        document.documentElement.style.setProperty(
          `--${category}-${index + 1}`,
          color.hex,
        );

        // Set a CSS variable for each color by name
        const nameBasedCssVar =
          window.colorManagerModule.generateCssVariableName(
            category,
            color.name,
          );
        document.documentElement.style.setProperty(nameBasedCssVar, color.hex);
      });
    }
  });
};

// Function to update a specific color in the color data
window.colorManagerModule.updateColor = function (
  colorData,
  category,
  colorName,
  newHexValue,
) {
  // Find and update the color in the appropriate category
  const colorCategory = colorData[category];
  if (!colorCategory) return false;

  const colorIndex = colorCategory.findIndex(
    (color) => color.name.toLowerCase() === colorName.toLowerCase(),
  );

  if (colorIndex === -1) return false;

  // Update hex value
  colorCategory[colorIndex].hex = newHexValue;

  // We're not automatically updating CMYK values anymore
  // This allows the user to manually set CMYK values if needed

  // Update CSS variables
  window.colorManagerModule.updateCSSVariables(colorData);

  return true;
};

// Helper function to lighten a color
window.colorManagerModule.lightenColor = function (hex, percent) {
  // Remove # if present
  hex = hex.replace(/^#/, "");

  // Parse hex values to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Lighten the color
  r = Math.min(255, Math.floor(r * (1 + percent / 100)));
  g = Math.min(255, Math.floor(g * (1 + percent / 100)));
  b = Math.min(255, Math.floor(b * (1 + percent / 100)));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

// Helper function to darken a color
window.colorManagerModule.darkenColor = function (hex, percent) {
  // Remove # if present
  hex = hex.replace(/^#/, "");

  // Parse hex values to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Darken the color
  r = Math.max(0, Math.floor(r * (1 - percent / 100)));
  g = Math.max(0, Math.floor(g * (1 - percent / 100)));
  b = Math.max(0, Math.floor(b * (1 - percent / 100)));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

// Function to update SVG elements with the current color scheme
window.colorManagerModule.updateSvgElements = function () {
  // Get the primary color value
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary")
    .trim();
  const accentColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();

  // Update inline SVGs in the document
  document.querySelectorAll("svg").forEach((svg) => {
    // Update elements with stroke="currentColor" to use the primary color
    svg.querySelectorAll('[stroke="currentColor"]').forEach((el) => {
      // For icons that use the current color, we'll use the primary color
      el.setAttribute("stroke", primaryColor);
    });
  });

  // Update SVG background colors in various UI elements
  document.querySelectorAll(".usage-icon").forEach((icon) => {
    // For usage icons, use the primary color
    icon.setAttribute("stroke", primaryColor);
  });

  // Update nav-link hover color
  const style = document.createElement("style");
  style.textContent = `
    .nav-link:hover { color: ${primaryColor} !important; }
    .nav-link::after { background-color: ${primaryColor} !important; }
    .btn-primary { background-color: ${primaryColor} !important; }
    .btn-primary:hover { background-color: var(--primary-dark) !important; }
    .btn-secondary { color: ${primaryColor} !important; }
    .section h2::after { background-color: ${primaryColor} !important; }
    .copy-btn { color: ${primaryColor} !important; }
    .footer-section a:hover { color: var(--primary-light) !important; }
  `;
  document.head.appendChild(style);
};

// Function to initialize color management
window.colorManagerModule.initColorManager = function (colorData) {
  // Set initial CSS variables
  window.colorManagerModule.updateCSSVariables(colorData);

  // Update SVG elements with the new color scheme
  setTimeout(() => {
    window.colorManagerModule.updateSvgElements();
  }, 100); // Small delay to ensure CSS variables are applied

  // Return API for color management
  return {
    updateColor: (category, colorName, newHexValue) => {
      const result = window.colorManagerModule.updateColor(
        colorData,
        category,
        colorName,
        newHexValue,
      );
      if (result) {
        // If color was updated successfully, also update SVG elements
        setTimeout(() => {
          window.colorManagerModule.updateSvgElements();
        }, 100);
      }
      return result;
    },
    getColorData: () => colorData,
    // Add a method to get a specific color by category and name
    getColor: (category, colorName) => {
      const colorCategory = colorData[category];
      if (!colorCategory) return null;

      const color = colorCategory.find(
        (c) => c.name.toLowerCase() === colorName.toLowerCase(),
      );

      return color || null;
    },
    // Add a method to get CSS variable name for a color
    getCssVariableName: (category, colorName) => {
      return window.colorManagerModule.generateCssVariableName(
        category,
        colorName,
      );
    },
    // Add a method to manually update SVG elements
    updateSvgElements: window.colorManagerModule.updateSvgElements,
  };
};
