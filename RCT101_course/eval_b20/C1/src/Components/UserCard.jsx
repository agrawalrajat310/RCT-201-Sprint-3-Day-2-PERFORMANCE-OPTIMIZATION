// your code goes here

import { useState } from "react";

// do a default export
function UserCard(props){
const {name,
  avatar,
  posts,
  followers,
  address}=props;

  const [state, setState]=useState("follow");

  const handleClick=()=>{
    state==="following"? setState("follow"): setState("following")
  }
  return(
    <div style={{display: "flex", gap:"20px"}}>
      <img src={avatar} alt={name} style={{borderRadius:"50%", height: "200px"}}/>
     <div>
      <div>
      <h2 data-testid = "user_name">{name}</h2>
<p data-testid = "user_address">{address}</p>
      </div>

<button onClick={handleClick}>{state}</button>
     <div style={{display: "flex", gap:"20px"}}>
       <div>
       <h3>Posts</h3>
<p data-testid = "user_posts">{posts}</p>
       </div>
       <div>
       <h3>Followers</h3>
<p data-testid = "user_followers">{followers}</p>
       </div>
     </div>

     </div>

    </div>
  )
}
export default UserCard;