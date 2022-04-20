export const loader=()=>{
    const loader= document.createElement('img')
    loader.src= 'app/assets/ball-triangle.svg'
    loader.alt="cargando.."
    loader.classList.add('loader')

    return loader
}