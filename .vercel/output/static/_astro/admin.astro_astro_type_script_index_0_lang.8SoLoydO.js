document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".color-hex").forEach(t=>{t.addEventListener("change",l=>{const n=l.target.closest(".color-item").querySelector(".color-preview");n.style.backgroundColor=l.target.value})}),document.querySelectorAll(".add-color-btn").forEach(t=>{t.addEventListener("click",l=>{const e=l.target.dataset.category,n=document.getElementById(`${e}-colors`),c=document.createElement("div");c.className="color-item",c.dataset.category=e,c.dataset.index=n.querySelectorAll(".color-item").length,c.innerHTML=`
          <div class="color-preview" style="background-color: #cccccc"></div>
          <div class="color-details">
            <input type="text" class="color-name" value="New Color" />
            <div class="color-values">
              <div class="color-value">
                <label>HEX</label>
                <input type="text" class="color-hex" value="#cccccc" />
              </div>
              <div class="color-value">
                <label>CMYK</label>
                <input type="text" class="color-cmyk" value="0, 0, 0, 20" />
              </div>
            </div>
            <textarea class="color-description" placeholder="Color description"></textarea>
          </div>
        `,c.querySelector(".color-hex").addEventListener("change",r=>{const o=c.querySelector(".color-preview");o.style.backgroundColor=r.target.value}),n.insertBefore(c,l.target)})}),document.getElementById("save-config").addEventListener("click",async()=>{const t=document.getElementById("save-config"),l=t.innerHTML;t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="loading-icon"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg> Saving...',t.disabled=!0;try{const e=JSON.parse(document.getElementById("brand-data").textContent);e.companyName=document.getElementById("companyName").value,e.tagline=document.getElementById("tagline").value,document.querySelectorAll("#primary-colors .color-item").forEach((r,o)=>{o<e.colors.primary.length&&(e.colors.primary[o].name=r.querySelector(".color-name").value,e.colors.primary[o].hex=r.querySelector(".color-hex").value,e.colors.primary[o].cmyk=r.querySelector(".color-cmyk").value,e.colors.primary[o].description=r.querySelector(".color-description").value)}),document.querySelectorAll("#accent-colors .color-item").forEach((r,o)=>{o<e.colors.accent.length&&(e.colors.accent[o].name=r.querySelector(".color-name").value,e.colors.accent[o].hex=r.querySelector(".color-hex").value,e.colors.accent[o].cmyk=r.querySelector(".color-cmyk").value,e.colors.accent[o].description=r.querySelector(".color-description").value)}),document.querySelectorAll("#neutral-colors .color-item").forEach((r,o)=>{o<e.colors.neutral.length&&(e.colors.neutral[o].name=r.querySelector(".color-name").value,e.colors.neutral[o].hex=r.querySelector(".color-hex").value,e.colors.neutral[o].cmyk=r.querySelector(".color-cmyk").value,e.colors.neutral[o].description=r.querySelector(".color-description").value)}),e.typography.font=document.getElementById("font-family").value,e.typography.intro=document.getElementById("typography-intro").value;const n={site:{title:document.getElementById("site-title").value,description:document.getElementById("site-description").value},features:{showCMYK:document.getElementById("show-cmyk").checked,enableDownloads:document.getElementById("enable-downloads").checked}},a=await(await fetch("/api/save-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({brandData:e,configData:n})})).json();if(a.success)t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Saved!',setTimeout(()=>{t.innerHTML=l,t.disabled=!1},2e3);else throw new Error(a.message||"Failed to save configuration")}catch(e){console.error("Error saving configuration:",e),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> Error!',alert(`Error saving configuration: ${e.message}`),setTimeout(()=>{t.innerHTML=l,t.disabled=!1},2e3)}})});
