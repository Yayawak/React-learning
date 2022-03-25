import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutPage from "./LayoutPage";

function PagePost () {
    const [ post, setPost ] = useState({});
    const [ comments, setComments ] = useState([]);
    // This parameter is from url link on your page 
    // ex: localhost:3000/post/3   so "3" is the param
    const { postId } = useParams();

    async function getPost(thePostId) {
        const url = `https://jsonplaceholder.typicode.com/posts/${thePostId}/`;
        const response = await fetch(url);
        const responseJson = await response.json(url);
        setPost(responseJson);
    }

    async function getComments(thePostId) {
        const url = `https://jsonplaceholder.typicode.com/posts/${thePostId}/comments`;
        const response = await fetch(url);
        const responseJson = await response.json(url);
        setComments(responseJson);
    }

    useEffect(() => {
        getPost(postId);
        getComments(postId);
    }, [postId]);

    const commentElements = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <h4>{comment.email}</h4>
                <p>{comment.body}</p>
                <hr />
            </div>
        );
    });

    return (
        <LayoutPage>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
            <h4>{comments.length} comments</h4>
            {commentElements}
        </LayoutPage>
    )
}

export default PagePost;

//https://jsonplaceholder.typicode.com/posts/1