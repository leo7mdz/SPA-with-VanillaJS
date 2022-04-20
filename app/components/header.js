import { menu } from "./menu.js"
import { search } from "./searchForm.js"
import { title } from "./title.js"

export const header=()=>{
const header= document.createElement('header')
header.classList.add('header')
header.append(title())
header.append(menu())
header.append(search())


return header
}

