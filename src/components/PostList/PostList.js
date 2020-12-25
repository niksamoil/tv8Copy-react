import React, {useEffect, useState} from 'react';
import PostsItem from '../PostsItem';
import './PostList.css';

const PostList = ({posts}) => {

    return (
        <div className='wrapper'>
            {
                posts.map((post) => {
                    return (
                        <PostsItem post={post} key={post.id} />
                    );
                })
            }
        </div>
    );
};


function PostListContainer() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://tv8.md/wp-json/wp/v2/posts/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

   

    if(error) {
        return <div>Eroare: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <PostList posts={items} />
        );
    }
};

export default PostListContainer;



