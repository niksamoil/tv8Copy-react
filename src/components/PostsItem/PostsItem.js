import React from 'react';
import './PostsItem.css';


const PostsItem =({post, image}) => {
    const {title : {rendered: title}} = post;

    return (
        <div className="post-list" >
            <article>
                <header>
                    <div className='image-holder'>
                        <img src='' alt="" />
                    </div>
                </header>
                <section>
                    <h3>{title}</h3>
                </section>
            </article>
        </div>
    );
};

export default PostsItem;
//item.media_details.sizes.medium.source_url