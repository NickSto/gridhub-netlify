// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const slugify = string => string.toLowerCase().replace(/[^\w\d -]/g, '').replace(/[ -]+/g,'-');
const ensurePrefix = (string, char) => string.startsWith(char) ? string : char+string;
function rmPrefix(string, prefix, keep) {
  let output = string;
  if (string.startsWith(prefix)) {
    output = string.slice(prefix.length);
  }
  if (typeof keep !== 'undefined') {
    output = ensurePrefix(output, keep);
  }
  return output;
}

module.exports = {
  siteName: 'Galaxy Community Hub: The Squeakquel',
  siteDescription: 'Galaxy Community Hub - Gridsome version',
  templates: {
    Post: node => rmPrefix(node.path, "/content/posts/", "/"),
    Singlet: node => rmPrefix(node.path, "/content/singlets/", "/"),
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/index.md',
        typeName: 'Post',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/singlets/**/index.md',
        typeName: 'Singlet',
      }
    },
  ],
  transformers: {
    // Add markdown support to all filesystem sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [],
    }
  },
}
