import{a as y,i as n,S as d}from"./assets/vendor-DEenWwFD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=r=>`
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
    `,m=r=>{const a=new URLSearchParams({key:"48282241-c94e9d668c7a92092d53abf55",q:r,per_page:"9",image_type:"photo",orientation:"horizontal",safesearch:"true"});return y.get(`https://pixabay.com/api/?${a}`)},u=document.querySelector(".search-form"),c=document.querySelector(".gallery"),s=document.querySelector(".loader");console.dir(s);s.style.display="none";const g=async r=>{try{r.preventDefault();const a=r.currentTarget.elements.search_input.value.trim();if(a===""){n.warning({title:"Caution",message:"You forgot to full fill searching area"});return}s.style.display="inline-block";const{data:o}=await m(a);if(s.style.display="none",o.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",u.reset();return}const l=o.hits.map(t=>p(t)).join("");c.innerHTML=l,new d(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}catch(a){s.style.display="none",err.message==="404"&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(a)}};u.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
