import React from 'react'
import PropTypes from 'prop-types';
export default function post({id,title,deletePost}) {
    return (
        <div className="Post">
            <button className="Post__delete" onClick={()=>deletePost(id)}>X</button>
            <div className="Post__title">
                {title}
            </div>
            <img className="Post__images" src={`https://source.unsplash.com/random?sig=${id}`} alt=""/>
            
        </div>
    )
}

post.prototype ={
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    deletePost:PropTypes.func.isRequired
}