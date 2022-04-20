import { app } from "./App.js";
import api from "./helpers/wp_api.js"

document.addEventListener("DOMContentLoaded", app);

window.addEventListener("hashchange",()=>{
    api.page= 1
    app()
} );
