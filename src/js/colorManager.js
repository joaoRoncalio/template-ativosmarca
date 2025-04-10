/**
 * Color Manager Module
 * Handles dynamic color updates and CSS variable management
 */

// Function to update CSS variables based on color data
export function updateCSSVariables(colorData) {
  // Primary colors
  colorData.primary.forEach((color) => {
    const colorName = color.name.toLowerCase().replace(" ", "-");
    if (colorName === "blue") {
      document.documentElement.style.setProperty("--primary", color.hex);
    } else if (colorName === "blue-light") {
      document.documentElement.style.setProperty("--primary-light", color.hex);
    } else if (colorName === "blue-dark") {
      document.documentElement.style.setProperty("--primary-dark", color.hex);
    }
  });

  // Accent colors
  colorData.accent.forEach((color) => {
    const colorName = color.name.toLowerCase();
    if (colorName === "purple") {
      document.documentElement.style.setProperty("--accent-purple", color.hex);
    } else if (colorName === "green") {
      document.documentElement.style.setProperty("--accent-green", color.hex);
    } else if (colorName === "red") {
      document.documentElement.style.setProperty("--accent-red", color.hex);
    }
  });

  // Neutral colors
  colorData.neutral.forEach((color) => {
    const colorName = color.name.toLowerCase();
    if (colorName === "dark") {
      document.documentElement.style.setProperty("--text", color.hex);
    } else if (colorName === "gray") {
      document.documentElement.style.setProperty("--text-light", color.hex);
    } else if (colorName === "light gray") {
      document.documentElement.style.setProperty("--border", color.hex);
    } else if (colorName === "light") {
      document.documentElement.style.setProperty("--secondary-bg", color.hex);
    } else if (colorName === "white") {
      document.documentElement.style.setProperty("--background", color.hex);
    }
  });
}

// Function to update a specific color in the color data
export function updateColor(colorData, category, colorName, newHexValue) {
  // Find and update the color in the appropriate category
  const colorCategory = colorData[category];
  if (!colorCategory) return false;

  const colorIndex = colorCategory.findIndex(
    (color) => color.name.toLowerCase() === colorName.toLowerCase()
  );

  if (colorIndex === -1) return false;

  // Update hex value
  colorCategory[colorIndex].hex = newHexValue;

  // We're not automatically updating CMYK values anymore
  // This allows the user to manually set CMYK values if needed

  // Update CSS variables
  updateCSSVariables(colorData);

  return true;
}

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

// Function to initialize color management
export function initColorManager(colorData) {
  // Set initial CSS variables
  updateCSSVariables(colorData);

  // Return API for color management
  return {
    updateColor: (category, colorName, newHexValue) =>
      updateColor(colorData, category, colorName, newHexValue),
    getColorData: () => colorData,
  };
}
