(()=>{"use strict";const birthday=new Date(2026,10,4,0,0,0),$=id=>document.getElementById(id),pad=n=>String(n).padStart(2,"0");
const layer=$("butterflies"),spots=[[6,17,-12,.95],[20,8,7,.72],[70,18,10,.86],[90,10,-8,.78],[93,31,8,.72],[83,62,-10,.76],[11,78,7,.68]];
spots.forEach(([x,y,r,s])=>{const b=document.createElement("span");b.className="butterfly";b.style.left=x+"%";b.style.top=y+"%";b.style.transform=`rotate(${r}deg) scale(${s})`;layer.appendChild(b)});
function burst(){const c=$("confetti");c.innerHTML="";const colors=["#f2c34e","#168fd8","#f7d99a","#92a87a","#fff8e7"];for(let i=0;i<85;i++){const x=document.createElement("i");x.style.left=Math.random()*100+"%";x.style.background=colors[Math.floor(Math.random()*colors.length)];x.style.animationDelay=Math.random()*2.5+"s";x.style.animationDuration=(2.8+Math.random()*2.8)+"s";c.appendChild(x)}}
let unlocked=false;function tick(){const d=birthday-Date.now();if(d<=0){$("countdownPage").classList.add("hidden");$("birthdayPage").classList.remove("hidden");if(!unlocked){unlocked=true;burst()}return}$("days").textContent=String(Math.floor(d/86400000)).padStart(3,"0");$("hours").textContent=pad(Math.floor(d%86400000/3600000));$("minutes").textContent=pad(Math.floor(d%3600000/60000));$("seconds").textContent=pad(Math.floor(d%60000/1000))}tick();setInterval(tick,1000);
const cal=$("calDays"),off=(new Date(2027,1,1).getDay()+6)%7;for(let i=0;i<off;i++)cal.appendChild(document.createElement("span"));for(let n=1;n<=28;n++){const s=document.createElement("span");s.textContent=n;if(n===8){s.className="marked";s.title="My arrival day ♡"}cal.appendChild(s)}
const ld=$("letterDialog");const openLetter=()=>ld.showModal();$("openLetter").onclick=openLetter;$("openLetter2").onclick=openLetter;$("closeLetter").onclick=()=>ld.close();ld.onclick=e=>{if(e.target===ld)ld.close()};
const id=$("imageDialog");
document.querySelectorAll(".polaroid").forEach(b=>b.onclick=()=>{
 const img=b.querySelector("img"); if(!img || b.classList.contains("missing-photo")) return;
 $("bigImage").src=img.src; $("bigImage").alt=img.alt; id.showModal()
});
$("closeImage").onclick=()=>id.close();id.onclick=e=>{if(e.target===id)id.close()};
$("wishBtn").onclick=()=>{burst();const t=$("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),3200)};
})();