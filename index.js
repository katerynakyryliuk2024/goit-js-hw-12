import{a as L,i as c,S as v}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const y of a.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const g=r=>`
    <div class = 'gallery-size'>
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
    </div>
    `,m=(r,t)=>{const s={params:{key:"48282241-c94e9d668c7a92092d53abf55",q:r,page:t,per_page:10,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return L.get("https://pixabay.com/api/",s)},h=document.querySelector(".search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),p=document.querySelector(".gallery-size");let i=1,d="";n.style.display="none";const S=async r=>{n.style.display="inline-block";try{if(r.preventDefault(),d=r.currentTarget.elements.search_input.value.trim(),d===""){c.warning({title:"Caution",message:"You forgot to full fill searching area"});return}i=1,l.classList.add("is-hidden");const{data:t}=await m(d,i);if(t.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),u.innerHTML="",h.reset();return}t.total>10&&(l.classList.remove("is-hidden"),l.addEventListener("click",f));const s=t.hits.map(a=>g(a)).join("");u.innerHTML=s;let o=p.getBoundingClientRect();p.scrollBy(0,2*{height:o}),new v(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}catch(t){err.message==="404"&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(t)}finally{n.style.display="none"}};h.addEventListener("submit",S);const f=async r=>{n.style.display="inline-block",i=1;try{const{data:t}=await m(d,i);console.dir({data:t});const s=t.hits.map(e=>g(e)).join("");u.insertAdjacentHTML("beforeend",s),(i=Math.ceil(t.totalHits/10))&&(l.classList.add("is-hidden"),l.removeEventListener("click",f),c.info({message:"We are sorry, but you have reached the end of search results."}))}catch(t){console.log(t)}finally{n.style.display="none"}};
//# sourceMappingURL=index.js.map
