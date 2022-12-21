// import Courses ,Title and Usercard here

import Courses from "./Components/Courses";
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";

// keep a user object with mentioned properties and pass down to UserCard as prop
export default function App() {
  return <div>

    <Title/>
    <UserCard name="Debu Haldar"
  avatar="https://avatars.githubusercontent.com/u/99647439?v=4"
  posts="123"
  followers="321"
  address="61, green avenue" />

  <Courses/>
  </div>;
}
