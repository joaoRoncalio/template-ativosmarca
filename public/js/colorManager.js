/**
 * Color Manager Module
 * Handles dynamic color updates and CSS variable management
 *
 * This module provides a flexible way to manage colors in the brand guide template.
 * It maps colors from the brand.json file to CSS variables and provides methods
 * for updating colors dynamically.
 */

// Create a global module object
window.colorManagerModule = {};

// Default color mappings
window.colorManagerModule.defaultMappings = {
  primary: {
    // Map color names to CSS variables
    mappings: {
      primary: "--primary",
      "primary-light": "--primary-light",
      "primary-dark": "--primary-dark",
      // Legacy mappings for backward compatibility
      blue: "--primary",
      "blue-light": "--primary-light",
      "blue-dark": "--primary-dark",
    },
    // Function to normalize color names for matching
    normalizeName: (name) => name.toLowerCase().replace(/\s+/g, "-"),
  },
  accent: {
    mappings: {
      purple: "--accent-purple",
      green: "--accent-green",
      red: "--accent-red",
      "accent-purple": "--accent-purple",
      "accent-green": "--accent-green",
      "accent-red": "--accent-red",
    },
    normalizeName: (name) => name.toLowerCase().replace(/\s+/g, "-"),
  },
  neutral: {
    mappings: {
      dark: "--text",
      gray: "--text-light",
      "light-gray": "--border",
      "light gray": "--border",
      light: "--secondary-bg",
      white: "--background",
    },
    normalizeName: (name) => name.toLowerCase().replace(/\s+/g, "-"),
  },
};

// Function to update CSS variables based on color data
window.colorManagerModule.updateCSSVariables = function (
  colorData,
  customMappings,
) {
  // Use custom mappings if provided, otherwise use defaults
  const mappings = customMappings || window.colorManagerModule.defaultMappings;

  // Process each color category (primary, accent, neutral)
  Object.keys(colorData).forEach((category) => {
    if (!Array.isArray(colorData[category]) || !mappings[category]) return;

    const categoryMappings = mappings[category].mappings;
    const normalizeFunc = mappings[category].normalizeName;

    // Process each color in the category
    colorData[category].forEach((color) => {
      const normalizedName = normalizeFunc(color.name);
      const cssVariable = categoryMappings[normalizedName];

      if (cssVariable) {
        document.documentElement.style.setProperty(cssVariable, color.hex);
      } else {
        // For colors without predefined mappings, create a custom CSS variable
        const customVariable = `--${category}-${normalizedName}`;
        document.documentElement.style.setProperty(customVariable, color.hex);
      }
    });
  });
};

/**
 * Updates a specific color in the color data
 *
 * @param {Object} colorData - The color data object from brand.json
 * @param {string} category - The color category (primary, accent, neutral)
 * @param {string} colorName - The name of the color to update
 * @param {string} newHexValue - The new hex value for the color
 * @param {Object} options - Additional options
 * @param {string} options.cmyk - Optional CMYK value to set
 * @param {Object} customMappings - Optional custom mappings to use
 * @returns {boolean} - Whether the update was successful
 */
window.colorManagerModule.updateColor = function (
  colorData,
  category,
  colorName,
  newHexValue,
  options = {},
  customMappings = null,
) {
  // Find and update the color in the appropriate category
  const colorCategory = colorData[category];
  if (!colorCategory) return false;

  // Normalize the color name for comparison
  const mappings = customMappings || window.colorManagerModule.defaultMappings;
  const normalizeFunc =
    mappings[category]?.normalizeName || ((name) => name.toLowerCase());
  const normalizedSearchName = normalizeFunc(colorName);

  // Find the color by normalized name
  const colorIndex = colorCategory.findIndex(
    (color) => normalizeFunc(color.name) === normalizedSearchName,
  );

  if (colorIndex === -1) return false;

  // Update hex value
  colorCategory[colorIndex].hex = newHexValue;

  // Update CMYK if provided
  if (options.cmyk) {
    colorCategory[colorIndex].cmyk = options.cmyk;
  }

  // Update description if provided
  if (options.description) {
    colorCategory[colorIndex].description = options.description;
  }

  // Update CSS variables
  window.colorManagerModule.updateCSSVariables(colorData, customMappings);

  return true;
};

// Helper function to convert hex to CMYK
function hexToCmyk(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, "");

  // Parse hex values to RGB first
  const bigint = parseInt(hex, 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;

  // Convert RGB to CMYK
  let k = 1 - Math.max(r, g, b);
  let c = k === 1 ? 0 : Math.round(((1 - r - k) / (1 - k)) * 100);
  let m = k === 1 ? 0 : Math.round(((1 - g - k) / (1 - k)) * 100);
  let y = k === 1 ? 0 : Math.round(((1 - b - k) / (1 - k)) * 100);
  k = Math.round(k * 100);

  return { c, m, y, k };
}

/**
 * Initializes the color manager with the provided color data
 *
 * @param {Object} colorData - The color data object from brand.json
 * @param {Object} options - Additional options
 * @param {Object} options.customMappings - Custom mappings for color names to CSS variables
 * @returns {Object} - The color manager API
 */
window.colorManagerModule.initColorManager = function (
  colorData,
  options = {},
) {
  const customMappings = options.customMappings || null;

  // Set initial CSS variables
  window.colorManagerModule.updateCSSVariables(colorData, customMappings);

  // Return API for color management
  return {
    // Update a specific color
    updateColor: (category, colorName, newHexValue, updateOptions = {}) =>
      window.colorManagerModule.updateColor(
        colorData,
        category,
        colorName,
        newHexValue,
        updateOptions,
        customMappings,
      ),

    // Get the current color data
    getColorData: () => colorData,

    // Add a new color to a category
    addColor: (category, colorObj) => {
      if (!colorData[category] || !Array.isArray(colorData[category])) {
        return false;
      }

      colorData[category].push(colorObj);
      window.colorManagerModule.updateCSSVariables(colorData, customMappings);
      return true;
    },

    // Remove a color from a category
    removeColor: (category, colorName) => {
      if (!colorData[category] || !Array.isArray(colorData[category])) {
        return false;
      }

      const normalizeFunc =
        customMappings?.[category]?.normalizeName ||
        window.colorManagerModule.defaultMappings[category]?.normalizeName ||
        ((name) => name.toLowerCase());

      const normalizedSearchName = normalizeFunc(colorName);
      const initialLength = colorData[category].length;

      colorData[category] = colorData[category].filter(
        (color) => normalizeFunc(color.name) !== normalizedSearchName,
      );

      const removed = colorData[category].length < initialLength;
      if (removed) {
        window.colorManagerModule.updateCSSVariables(colorData, customMappings);
      }

      return removed;
    },

    // Convert hex to CMYK (utility function)
    hexToCMYK: (hex) => hexToCmyk(hex),
  };
};
