/**
 * Theme Manager
 * Handles theme switching and updates UI elements accordingly
 */

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      // Toggle dark mode class on html element
      document.documentElement.classList.toggle("dark-mode");

      // Save preference to localStorage
      const isDarkMode =
        document.documentElement.classList.contains("dark-mode");
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");

      // Update UI elements that need JavaScript updates
      updateThemeSpecificElements();

      // If color manager is available, update SVG elements
      if (
        window.colorManagerModule &&
        typeof window.colorManagerModule.updateSvgElements === "function"
      ) {
        window.colorManagerModule.updateSvgElements();
      }
    });
  }

  // Function to update theme-specific elements
  function updateThemeSpecificElements() {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");

    // Update color cards
    document.querySelectorAll(".color-card").forEach((card) => {
      if (isDarkMode) {
        card.style.backgroundColor = "var(--secondary-bg)";
      } else {
        card.style.backgroundColor = "var(--background)";
      }
    });

    // Update logo cards (but NOT their preview backgrounds)
    document.querySelectorAll(".logo-card").forEach((card) => {
      if (isDarkMode) {
        card.style.backgroundColor = "var(--secondary-bg)";
      } else {
        card.style.backgroundColor = "var(--background)";
      }

      // Ensure logo preview backgrounds remain fixed
      const previews = card.querySelectorAll(".logo-preview");
      previews.forEach((preview) => {
        if (preview.classList.contains("default-bg")) {
          preview.style.backgroundColor = "#f3f4f6";
        } else if (preview.classList.contains("light-bg")) {
          preview.style.backgroundColor = "#ffffff";
        } else if (preview.classList.contains("dark-bg")) {
          preview.style.backgroundColor = "#1f2937";
        }
      });
    });
  }

  // Run initial update
  updateThemeSpecificElements();
});
