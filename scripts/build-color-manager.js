/**
 * This script converts the ES module version of colorManager.js to a browser-compatible version
 * It's meant to be run as part of the build process to keep both files in sync
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the source file
const sourceFile = path.join(__dirname, "../src/js/colorManager.js");
const targetFile = path.join(__dirname, "../public/js/colorManager.js");

let content = fs.readFileSync(sourceFile, "utf8");

// Replace export statements with window assignments
content = content.replace(
  /export function (\w+)/g,
  "window.colorManagerModule.$1 = function",
);

// Replace regular function declarations with window assignments
content = content.replace(
  /function (\w+)/g,
  "window.colorManagerModule.$1 = function",
);

// Replace const declarations with window assignments
content = content.replace(/const (\w+) = /g, "window.colorManagerModule.$1 = ");

// Add the module object creation at the top
const header = `/**
 * Color Manager Module
 * Handles dynamic color updates and CSS variable management
 * Designed to be completely independent of hardcoded color names
 */

// Create a global module object
window.colorManagerModule = {};

`;

// Write the transformed content to the target file
fs.writeFileSync(targetFile, header + content);

console.log("Browser-compatible colorManager.js has been generated.");
