import React, {useEffect, useState} from 'react';
import { Link, useParams  } from 'react-router-dom';
import './PostPage.css';

function PostPage(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});
    const [mediaId, setMediaId] = useState();

    const { match: {params : {id}}} = props;

    useEffect(() => {

        const getPostInfo = fetch(`https://tv8.md/wp-json/wp/v2/posts/${id}`)
        .then(res => res.json())
        .then((result) => result);
        console.log(getPostInfo);

        const getMediaInfo = fetch(`https://tv8.md/wp-json/wp/v2/media/${mediaId}`)
        .then(res => res.json())
        .then((result) => result);


        Promise.all([getPostInfo, getMediaInfo]).then(res => {
            setMediaId(res[0].featured_media);
            setData({
                title: res[0].title.rendered,
                excerpt: res[0].excerpt.rendered,
                content: res[0].content.rendered,
                imgSrc: res[1].source_url
            });
            setIsLoaded(true);
        });

        return () => {
            console.log('clear');
        };
    }, [id, mediaId]);

    console.log(data);
 
    if(isLoaded) {
        return (
            <>
                <Link to='/'>
                    Go back
                </Link>
                <h1>
                    {data.title}
                </h1>
                <div>
                    <img className='featured-image' src={data.imgSrc} alt={data.title}/>
                </div>
                <div className='content' dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </>
        );
    }

    return <h3>Loading...</h3>;
}

export default PostPage;
