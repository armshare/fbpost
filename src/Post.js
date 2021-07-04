import React from 'react'
import PropTypes from 'prop-types'



function Post({ id, title, deletePost }) {
    return (

        <div className="Post">
              <div className="Post__delete" onClick={()=>{deletePost(id)}}>x</div>
           
            <div className="Post__title">{title}</div>
           <img
                src={`https://source.unsplash.com/random?sig=${id}`}
                className="Post__image"
                alt={title}
            />
        </div>
    )
}

Post.propType = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost : PropTypes.func.isRequired
}

export default Post