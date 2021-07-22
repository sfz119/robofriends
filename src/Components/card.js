import React from 'react';

function Card({id, name, username, email}) {
    return (
        <div className="bg-black dib br3 ma3 pa3 grow tc">
            <img src={`https://robohash.org/${id}?200*200`} aria-hidden alt={`image of ${username}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
