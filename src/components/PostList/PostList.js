import React, {useEffect, useState} from 'react';
import './PostList.css';

function PostList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [errorImagesLoad, setErrorImagesLoad] = useState(null);
    const [isLoadedImages, setIsLoadedImages] = useState(false);
    const [images, setImages] = useState();
  

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

    useEffect(() => {
        fetch("https://tv8.md/wp-json/wp/v2/media/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoadedImages(true);
                    setImages(result);
                },
                (error) => {
                    setIsLoadedImages(true);
                    setErrorImagesLoad(error);
                }
            );
    }, []);

    console.log(images);
    console.log(items);

    if(error || errorImagesLoad) {
        return <div>Eroare: {error.message}</div>;
    } else if (!isLoaded || !isLoadedImages) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                {items.map((item) => {
                    return (
                        <div className="post-list" key={item.id}>
                            <article>
                                <header>
                                    <div className='image-holder'>
                                        <img src="https://tv8.md/wp-content/uploads/2020/12/Снимокfgfgfgfgfgf-300x157.jpg" alt={item.slug} />
                                    </div>

                                </header>
                                <section>
                                    <h3>{item.title.rendered}</h3>
                                </section>
                            </article>
                        </div>
                    );
                })}
            </>
        );
    }

   
}

export default PostList;
