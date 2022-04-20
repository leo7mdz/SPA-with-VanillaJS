export const cardPost = (props) => {
  let{title,date,content}= props ,
  localTime= new Date(date).toLocaleString()
  return `
    <article class= 'post-page'>
    <header>
    <h2>${title.rendered}
    </h2>
    </header>
    <time date-time="${date}">${localTime}</time>
    <section>${content.rendered}</section>
    </article>
    `;
};
