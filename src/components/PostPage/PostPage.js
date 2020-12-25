import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './PostPage.css';

function PostPage(props) {
    const [page, setPage] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const { match: {params : {id}}} = props;
    console.log(page);

    useEffect(() => {
        
        fetch(`https://tv8.md/wp-json/wp/v2/posts/${id}`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPage(result);
                console.log(result);

            },
            (error) => {
                setIsLoaded(true);
                console.log(error);
            }
        );
    }, [id]);


    console.log(page);

    if(isLoaded) {
        return (
            <>
                <Link to='/'>
                    Go back
                </Link>
                <h1>
                    {/* {page.title.rendered} */}
                </h1>
                <div></div>
            </>
        );
    }

    return <h3>Loading...</h3>;
}

export default PostPage;
