import { Link } from "react-router-dom";


const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: ' 2px solid green',
        borderRadius: '8px',
        padding: '10px',
        
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Details</button> </Link>
        </div>
    );
};

export default User;