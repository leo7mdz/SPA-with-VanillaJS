import { cardSearch } from "../components/cardSearch.js";
import { postCard } from "../components/PostCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js"

export const infiniteScroll =async () => {
  let query = localStorage.getItem("wpSearch"),
    apiURL,
    component;

  window.addEventListener("scroll", async(e) => {
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement,
    {hash}=window.location

    if (scrollTop + clientHeight >= scrollHeight) {
        api.page++
        if (hash === "#/" || !hash) {
            apiURL= `${api.POSTS}&page=${api.page}`,
            component= postCard
        }else if(hash.includes("#/search")) {
          apiURL= `${api.SEARCH}${query}&page=${api.page}`,
          component= cardSearch
        }else{
            return false
        }
        document.querySelector('.loader').style.display='block'
        await ajax({
           url:apiURL,
           cbSuccess(posts){
               let html='';
               posts.forEach((post=>{
                   html+=component(post)
               }))
               document.getElementById('main').insertAdjacentHTML('beforeend',html)
           }
       }) 
    }

  });
};
