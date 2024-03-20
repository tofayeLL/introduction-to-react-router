import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h3>OPPSS !!!!</h3>
            <p>{error.error.message || error.statusText }</p>
            {
                error.status === 404 && <div> 
                    <h3>there is no data found </h3> 
                    <p> click go back to home </p>
                    <Link to={'/'}><button>Go Back</button></Link>
                     </div>
            }

            
        </div>
    );
};

export default ErrorPage;