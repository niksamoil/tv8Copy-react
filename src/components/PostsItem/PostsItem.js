import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './PostsItem.css';


const PostsItem =({post}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState([]);


    useEffect(() => {
        const {featured_media} = post;

        const getImageUrl = fetch(`https://tv8.md/wp-json/wp/v2/media/${featured_media}`)
            .then(res => res.json())
            .then((result) => result);

            Promise.all([getImageUrl]).then(res => {
                setImageUrl(res[0].media_details.sizes.medium.source_url);
                setIsLoaded(true);
            });
    }, [post]);

    const {title : {rendered: title}, id} = post;

    if(isLoaded) {
        return (
            <>
                <Link to={`/post/${id}`}>
                    <div className="post-list" >
                        <article>
                            <header>
                                <div className='image-holder'>
                                    <img src={imageUrl} alt={title} />
                                </div>
                            </header>
                            <section>
                                <h3>{title}</h3>
                            </section>
                        </article>
                    </div>
                </Link>
            </>
        );
    }

    return null;
   
};

export default PostsItem;
//item.media_details.sizes.medium.source_url