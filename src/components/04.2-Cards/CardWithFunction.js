import React from 'react'

const CardWithFunction = props => {
    return (
        <div>
            <div className="card">
                <img src={props.img} alt={props.img}/>
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
                <div className="links">
                    <a href={props.firstLink}>SHARE</a> 
                    <a href={props.secondLink}>EXPLORE</a> 
                </div>
            </div>
        </div>
    )
}

export default CardWithFunction
