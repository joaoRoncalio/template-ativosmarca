import { c as createComponent, a as createAstro, r as renderTemplate, e as addAttribute, f as renderSlot, g as renderHead, h as defineScriptVars } from './astro/server_Dk79wcWG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const defaultConfig = {
  site: {
    title: "Brand Guidelines",
    description: "A comprehensive guide to our brand identity",
    favicon: "/favicon.svg"
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
    border: "#e5e7eb"
  },
  navigation: {
    showMobileMenu: true,
    links: [
      { text: "Overview", href: "#overview" },
      { text: "Logos", href: "#logos" },
      { text: "Colors", href: "#colors" },
      { text: "Typography", href: "#typography" }
    ]
  },
  features: {
    enableColorCopy: true,
    enableDownloads: true,
    showCMYK: true,
    showTypographyDetails: true
  },
  adminPassword: "brandguide123"
  // Default password, change this in your config.ts
};
function getConfig(overrides = {}) {
  return {
    ...defaultConfig,
    ...overrides,
    site: {
      ...defaultConfig.site,
      ...overrides.site || {}
    },
    defaultColors: {
      ...defaultConfig.defaultColors,
      ...overrides.defaultColors || {}
    },
    navigation: {
      ...defaultConfig.navigation,
      ...overrides.navigation || {}
    },
    features: {
      ...defaultConfig.features,
      ...overrides.features || {}
    }
  };
}

const userConfig = {
  // Override site metadata
  site: {
    title: "Your Brand Guidelines",
    description: "A comprehensive guide to your brand identity",
    favicon: "/favicon.svg"
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
    showTypographyDetails: true
  },
  // Admin password (change this to your own secure password)
  adminPassword: "admin"
};
const config = getConfig(userConfig);

const companyName = "Acme Corp";
const tagline = "Essential resources for our brand identity";
const logos = {"primary":{"svg":"/assets/logo-primary.svg","png":"/assets/logo-primary.png","description":"The primary logo should be used in most applications where the brand is prominently featured."},"dark":{"svg":"/assets/logo-dark.svg","png":"/assets/logo-dark.png","description":"The dark version should be used on light backgrounds for maximum contrast."},"light":{"svg":"/assets/logo-light.svg","png":"/assets/logo-light.png","description":"The light version should be used on dark backgrounds for maximum contrast."},"icon":{"svg":"/assets/logo-icon.svg","png":"/assets/logo-icon.png","description":"The icon-only version can be used for favicons, app icons, or when space is limited."},"guidelines":["Maintain clear space around the logo equal to the height of the logo mark","Never modify the logo colors","Don't stretch or distort the logo","Use the appropriate version for different backgrounds","The minimum size for the logo is 40px in height","Always use the vector version when possible for maximum quality"]};
const colors = {"intro":"Our color palette is designed to create a consistent and recognizable brand experience across all touchpoints. The colors below form the foundation of our visual identity.","primary":[{"name":"Verde Cu","hex":"#51173d","cmyk":"65, 0, 73, 10","description":""},{"name":"Verde Light","hex":"#60a5fa","cmyk":"62, 33, 0, 2","description":"Used for hover states and secondary elements"},{"name":"Blue Dark","hex":"#1e40af","cmyk":"83, 64, 0, 31","description":"Used for active states and emphasis"}],"accent":[{"name":"Purple","hex":"#8b5cf6","cmyk":"44, 63, 0, 4","description":"Accent color for special elements and highlights"},{"name":"Green","hex":"#10b981","cmyk":"91, 0, 30, 28","description":"Used for success states and positive indicators"},{"name":"HAHAHA","hex":"#ff40ff","cmyk":"0, 71, 71, 6","description":"Used for error states and negative indicators"}],"neutral":[{"name":"Dark","hex":"#1f2937","cmyk":"44, 26, 0, 78","description":"Used for text and dark UI elements"},{"name":"Gray","hex":"#6b7280","cmyk":"16, 11, 0, 50","description":"Used for secondary text and disabled states"},{"name":"Light Gray","hex":"#e5e7eb","cmyk":"3, 2, 0, 8","description":"Used for borders and dividers"},{"name":"Light","hex":"#f3f4f6","cmyk":"1, 1, 0, 4","description":"Used for backgrounds and light UI elements"},{"name":"White","hex":"#ffffff","cmyk":"0, 0, 0, 0","description":"Used for card backgrounds and primary content areas"}],"usage":{"primary":["Call-to-action buttons","Interactive elements","Important highlights","Brand accents","Primary navigation","Links and clickable elements"],"accent":["Special features or promotions","Secondary actions","Visual interest and variety","Status indicators"],"neutral":["Dark gray for text and content","Medium gray for secondary text","Light gray for backgrounds and subtle elements","White for card backgrounds and content areas"]}};
const typography = {"font":"Inter","intro":"Our typography system is designed to create clear visual hierarchy and ensure readability across all platforms.","headings":[{"name":"H1","weight":"Bold","size":"2.25rem","lineHeight":"1.2","example":"Main Page Heading"},{"name":"H2","weight":"Semibold","size":"1.875rem","lineHeight":"1.3","example":"Section Heading"},{"name":"H3","weight":"Medium","size":"1.5rem","lineHeight":"1.4","example":"Subsection Heading"},{"name":"H4","weight":"Semibold","size":"1.25rem","lineHeight":"1.4","example":"Card Heading"}],"body":[{"name":"Regular text","weight":"Regular","size":"1rem","lineHeight":"1.5","example":"This is regular body text used for most content."},{"name":"Medium emphasis","weight":"Medium","size":"1rem","lineHeight":"1.5","example":"This text has medium emphasis for important information."},{"name":"Strong emphasis","weight":"Semibold","size":"1rem","lineHeight":"1.5","example":"This text has strong emphasis for critical information."},{"name":"Small text","weight":"Regular","size":"0.875rem","lineHeight":"1.5","example":"This smaller text is used for captions and supporting information."}],"families":{"heading":{"title":"Heading Font Family","description":"Used for all headings, titles, and prominent text elements to establish visual hierarchy.","sample":"Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj","weights":["Regular","Medium","Semibold","Bold"]},"body":{"title":"Body Font Family","description":"Used for body text, paragraphs, and general content to ensure optimal readability.","sample":"Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj","weights":["Regular","Medium","Semibold"]}},"guidelines":["Maintain consistent use of typography across all brand materials","Use appropriate heading levels to establish clear content hierarchy","Ensure sufficient contrast between text and background colors","Avoid using more than two font weights in a single design","Maintain appropriate line length for optimal readability (50-75 characters)"],"downloads":{"web":"/assets/fonts/inter.zip","desktop":"/assets/fonts/inter-desktop.zip"}};
const brandData = {
  companyName,
  tagline,
  logos,
  colors,
  typography,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = config.site.title,
    description = config.site.description,
    showNav = true,
    showFooter = true
  } = Astro2.props;
  const fullTitle = `${brandData.companyName} ${title}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="generator"', '><meta name="description"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><title>', '</title><script src="/js/colorManager.js" type="module"><\/script><!-- Initialize default CSS variables --><script>(function(){', "\n      // This will be replaced by dynamic values from colorManager.js\n      window.brandColors = defaultColors;\n    })();<\/script>", "</head> <body> ", " <main> ", " </main> ", '  <script>\n  // Mobile menu toggle\n  document.addEventListener("DOMContentLoaded", function () {\n    // Handle mobile menu toggle\n    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");\n    const navLinks = document.querySelector(".nav-links");\n\n    if (mobileMenuToggle && navLinks) {\n      mobileMenuToggle.addEventListener("click", function (e) {\n        e.preventDefault();\n        e.stopPropagation();\n        navLinks.classList.toggle("active");\n        console.log("Mobile menu toggled");\n      });\n    }\n\n    // Use color manager from global object\n    // Apply CSS variables from color manager if available\n    if (window.colorManager) {\n      const colorData = window.colorManager.getColorData();\n      window.colorManagerModule.updateCSSVariables(colorData);\n    }\n\n    // Close mobile menu when clicking outside\n    document.addEventListener("click", (e) => {\n      if (navLinks && navLinks.classList.contains("active")) {\n        if (!e.target.closest("nav")) {\n          navLinks.classList.remove("active");\n        }\n      }\n    });\n\n    // Highlight active nav link based on scroll position\n    const sections = document.querySelectorAll("section[id]");\n    const navItems = document.querySelectorAll(".nav-link");\n\n    function highlightNavOnScroll() {\n      let scrollPosition = window.scrollY;\n\n      sections.forEach((section) => {\n        const sectionTop = section.offsetTop - 100;\n        const sectionHeight = section.offsetHeight;\n        const sectionId = section.getAttribute("id");\n\n        if (\n          scrollPosition >= sectionTop &&\n          scrollPosition < sectionTop + sectionHeight\n        ) {\n          navItems.forEach((item) => {\n            item.classList.remove("active");\n            if (item.getAttribute("href") === `#${sectionId}`) {\n              item.classList.add("active");\n            }\n          });\n        }\n      });\n    }\n\n    window.addEventListener("scroll", highlightNavOnScroll);\n    highlightNavOnScroll(); // Run once on page load\n  });\n<\/script></body></html>'], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="generator"', '><meta name="description"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><title>', '</title><script src="/js/colorManager.js" type="module"><\/script><!-- Initialize default CSS variables --><script>(function(){', "\n      // This will be replaced by dynamic values from colorManager.js\n      window.brandColors = defaultColors;\n    })();<\/script>", "</head> <body> ", " <main> ", " </main> ", '  <script>\n  // Mobile menu toggle\n  document.addEventListener("DOMContentLoaded", function () {\n    // Handle mobile menu toggle\n    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");\n    const navLinks = document.querySelector(".nav-links");\n\n    if (mobileMenuToggle && navLinks) {\n      mobileMenuToggle.addEventListener("click", function (e) {\n        e.preventDefault();\n        e.stopPropagation();\n        navLinks.classList.toggle("active");\n        console.log("Mobile menu toggled");\n      });\n    }\n\n    // Use color manager from global object\n    // Apply CSS variables from color manager if available\n    if (window.colorManager) {\n      const colorData = window.colorManager.getColorData();\n      window.colorManagerModule.updateCSSVariables(colorData);\n    }\n\n    // Close mobile menu when clicking outside\n    document.addEventListener("click", (e) => {\n      if (navLinks && navLinks.classList.contains("active")) {\n        if (!e.target.closest("nav")) {\n          navLinks.classList.remove("active");\n        }\n      }\n    });\n\n    // Highlight active nav link based on scroll position\n    const sections = document.querySelectorAll("section[id]");\n    const navItems = document.querySelectorAll(".nav-link");\n\n    function highlightNavOnScroll() {\n      let scrollPosition = window.scrollY;\n\n      sections.forEach((section) => {\n        const sectionTop = section.offsetTop - 100;\n        const sectionHeight = section.offsetHeight;\n        const sectionId = section.getAttribute("id");\n\n        if (\n          scrollPosition >= sectionTop &&\n          scrollPosition < sectionTop + sectionHeight\n        ) {\n          navItems.forEach((item) => {\n            item.classList.remove("active");\n            if (item.getAttribute("href") === \\`#\\${sectionId}\\`) {\n              item.classList.add("active");\n            }\n          });\n        }\n      });\n    }\n\n    window.addEventListener("scroll", highlightNavOnScroll);\n    highlightNavOnScroll(); // Run once on page load\n  });\n<\/script></body></html>'])), addAttribute(config.site.favicon, "href"), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), fullTitle, defineScriptVars({ defaultColors: config.defaultColors }), renderHead(), showNav && renderTemplate`<header> <nav> <div class="nav-content"> <a href="/" class="logo"> <img${addAttribute(brandData.logos.primary.svg, "src")}${addAttribute(`${brandData.companyName} Logo`, "alt")} width="150" height="45"> <span>${title}</span> </a> <div class="nav-links"> ${config.navigation.links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="nav-link"> ${link.text} </a>`)} ${Astro2.url.pathname !== "/admin" && renderTemplate`<a href="/admin" class="nav-link admin-link">
Admin
</a>`} </div> ${config.navigation.showMobileMenu && renderTemplate`<button class="mobile-menu-toggle" aria-label="Toggle menu"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" y1="12" x2="21" y2="12"></line> <line x1="3" y1="6" x2="21" y2="6"></line> <line x1="3" y1="18" x2="21" y2="18"></line> </svg> </button>`} </div> </nav> </header>`, renderSlot($$result, $$slots["default"]), showFooter && renderTemplate`<footer> <div class="footer-content"> <div class="footer-logo"> <img${addAttribute(brandData.logos.light.svg, "src")}${addAttribute(`${brandData.companyName} Logo`, "alt")} width="150" height="45"> </div> <div class="footer-links"> <div class="footer-section"> <h3>Brand Assets</h3> <ul> ${config.navigation.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")}>${link.text}</a> </li>`)} </ul> </div> ${config.features.enableDownloads && renderTemplate`<div class="footer-section"> <h3>Resources</h3> <ul> <li> <a href="#">Download All Assets</a> </li> <li> <a href="#">Brand Guidelines PDF</a> </li> <li> <a href="#">Contact Brand Team</a> </li> </ul> </div>`} </div> </div> <div class="footer-bottom"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${brandData.companyName}. All
              rights reserved.
</p> </div> </footer>`);
}, "E:/Miscel\xE2nia/VSCode/template-brandguide/src/layouts/Layout.astro", void 0);

export { $$Layout as $, brandData as b, config as c };
