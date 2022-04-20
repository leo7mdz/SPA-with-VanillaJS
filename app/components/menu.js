export const menu = () => {
  const menu = document.createElement("nav");
  menu.innerHTML = `
        <ul class='menu'>
        <li><a href="#/">inicio</a></li>
        <li><a href="#/search" href="">busqueda</a></li>
        <li><a href="#/formulario">formulario</a></li>
        </ul>
    `;
  return menu;
};
