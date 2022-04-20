import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { postCard } from "./PostCard.js";
import { cardPost } from "./post.js";
import { cardSearch } from "./cardSearch.js";
import { contactForm } from "./contactForm.js";

export const router = async () => {
  let { hash } = location;
  console.log(hash);

  document.getElementById("main").innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess(posts) {
        let html = "";

        posts.forEach((post) => {
          //console.log(post);
          html += postCard(post);
        });

        document.getElementById("main").innerHTML = html;
      },
    });
  } else if (hash.includes("#/formulario")) {
    document.getElementById("main").appendChild(contactForm());
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");
    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess(posts) {
        let html = "";

        if (posts.length === 0) {
          html = `<p class=error >No se ah encontrado la busqueda relacionada con <mark>${query}</mark></p>`;
          document.getElementById("main").innerHTML = html;
        } else {
          posts.forEach((post) => {
            //console.log(post);
            html += cardSearch(post);
          });

          document.getElementById("main").innerHTML = html;
        }
      },
    });
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpID")}`,
      cbSuccess(post) {
        //console.log(post);
        document.getElementById("main").innerHTML = ` ${cardPost(post)}`;
      },
    });
  }
  document.querySelector(".loader").style.display = "none";
};
