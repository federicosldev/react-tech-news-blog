function Card (props) {
    return (
        <div className="card">
            <img src={props.item.img} alt="Imagen destacada de la noticias" />
            <h3>{props.item.title}</h3>
            <div className="card--category">{props.item.category}</div>
            <p>{props.item.shortDescription}</p>
            <a href={props.item.link}>Leer más</a>
        </div>
    )
}
// const NewsData = PostData.map((item) => {
//     return (
//       <Card
//         key={item.id}
//         item={item}
//     />
//     )
//   }
//   )
export default Card