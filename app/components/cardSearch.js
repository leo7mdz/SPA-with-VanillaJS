export const cardSearch =(props)=>{
    let{_embedded,id,title}= props

 return `
  <section class="post-card">
   <h2>${title}</h2>
   <p><a href="#/${_embedded.self[0].slug}" data-id="${id}">Ver publicación</a></p>
 </section>
 `   
}