import data from 'json/paths.json'

export default async function sitemap() {

    const paths = data['hrefs'].map((href: string) => ({
        url: `${process.env.NEXT_PUBLIC_HOST}/${href}`,
        lastModified: new Date().toISOString()
    }))
    return [...paths]
}