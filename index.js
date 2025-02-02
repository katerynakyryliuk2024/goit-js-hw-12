import{a as h,i as y,S as L}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const p=r=>`
    <li class='gallery-card'>
    <a class='gallery-link' href='${r.largeImageURL}'>
    <img class='galley-img' src='${r.webformatURL}' alt='${r.tags}' width='360'  '/>
    </a>
    <div class='description'>
    <p>Likes: ${r.likes}</p>
    <p>Views: ${r.views}</p> 
    <p>Comments: ${r.comments}</p>
    <p> Downloads: ${r.downloads}</p>
    </div>
    </li>
    `,m=(r,t)=>{const s={params:{key:"48282241-c94e9d668c7a92092d53abf55",q:r,page:t,per_page:10,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return h.get("https://pixabay.com/api/",s)},g=document.querySelector(".search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let i=1,c="";n.style.display="none";const b=async r=>{n.style.display="inline-block";try{if(r.preventDefault(),c=r.currentTarget.elements.search_input.value.trim(),c===""){y.warning({title:"Caution",message:"You forgot to full fill searching area"});return}i=1,l.classList.add("is-hidden");const{data:t}=await m(c,i);if(t.hits.length===0){y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),u.innerHTML="",g.reset();return}t.total>10&&(l.classList.remove("is-hidden"),l.addEventListener("click",f));const s=t.hits.map(e=>p(e)).join("");u.innerHTML=s,new L(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}catch(t){err.message==="404"&&y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(t)}finally{n.style.display="none"}};g.addEventListener("submit",b);const f=async r=>{n.style.display="inline-block";try{i++;const{data:t}=await m(c,i),s=t.hits.map(o=>p(o)).join("");u.insertAdjacentHTML("beforeend",s),(i=t.total)&&(l.classList.add("is-hidden"),l.removeEventListener("click",f))}catch(t){console.log(t)}finally{n.style.display="none"}};
//# sourceMappingURL=index.js.map
