function NewsletterForm () {
    return (
        <aside className="newsletterCard">
            <h3>¡Suscríbete a la newsletter!</h3>
            <p>Recibirás artículos de calidad sobre frontend y todas las novedades en las que vaya trabajando. ¡Nada de spam 🙅‍♂️!</p>
            <form className="newsletterCard--form">
                <input type="email" name="email" placeholder="Tu correo electrónico" required></input>
                <input type="submit" value="Suscribirse"></input>
            </form>
        </aside>
    )
}

export default NewsletterForm