export const search = () => {
  const form = document.createElement("form"),
    input = document.createElement("input");

  form.classList.add("search-form");
  input.name = "search";
  input.type = "search";
  input.placeholder = "ingrese busqueda";
  input.autocomplete= 'off'

  form.append(input);

  if(location.hash.includes('#/search')){
    input.value= localStorage.getItem('wpSearch')
  }

  document.addEventListener('search',e=>{
    if(!e.target.matches('form [type="search"]')) return false
    if(!e.target.value) localStorage.removeItem0('wpSearch')
  })

  document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();
    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return form;
};
