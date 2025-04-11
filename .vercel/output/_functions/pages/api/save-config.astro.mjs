import require$$0 from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
export { renderers } from '../../renderers.mjs';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function POST({ request }) {
  try {
    // Parse the JSON data from the request
    const data = await request.json();
    
    // Validate the data (basic validation)
    if (!data || !data.brandData) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Invalid data format' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Path to the brand.json file
    const brandFilePath = path.resolve(__dirname, '../../data/brand.json');
    
    // Write the updated brand data to the file
    require$$0.writeFileSync(
      brandFilePath,
      JSON.stringify(data.brandData, null, 2),
      'utf8'
    );

    // If config data is provided, update the config file
    if (data.configData) {
      // We'll need to update the config in a different way since it's a TypeScript file
      // For now, we'll just acknowledge we received it
      console.log('Config data received:', data.configData);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Configuration saved successfully' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error saving configuration:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Error saving configuration: ' + error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
