const title = 'Adin Yahya – Developer, writer, creator.'
const description =
    'Personal portfolio and resume website for Adin Yahya, a developer, writer, and creator.'

const SEO = {
    title,
    description,
    canonical: 'https://adinyahya.com',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://adinyahya.com',
        title,
        description,
        images: [
            {
                url: 'https://adinyahya.com/images/logoadin.png',
                alt: title
            }
        ]
    },
    twitter: {
        handle: '@bjmncrlsn',   
        site: '@bjmncrlsn',
        cardType: 'summary_large_image'
    }
}

export default SEO