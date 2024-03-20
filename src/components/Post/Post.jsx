import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    const postStyle = {
        border: ' 2px solid green',
        borderRadius: '8px',
        padding: '10px',
        
    }
    return (
        <div style={postStyle}>
            <h4>id: {id}</h4>
            <h3>Post title: {title} </h3>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Sow Details</button></Link>
            
        </div>
    );
};

export default Post;