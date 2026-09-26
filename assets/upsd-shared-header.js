document.addEventListener("DOMContentLoaded",()=>{
  const h=document.querySelector(".header"),hamb=h?.querySelector(".hamb"),nav=h?.querySelector(".nav");
  if(hamb&&nav)hamb.addEventListener("click",()=>nav.classList.toggle("open"));
  h?.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>{location.href=b.dataset.page}));
  h?.querySelectorAll(".mega").forEach(mega=>{
    const cols=[...mega.querySelectorAll(".mega-column")],titles=cols.flatMap(col=>[...col.querySelectorAll(".mega-title")]),linkLists=cols.map(col=>[...col.querySelectorAll("a")]);
    let sequence=[...titles];
    for(let row=0;row<Math.max(0,...linkLists.map(list=>list.length));row++)linkLists.forEach(list=>{if(list[row])sequence.push(list[row])});
    sequence.forEach((el,index)=>el.style.setProperty("--reveal-index",String(index)));
  });
  const hero=document.querySelector("main#ana > .hero");
  if(!hero)return;
  const videoStyles=document.createElement("style");
  videoStyles.textContent=`.hero.hero-video{isolation:isolate;overflow:hidden;background:#071e3b!important}.hero-video-media{position:absolute;inset:0;z-index:-3;width:100%;height:100%;object-fit:cover}.hero-video-shade{position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,#031630cc 0%,#071e3b7a 48%,#071e3b28 100%)}.hero-video .hero-content,.hero-video .scroll{position:relative;z-index:1}.hero-sound-toggle{position:absolute;right:max(34px,calc((100% - 1280px)/2));bottom:28px;z-index:2;display:inline-flex;align-items:center;gap:8px;border:1px solid #ffffff8c;background:#071e3ba8;color:#fff;padding:10px 13px;font:500 12px/1 Poppins,Arial,sans-serif;cursor:pointer;transition:background .2s,transform .2s}.hero-sound-toggle:hover{background:#0057b8;transform:translateY(-2px)}.hero-sound-toggle em{font-style:normal}@media(max-width:850px){.hero-sound-toggle{right:22px;bottom:22px;padding:9px 11px}.hero-sound-toggle em{display:none}}`;
  document.head.appendChild(videoStyles);
  hero.classList.add("hero-video");
  hero.insertAdjacentHTML("afterbegin",'<video class="hero-video-media" autoplay muted loop playsinline preload="metadata" aria-label="UPSD tanıtım videosu"><source src="assets/upsd-video2.mp4" type="video/mp4"></video><span class="hero-video-shade" aria-hidden="true"></span>');
  hero.insertAdjacentHTML("beforeend",'<button class="hero-sound-toggle" type="button" aria-label="Sesi aç" aria-pressed="false"><span aria-hidden="true">🔇</span><em>Sesi aç</em></button>');
  const video=hero.querySelector(".hero-video-media"),toggle=hero.querySelector(".hero-sound-toggle");
  video.muted=true;
  toggle.addEventListener("click",()=>{
    video.muted=!video.muted;
    const muted=video.muted;
    toggle.setAttribute("aria-label",muted?"Sesi aç":"Sesi kapat");
    toggle.setAttribute("aria-pressed",String(!muted));
    toggle.querySelector("span").textContent=muted?"🔇":"🔊";
    toggle.querySelector("em").textContent=muted?"Sesi aç":"Sesi kapat";
  });
});