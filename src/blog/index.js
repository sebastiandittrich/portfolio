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
    article('first-article'),
]

export default articles

export const highlight = [
    article('first-article'),
]
