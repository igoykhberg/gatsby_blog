/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require('gatsby-source-filesystem')
const ARTICLES = 'articles'
const TAGS = 'tags'
const CATEGORY = 'category'

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    let allTags = [];
    let allCategories = [];

    const calculateStoryPath = (order, slug) => {
        return(
            order > 0
            ? `${slug}/part${order}`
            : `${slug}`
        )
    }

    const isUnique = (currentValue, index, self) => {
        return self.indexOf(currentValue) === index;
    }

    const createTags = () => {
        allTags = allTags.filter(isUnique);
        allTags.map(async tag => {
            let articlesByTag = await graphql(`query TagsSortedDESC {
                allMarkdownRemark(filter: {frontmatter: {type: {}, tags: {eq: "${tag}"}}}, sort: {fields: frontmatter___serial, order: DESC}) {
                  edges {
                    node {
                      id
                      frontmatter {
                        tags
                        serial
                        title
                        slug
                        order
                        category
                      }
                    }
                  }
                }
              }
            `)
            let _edges = articlesByTag.data.allMarkdownRemark.edges
            let _path = `${TAGS}/${tag}`
            createPage({
                path: _path,
                component: require.resolve('./src/templates/template-blog-hashtag'),
                context: { _edges },
            })
        })
    }

    const createCategories = () => {
        allCategories = allCategories.filter(isUnique)
        allCategories.map(async category => {
            let articlesByCategory = await graphql(`query CategorySortedDESC {
                allMarkdownRemark(filter: {frontmatter: {type: {}, tags: {}, category: {eq: "${category}"}}}, sort: {fields: frontmatter___serial, order: DESC}) {
                  edges {
                    node {
                      id
                      frontmatter {
                        tags
                        serial
                        title
                        slug
                        order
                        category
                      }
                      html
                    }
                  }
                }
              }
            `)
            let _edges = articlesByCategory.data.allMarkdownRemark.edges
            let _path = `${CATEGORY}/${category}`
            createPage({
                path: _path,
                component: require.resolve('./src/templates/template-blog-category'),
                context: { _edges }
            })
        })
    }

    const createArticles = async () => {
        const articles = await graphql(`query article {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "article"}}}) {
              edges {
                node {
                  id
                  frontmatter {
                          serial
                          slug
                          type
                          order
                          title
                          tags
                          category
                  }
                  html
                }
              }
            }
          }
        `)

        articles.data.allMarkdownRemark.edges.forEach(({ node }, key, arr) => {
            const { order, slug, tags, category } = node.frontmatter;
            allTags = allTags.concat(tags);
            allCategories.push(category);
            const path = `${ARTICLES}/${calculateStoryPath(order,slug)}`
            createPage({
                path: path,
                component: require.resolve('./src/templates/template-blog-post'),
                context: {
                    node,
                    pagePath: path,
                    order: order,
                    slug: slug
                }
            })
        })
    }

    await createArticles()
    createTags()
    createCategories()

} /** end of createPages */