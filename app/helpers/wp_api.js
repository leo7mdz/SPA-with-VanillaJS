const NAME = "css-tricks",
  DOMAIN = `https://${NAME}.com`,
  PAGE = `${DOMAIN}/wp-json`,
  WP_API = `${PAGE}/wp/v2`,
  PER_PAGE= 6,

  POSTS = `${WP_API}/posts?_embed&per_page=${PER_PAGE}`,
  POST = `${WP_API}/posts`,
  SEARCH = `${WP_API}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1

export default {
  NAME,
  DOMAIN,
  PAGE,
  WP_API,
  PER_PAGE,
  page,
  POSTS,
  POST,
  SEARCH,
};

 