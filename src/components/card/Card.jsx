import './Card.sass'

const Card = (props) => {
    return(
        <article className="card">
            <div className="card__top">
                <div>
                    <img src={ require("../../images/" + props.img) } alt={ props.name } />
                </div>
                <div className="card__userInfo">
                    <h2 className='card__userInfo__name'>{ props.name }</h2>
                    <p className='card__userInfo__status'>{ props.status }</p>
                </div>
            </div>
            <p className="card__title">{ props.title }</p>
            <p className="card__description">{ props.description }</p>
        </article>
    )
}

export default Card