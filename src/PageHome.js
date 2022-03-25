import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutPage from "./LayoutPage";

function PageHome () {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const responseJson = await response.json();
        setPosts(responseJson);
    }


    useEffect(() => {
        getPosts();
    }, []);

    const postElements = posts.map(post => {
        return (
            <div key={post.id}>
                <h4>
                    <Link to={`/post/${post.id}`}>
                        {post.title}
                    </Link>
                </h4>
                <p>
                    {post.body}
                    <hr />
                </p>
            </div>
        )
    })
    return (
        <LayoutPage>
            <h2>Home หน้าแรก</h2>
            {postElements}
        </LayoutPage>
    )
}

export default PageHome;

