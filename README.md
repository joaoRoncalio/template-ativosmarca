# Brand Guide Template

A customizable brand guidelines template built with Astro. This template provides a beautiful, responsive interface for showcasing your brand's identity, including colors, typography, and logo usage guidelines.

![Brand Guide Template Preview](public/assets/preview.png)

## Features

- 🎨 **Dynamic Color System**: JSON-based color management with CMYK support
- 🔤 **Typography Showcase**: Display font families, weights, and usage examples
- 🖼️ **Logo Guidelines**: Show proper logo usage with downloadable assets
- 📱 **Fully Responsive**: Looks great on all devices
- ⚡ **Fast & Lightweight**: Built with Astro for optimal performance
- 🛠️ **Easy to Customize**: Simple JSON configuration

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or pnpm

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/brand-guide-template.git
   cd brand-guide-template
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## Customization

### Basic Configuration

The template can be customized by editing the following files:

1. **Brand Data**: Edit `src/data/brand.json` to update your brand information
2. **Template Config**: Modify `src/config/config.ts` to change template settings
3. **Logo Assets**: Replace the logo files in `public/assets/` with your own

### Brand Data Structure

The `brand.json` file contains all the information about your brand, including:

- Company name and tagline
- Logo files and usage guidelines
- Color palette with HEX and CMYK values
- Typography specifications

A template file with documentation is available at `src/data/brand-template.json`.

### Color System

The color system supports:

- Primary colors
- Accent colors
- Neutral colors

Each color can have:

- Name
- HEX value
- CMYK value
- Description

Colors are automatically applied to the CSS variables in the template.

### Typography

The typography section allows you to showcase:

- Font families (heading and body)
- Font weights
- Heading styles
- Body text styles

### Advanced Customization

For more advanced customization:

1. **Components**: Modify or create new components in `src/components/`
2. **Layouts**: Edit the main layout in `src/layouts/Layout.astro`
3. **Styles**: Update global styles in the Layout component
4. **Color Manager**: Customize color mapping in `public/js/colorManager.js`

## Project Structure

```text
/
├── public/               # Static assets
│   ├── assets/           # Brand assets (logos, fonts)
│   ├── js/               # Client-side JavaScript
│   └── favicon.svg       # Site favicon
├── src/
│   ├── components/       # Reusable UI components
│   ├── config/           # Template configuration
│   ├── data/             # Brand data (JSON)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page components
│   └── types/            # TypeScript type definitions
└── package.json          # Project dependencies
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Astro](https://astro.build)
- Uses [Inter](https://rsms.me/inter/) font by default
