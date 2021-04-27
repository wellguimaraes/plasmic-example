
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['uxghh7Jr8fCv7BzYM4RdvS'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  