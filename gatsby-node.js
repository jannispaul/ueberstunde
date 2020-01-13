const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const episode = path.resolve("./src/templates/episode.js")
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  title
                  id
                  slug
                  image {
                    localFile {
                      name
                      ext
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const episodes = result.data.allContentfulPost.edges
        episodes.forEach((item, index) => {
          createPage({
            path: `/${item.node.slug}/`,
            component: episode,
            context: {
              slug: item.node.slug,
              filename: `${item.node.image.localFile.name}${item.node.image.localFile.ext}`,
            },
          })
        })
      })
    )
  })
}
