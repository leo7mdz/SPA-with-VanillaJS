import { header } from "./components/header.js";
import { loader } from "./components/loader.js";
import { main } from "./components/main.js";
import { router } from "./components/Router.js";
import { infiniteScroll } from "./helpers/infiniteScroll.js"; 

export const app = () => {
  const root = document.getElementById("root");
   root.innerHTML = null; 
  root.append(header());
  root.append(main());
  root.append(loader());
  router();
   infiniteScroll() 
};
