import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();

    return (
        <div>
            <h2>posts: {posts.length}</h2>
            <div className="users-container">
                {
                    posts.map((post, index) => <Post
                        key={index}
                        post={post}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;