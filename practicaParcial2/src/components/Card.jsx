import React, { useState } from 'react'

const Card = ({title, description, likes, handleEvent}) => {

    const [countLikes, setCountLikes] = useState(likes)


    const handleLikes = e => {
        setCountLikes(prev => prev + 1)
        if (countLikes < 10) {
            handleEvent();
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <button onClick={handleLikes}>👍</button> <span>{countLikes >= 10 ? `Mas de 10 likes` : `Likes: ${countLikes}`}</span>
            </div>
        </article>
    )
}

export default Card