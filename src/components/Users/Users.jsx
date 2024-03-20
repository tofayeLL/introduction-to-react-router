import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>All the Users are well mannered</p>

            <div className="users-container">
            {
                users.map((user, index) => <User key={index} user={user}></User> )
            }
            </div>
        </div>
    );
};

export default Users;