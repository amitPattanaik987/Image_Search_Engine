const Searchform=document.getElementById("form");
const Searchbox=document.getElementById("item1");
const searchresult=document.getElementById("images");
const show_more_btn=document.getElementById("show-more-btn");


let keyword="";
let page=1;
let acess_key="kCNbt5VCA8UYBDCX-W0H__tKxHkylMooyc4uE4LyaHs";

async function searchimages(){
    keyword=Searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}1&query=${keyword}&client_id=${acess_key}`;

    const response=await fetch(url);
    const data=await response.json();
    
    const results=data.results;

    results.map((results)=>{
        const image=document.createElement("img");
        image.src=results.urls.small;
        const imglink=document.createElement("a");
        imglink.href=results.links.html;
        imglink.target="_blank";

        imglink.appendChild(image);
        searchresult.appendChild(imglink);
    })
    show_more_btn.style.display="block";
}

Searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimages();
})

show_more_btn.addEventListener("click",()=>{
    page++;
    searchimages();
})
