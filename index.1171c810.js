const t=document.querySelector(".rockets");(async()=>{const t=await fetch("https://api.spacexdata.com/v3/rockets");if(!t.ok)throw new Error(t.json());return await t.json()})().then((e=>{t.innerHTML=e.map((t=>`<li>${t.rocket_name}</li>`)).join("")})),t.addEventListener("click",(t=>{console.log(t.target.textContent)}));
//# sourceMappingURL=index.1171c810.js.map
