import { useLoaderData } from "react-router-dom";



const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;

    return (
        <div>
            <h2>post Id: {id}</h2>
            <h3>{title} </h3>
            <p><small>{body}</small></p>

        </div>
    );
};

export default PostDetails;