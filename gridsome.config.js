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
function filterIndices(level, path) {
  let fields = path.split("/");
  if (fields.length === level+2 && fields[0] === "" && fields[level+1] === "") {
    // It's an index page.
    return path+"__index__";
  } else {
    return path;
  }
}

module.exports = {
  siteName: 'Galaxy Community Hub: The Squeakquel',
  siteDescription: 'All about Galaxy and its community',
  templates: {
    Post: node => filterIndices(1, rmPrefix(node.path, "/content/posts/", "/")),
    Standalone: node => filterIndices(0, rmPrefix(node.path, "/content/standalone/", "/")),
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
        path: 'content/standalone/**/index.md',
        typeName: 'Standalone',
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
