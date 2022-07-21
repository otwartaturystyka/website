exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/regions/rudnik/*`,
    toPath: `/pobierz`,
  })
}
