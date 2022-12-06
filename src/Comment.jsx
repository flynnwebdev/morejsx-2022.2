import React from "react"

const defaultAvatar = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'

const Comment = ({ avatar, name, date, comment, }) => {
    return (
        <article>
            <header>
                {avatar ? <img src={avatar} alt={`Avatar image ${name ? `of ${name}` : ''}`} /> : ''}
                <p>{name || 'Unknown'}</p>
                <time>{date}</time>
            </header>
            <p>{comment}</p>
        </article>
    )
}

export default Comment
