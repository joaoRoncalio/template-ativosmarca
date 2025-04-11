import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, b as renderComponent, d as renderScript, e as addAttribute, F as Fragment } from '../chunks/astro/server_Dk79wcWG.mjs';
import 'kleur/colors';
import { b as brandData, c as config, $ as $$Layout } from '../chunks/Layout_Bpyt69H8.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$AdminLogin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdminLogin;
  const { error = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="login-container" data-astro-cid-lvtr3h3l> <div class="login-card" data-astro-cid-lvtr3h3l> <h1 data-astro-cid-lvtr3h3l>Admin Login</h1> <p data-astro-cid-lvtr3h3l>Please enter the password to access the brand guide admin panel.</p> <p class="hint" data-astro-cid-lvtr3h3l><strong data-astro-cid-lvtr3h3l>Hint:</strong> Try using "admin" as the password</p> ${error && renderTemplate`<div class="error-message" data-astro-cid-lvtr3h3l>Incorrect password. Please try again.</div>`} <form method="post" action="/admin" data-astro-cid-lvtr3h3l> <div class="form-group" data-astro-cid-lvtr3h3l> <label for="password" data-astro-cid-lvtr3h3l>Password</label> <input type="password" id="password" name="password" required autocomplete="current-password" autofocus data-astro-cid-lvtr3h3l> </div> <div class="button-group" data-astro-cid-lvtr3h3l> <button type="submit" class="btn-primary" data-astro-cid-lvtr3h3l>Login</button> <a href="/" class="btn-secondary" data-astro-cid-lvtr3h3l>Back to Brand Guide</a> </div> <p class="bypass-note" data-astro-cid-lvtr3h3l>
You can also access the admin panel directly by adding <code data-astro-cid-lvtr3h3l>?auth=bypass123</code> to the URL.
</p> </form> </div> </div> `;
}, "E:/Miscel\xE2nia/VSCode/template-brandguide/src/components/AdminLogin.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  let isAuthenticated = false;
  let showError = false;
  const url = new URL(Astro2.request.url);
  if (url.searchParams.get("auth") === "bypass123") {
    isAuthenticated = true;
  }
  const cookies = Astro2.request.headers.get("cookie");
  if (cookies && cookies.includes("admin_authenticated=true")) {
    isAuthenticated = true;
  }
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const password = formData.get("password");
      const validPasswords = ["admin", "brandguide123"];
      if (validPasswords.includes(password?.toString() || "")) {
        isAuthenticated = true;
        Astro2.response.headers.set(
          "Set-Cookie",
          "admin_authenticated=true; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600"
        );
      } else {
        showError = true;
      }
    } catch (error) {
      console.error("Error processing form:", error);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Panel", "showNav": false, "data-astro-cid-2zp6q64z": true }, { "default": async ($$result2) => renderTemplate`${!isAuthenticated ? renderTemplate`${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "error": showError, "data-astro-cid-2zp6q64z": true })}` : renderTemplate`${maybeRenderHead()}<div class="admin-container" data-astro-cid-2zp6q64z> <header class="admin-header" data-astro-cid-2zp6q64z> <div class="admin-header-content" data-astro-cid-2zp6q64z> <div data-astro-cid-2zp6q64z> <h1 data-astro-cid-2zp6q64z>Brand Guide Admin</h1> <p data-astro-cid-2zp6q64z>Use this page to manage your brand guide configuration</p> </div> <a href="/" class="btn-secondary" data-astro-cid-2zp6q64z>
Back to Brand Guide
</a> </div> </header> <div class="admin-content" data-astro-cid-2zp6q64z> <section class="admin-section" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Brand Information</h2> <div class="form-group" data-astro-cid-2zp6q64z> <label for="companyName" data-astro-cid-2zp6q64z>Company Name</label> <input type="text" id="companyName"${addAttribute(brandData.companyName, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="tagline" data-astro-cid-2zp6q64z>Tagline</label> <input type="text" id="tagline"${addAttribute(brandData.tagline, "value")} data-astro-cid-2zp6q64z> </div> </section> <section class="admin-section" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Color Management</h2> <div class="color-categories" data-astro-cid-2zp6q64z> <div class="color-category" data-astro-cid-2zp6q64z> <h3 data-astro-cid-2zp6q64z>Primary Colors</h3> <div class="color-list" id="primary-colors" data-astro-cid-2zp6q64z> ${brandData.colors.primary.map((color, index) => renderTemplate`<div class="color-item" data-category="primary"${addAttribute(index, "data-index")} data-astro-cid-2zp6q64z> <div class="color-preview"${addAttribute(`background-color: ${color.hex}`, "style")} data-astro-cid-2zp6q64z></div> <div class="color-details" data-astro-cid-2zp6q64z> <input type="text" class="color-name"${addAttribute(color.name, "value")} data-astro-cid-2zp6q64z> <div class="color-values" data-astro-cid-2zp6q64z> <div class="color-value" data-astro-cid-2zp6q64z> <label data-astro-cid-2zp6q64z>HEX</label> <input type="text" class="color-hex"${addAttribute(color.hex, "value")} data-astro-cid-2zp6q64z> </div> <div class="color-value" data-astro-cid-2zp6q64z> <label data-astro-cid-2zp6q64z>CMYK</label> <input type="text" class="color-cmyk"${addAttribute(color.cmyk, "value")} data-astro-cid-2zp6q64z> </div> </div> <textarea class="color-description" placeholder="Color description" data-astro-cid-2zp6q64z>                          ${color.description}
                        </textarea> </div> </div>`)} <button class="add-color-btn" data-category="primary" data-astro-cid-2zp6q64z>
+ Add Primary Color
</button> </div> </div> <div class="color-category" data-astro-cid-2zp6q64z> <h3 data-astro-cid-2zp6q64z>Accent Colors</h3> <div class="color-list" id="accent-colors" data-astro-cid-2zp6q64z> ${brandData.colors.accent.map((color, index) => renderTemplate`<div class="color-item" data-category="accent"${addAttribute(index, "data-index")} data-astro-cid-2zp6q64z> <div class="color-preview"${addAttribute(`background-color: ${color.hex}`, "style")} data-astro-cid-2zp6q64z></div> <div class="color-details" data-astro-cid-2zp6q64z> <input type="text" class="color-name"${addAttribute(color.name, "value")} data-astro-cid-2zp6q64z> <div class="color-values" data-astro-cid-2zp6q64z> <div class="color-value" data-astro-cid-2zp6q64z> <label data-astro-cid-2zp6q64z>HEX</label> <input type="text" class="color-hex"${addAttribute(color.hex, "value")} data-astro-cid-2zp6q64z> </div> <div class="color-value" data-astro-cid-2zp6q64z> <label data-astro-cid-2zp6q64z>CMYK</label> <input type="text" class="color-cmyk"${addAttribute(color.cmyk, "value")} data-astro-cid-2zp6q64z> </div> </div> <textarea class="color-description" placeholder="Color description" data-astro-cid-2zp6q64z>                          ${color.description}
                        </textarea> </div> </div>`)} <button class="add-color-btn" data-category="accent" data-astro-cid-2zp6q64z>
+ Add Accent Color
</button> </div> </div> </div> </section> <section class="admin-section" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Typography</h2> <div class="form-group" data-astro-cid-2zp6q64z> <label for="font-family" data-astro-cid-2zp6q64z>Primary Font</label> <input type="text" id="font-family"${addAttribute(brandData.typography.font, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="typography-intro" data-astro-cid-2zp6q64z>Typography Introduction</label> <textarea id="typography-intro" rows="3" data-astro-cid-2zp6q64z>                ${brandData.typography.intro}
              </textarea> </div> </section> <section class="admin-section" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Template Configuration</h2> <div class="form-group" data-astro-cid-2zp6q64z> <label for="site-title" data-astro-cid-2zp6q64z>Site Title</label> <input type="text" id="site-title"${addAttribute(config.site.title, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="site-description" data-astro-cid-2zp6q64z>Site Description</label> <input type="text" id="site-description"${addAttribute(config.site.description, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group checkbox-group" data-astro-cid-2zp6q64z> <label data-astro-cid-2zp6q64z> <input type="checkbox" id="show-cmyk"${addAttribute(config.features.showCMYK, "checked")} data-astro-cid-2zp6q64z>
Show CMYK Values
</label> </div> <div class="form-group checkbox-group" data-astro-cid-2zp6q64z> <label data-astro-cid-2zp6q64z> <input type="checkbox" id="enable-downloads"${addAttribute(config.features.enableDownloads, "checked")} data-astro-cid-2zp6q64z>
Enable Downloads
</label> </div> </section> <div class="admin-actions" data-astro-cid-2zp6q64z> <button id="save-config" class="btn-primary save-btn" data-astro-cid-2zp6q64z> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2zp6q64z> ${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-2zp6q64z": true }, { "default": async ($$result3) => renderTemplate` <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" data-astro-cid-2zp6q64z></path> <polyline points="17 21 17 13 7 13 7 21" data-astro-cid-2zp6q64z></polyline> <polyline points="7 3 7 8 15 8" data-astro-cid-2zp6q64z></polyline> ` })} </svg>
Save Configuration
</button> <p class="vercel-note" data-astro-cid-2zp6q64z>
Note: When deployed on Vercel, changes are not permanently saved.
              This is a demo version.
</p> </div> </div> </div>`}` })}  ${renderScript($$result, "E:/Miscel\xE2nia/VSCode/template-brandguide/src/pages/admin.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Miscel\xE2nia/VSCode/template-brandguide/src/pages/admin.astro", void 0);

const $$file = "E:/Miscelânia/VSCode/template-brandguide/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
