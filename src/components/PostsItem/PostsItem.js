import React, {useState, useEffect} from 'react';
import './PostsItem.css';


function PostsItem({id}) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch(`https://tv8.md/wp-json/wp/v2/posts/${id}`)
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
    }, [id]);

    console.log(items);

    return (

        <div>

        </div>
    );
}

export default PostsItem;
