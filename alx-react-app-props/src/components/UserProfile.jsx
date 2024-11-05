import React,{useContext} from "react";
import userContext from './UserContext';
const UserProfile = () => {
  let userData =useContext(userContext);
    return (
      <div>
        <h2>{userData.name}</h2>
        <p>Age: {userData.age}</p>
        <p>Bio: {userData.bio}</p>
      </div>
    );
  };
export default UserProfile;