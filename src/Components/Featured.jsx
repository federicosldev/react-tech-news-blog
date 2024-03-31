import FeaturedPost from "./FeaturedPost"
import NewsletterForm from "./NewsletterForm"

function Featured () {
    return (
        <section className="featuredSection">
            <FeaturedPost/>
            <NewsletterForm/>
        </section>
    )
}

export default Featured