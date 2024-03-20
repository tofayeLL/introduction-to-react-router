import { useLoaderData, useNavigate, useParams } from "react-router-dom";



const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    


    // -------------use params hook uses-----
    // const params = useParams();
     // console.log(params);
    const {postId} = useParams();
    console.log(postId);
    // ---------------------------------
    

    const navigate = useNavigate();
   
   

    const handleGoBack = () => {
        navigate(-1)
      
    }

    return (
        <div>
            <h2>post Id: {id}</h2>
            <h3>{title} </h3>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>go back</button>

        </div>
    );
};

export default PostDetails;