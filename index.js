import{a as h,i as u,S as L}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const p=r=>`
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
    `,m=(r,t)=>{const s={params:{key:"48282241-c94e9d668c7a92092d53abf55",q:r,page:t,per_page:10,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return h.get("https://pixabay.com/api/",s)},g=document.querySelector(".search-form"),y=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");let l=1,c="";n.style.display="none";const S=async r=>{try{if(r.preventDefault(),c=r.currentTarget.elements.search_input.value.trim(),c===""){u.warning({title:"Caution",message:"You forgot to full fill searching area"});return}n.style.display="inline-block",l=1,i.classList.add("is-hidden");const{data:t}=await m(c,l);if(n.style.display="none",t.hits.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),y.innerHTML="",g.reset();return}t.totalHits>10&&(i.classList.remove("is-hidden"),i.addEventListener("click",f));const s=t.hits.map(e=>p(e)).join("");y.innerHTML=s,new L(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}catch(t){n.style.display="none",err.message==="404"&&u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(t)}};g.addEventListener("submit",S);const f=async r=>{try{l++;const{data:t}=await m(c,l),s=t.hits.map(o=>p(o)).join("");y.insertAdjacentHTML("beforeend",s),(l=t.totalHits)&&(i.classList.add("is-hidden"),i.removeEventListener("click",f))}catch(t){console.log(t)}};
//# sourceMappingURL=index.js.map
