import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();



    const postStyle = {
        border: ' 2px solid green',
        borderRadius: '8px',
        padding: '10px',

    }


    const handleShowDetails = (id) => {

        navigate(`/post/${id}`);

    }



    return (
        <div style={postStyle}>
            <h4>id: {id}</h4>
            <h3>Post title: {title} </h3>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Sow Details</button></Link>
            <br />
            <button onClick={() => handleShowDetails(id)}>click to show details</button>

        </div>
    );
};

export default Post;