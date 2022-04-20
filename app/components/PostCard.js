import { app } from "../App.js";

export const postCard = (props) => {
  let { date, id, title, slug, _embedded } = props;
  let dateFormat = new Date(date).toLocaleString(),
    urlPoster = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0]["source_url"]
      : "app/assets/favicon-32x32.png";

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) {
      return false
    }
     localStorage.setItem("wpID", e.target.dataset.id);
  });

  return `
<article class="post-card">
 <img src="${urlPoster}">
 <h2>${title.rendered}</h2>
 <p>
   <time date-time="${date}">${dateFormat}</time>
   <a href='#/${slug}' data-id="${id}">ir a la publicacion</a>
</p>
</article>
   `;
};
