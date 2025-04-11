import 'kleur/colors';
import { i as decodeKey } from './chunks/astro/server_Dk79wcWG.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DFLOHmZz.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/Miscel%C3%A2nia/VSCode/template-brandguide/","cacheDir":"file:///E:/Miscel%C3%A2nia/VSCode/template-brandguide/node_modules/.astro/","outDir":"file:///E:/Miscel%C3%A2nia/VSCode/template-brandguide/dist/","srcDir":"file:///E:/Miscel%C3%A2nia/VSCode/template-brandguide/src/","publicDir":"file:///E:/Miscel%C3%A2nia/VSCode/template-brandguide/public/","buildClientDir":"file:///E:/Miscel%C3%A2nia/VSCode/template-brandguide/dist/client/","buildServerDir":"file:///E:/Miscel%C3%A2nia/VSCode/template-brandguide/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.6.1_rollup@4.39.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.DbIyT_ZL.css"},{"type":"inline","content":":root{--primary: #2563eb;--primary-light: #60a5fa;--primary-dark: #1e40af;--accent-purple: #8b5cf6;--accent-green: #10b981;--accent-red: #ef4444;--text: #1f2937;--text-light: #6b7280;--background: #ffffff;--secondary-bg: #f3f4f6;--border: #e5e7eb;--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--radius-sm: .375rem;--radius: .5rem;--radius-lg: 1rem;--footer-bg: #1f2937;--footer-text: #f3f4f6;transition:color .3s ease,background-color .3s ease,border-color .3s ease}html{font-family:Inter,sans-serif;scroll-behavior:smooth;scroll-padding-top:80px}body{margin:0;padding:0;color:var(--text);background:var(--background);min-height:100vh;display:flex;flex-direction:column}main{flex:1;padding:6rem 2rem 4rem}header{position:fixed;top:0;left:0;right:0;background:var(--background);border-bottom:1px solid var(--border);z-index:100;box-shadow:var(--shadow-sm)}nav{max-width:1200px;margin:0 auto}.nav-content{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem}.logo{display:flex;align-items:center;gap:.75rem;text-decoration:none;color:var(--text)}.logo span{font-weight:600;font-size:1.25rem}.nav-links{display:flex;gap:2.5rem}.nav-link{color:var(--text);text-decoration:none;font-weight:500;padding:.5rem 0;position:relative;transition:color .2s ease}.nav-link:after{content:\"\";position:absolute;bottom:0;left:0;width:0;height:2px;background-color:var(--primary);transition:width .3s ease}.nav-link:hover{color:var(--primary)}.nav-link:hover:after{width:100%}.mobile-menu-toggle{display:none;background:none;border:none;cursor:pointer;color:var(--text)}footer{background-color:var(--footer-bg);color:var(--footer-text);padding:4rem 2rem 1rem;margin-top:4rem}.footer-content{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;gap:4rem;margin-bottom:3rem}.footer-logo{max-width:200px}.footer-links{display:flex;gap:4rem}.footer-section h3{font-size:1.125rem;margin-top:0;margin-bottom:1.5rem;color:#fff}.footer-section ul{list-style-type:none;padding:0;margin:0}.footer-section li{margin-bottom:.75rem}.footer-section a{color:var(--footer-text);text-decoration:none;transition:color .2s ease}.footer-section a:hover{color:var(--primary-light);text-decoration:underline}.footer-bottom{max-width:1200px;margin:0 auto;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.1);text-align:center;font-size:.875rem;color:#ffffffb3}@media (max-width: 992px){.footer-content{flex-direction:column;gap:2rem}.footer-logo{margin:0 auto;text-align:center}}@media (max-width: 768px){.nav-links{display:none}.mobile-menu-toggle{display:block}.footer-links{flex-direction:column;gap:2rem}main{padding:5rem 1.5rem 3rem}}@media (max-width: 768px){.nav-links.active{display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:var(--background);padding:1.5rem;border-bottom:1px solid var(--border);box-shadow:var(--shadow);animation:slideDown .3s ease-out forwards}@keyframes slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}}\n"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/save-config","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/save-config\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"save-config","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/save-config.js","pathname":"/api/save-config","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--primary: #2563eb;--primary-light: #60a5fa;--primary-dark: #1e40af;--accent-purple: #8b5cf6;--accent-green: #10b981;--accent-red: #ef4444;--text: #1f2937;--text-light: #6b7280;--background: #ffffff;--secondary-bg: #f3f4f6;--border: #e5e7eb;--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, .05);--shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--radius-sm: .375rem;--radius: .5rem;--radius-lg: 1rem;--footer-bg: #1f2937;--footer-text: #f3f4f6;transition:color .3s ease,background-color .3s ease,border-color .3s ease}html{font-family:Inter,sans-serif;scroll-behavior:smooth;scroll-padding-top:80px}body{margin:0;padding:0;color:var(--text);background:var(--background);min-height:100vh;display:flex;flex-direction:column}main{flex:1;padding:6rem 2rem 4rem}header{position:fixed;top:0;left:0;right:0;background:var(--background);border-bottom:1px solid var(--border);z-index:100;box-shadow:var(--shadow-sm)}nav{max-width:1200px;margin:0 auto}.nav-content{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem}.logo{display:flex;align-items:center;gap:.75rem;text-decoration:none;color:var(--text)}.logo span{font-weight:600;font-size:1.25rem}.nav-links{display:flex;gap:2.5rem}.nav-link{color:var(--text);text-decoration:none;font-weight:500;padding:.5rem 0;position:relative;transition:color .2s ease}.nav-link:after{content:\"\";position:absolute;bottom:0;left:0;width:0;height:2px;background-color:var(--primary);transition:width .3s ease}.nav-link:hover{color:var(--primary)}.nav-link:hover:after{width:100%}.mobile-menu-toggle{display:none;background:none;border:none;cursor:pointer;color:var(--text)}footer{background-color:var(--footer-bg);color:var(--footer-text);padding:4rem 2rem 1rem;margin-top:4rem}.footer-content{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;gap:4rem;margin-bottom:3rem}.footer-logo{max-width:200px}.footer-links{display:flex;gap:4rem}.footer-section h3{font-size:1.125rem;margin-top:0;margin-bottom:1.5rem;color:#fff}.footer-section ul{list-style-type:none;padding:0;margin:0}.footer-section li{margin-bottom:.75rem}.footer-section a{color:var(--footer-text);text-decoration:none;transition:color .2s ease}.footer-section a:hover{color:var(--primary-light);text-decoration:underline}.footer-bottom{max-width:1200px;margin:0 auto;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.1);text-align:center;font-size:.875rem;color:#ffffffb3}@media (max-width: 992px){.footer-content{flex-direction:column;gap:2rem}.footer-logo{margin:0 auto;text-align:center}}@media (max-width: 768px){.nav-links{display:none}.mobile-menu-toggle{display:block}.footer-links{flex-direction:column;gap:2rem}main{padding:5rem 1.5rem 3rem}}@media (max-width: 768px){.nav-links.active{display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:var(--background);padding:1.5rem;border-bottom:1px solid var(--border);box-shadow:var(--shadow);animation:slideDown .3s ease-out forwards}@keyframes slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}}\n"},{"type":"external","src":"/_astro/index.BEzGbbgz.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/Miscelânia/VSCode/template-brandguide/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["E:/Miscelânia/VSCode/template-brandguide/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/save-config@_@js":"pages/api/save-config.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.6.1_rollup@4.39.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","E:/Miscelânia/VSCode/template-brandguide/node_modules/.pnpm/astro@5.6.1_rollup@4.39.0_typescript@5.8.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DbWR_VTi.mjs","\u0000@astrojs-manifest":"manifest_BKV6nn-5.mjs","E:/Miscelânia/VSCode/template-brandguide/src/pages/admin.astro?astro&type=script&index=0&lang.ts":"_astro/admin.astro_astro_type_script_index_0_lang.8SoLoydO.js","E:/Miscelânia/VSCode/template-brandguide/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CV8CUB61.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["E:/Miscelânia/VSCode/template-brandguide/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".copy-btn\").forEach(e=>{e.addEventListener(\"click\",()=>{const o=e.closest(\".color-value\").getAttribute(\"data-clipboard\");navigator.clipboard.writeText(o).then(()=>{const t=e.innerHTML;e.innerHTML='<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>',e.style.color=\"#10b981\",setTimeout(()=>{e.innerHTML=t,e.style.color=\"\"},2e3)})})}),document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",function(o){o.preventDefault();const t=this.getAttribute(\"href\");if(!t)return;const n=document.querySelector(t);if(n){const r=n.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:r-80,behavior:\"smooth\"})}})})});"]],"assets":["/_astro/admin.DbIyT_ZL.css","/_astro/index.BEzGbbgz.css","/favicon.svg","/assets/logo-dark.png","/assets/logo-dark.svg","/assets/logo-icon.png","/assets/logo-icon.svg","/assets/logo-light.png","/assets/logo-light.svg","/assets/logo-primary.png","/assets/logo-primary.svg","/assets/preview.svg","/js/colorManager.js","/_astro/admin.astro_astro_type_script_index_0_lang.8SoLoydO.js","/assets/fonts/inter-desktop.zip","/assets/fonts/inter.zip"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"uuFyg6QZ5DFh15jS0Mm+/M0sw9YYDYcP5AB4ZPgEVPM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
