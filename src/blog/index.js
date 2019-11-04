const article = (slug) => {
    const article = {
        loaded: false
    }
    import('./' + slug + '.md').then(result => {
        const component = result.default
        const { title, description, image } = component.meta

        article.slug = slug
        article.component = component
        article.title = title
        article.description = description
        article.image = image
        article.loaded = true
    })

    return article
}

const articles = [
    article('dkd-shirts'),
    article('php-docker-tutorial'),
]

export default articles

export const highlight = [
    article('php-docker-tutorial'),
    article('dkd-shirts'),
]
