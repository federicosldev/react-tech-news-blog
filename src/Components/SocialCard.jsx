function SocialCard () {
    return (
        <aside className="socialCard">
            <div className="socialCard--imgs">
                <img className="socialCard--imgs-lateral" src="/assets/social1.svg" alt="imagen de prebas" />
                <img className="socialCard--imgs-central" src="/assets/social2.svg" alt="imagen de pruebas" />
                <img className="socialCard--imgs-lateral" src="/assets/social1.svg" alt="imagen de prebas" />
            </div>
            <div className="socialCard--follow">
                <h4>Federico Sánchez</h4>
                <button href="#">+ Follow</button>
            </div>
            <p>Descubre contenido de calidad sobre desarrollo frontend y mantente al tanto de todas las últimas novedades en las que estoy trabajando 🤗</p>
        </aside>
    )
}

export default SocialCard