import React, { useContext } from "react";
import Header from "../body/header/Header";
import Footer from "../body/footer/Footer";
import "./Profile.css";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";
import Issue from "./Issue";
import { UserContext } from "../../context/UserProvider";



export default function Profile() {
  const {
    user: { username },
    addIssue,
    issues,
  } = useContext(UserContext);
  
  return (
    <div className="color_bg">
      <Header />
      <main role="main">
        <section className="prof-panel">
          <h1>Welcome @{username}!</h1>
          <h3>Add a topic</h3>
          <IssueForm addIssue={addIssue} />
          <h3>Your topics</h3>
          <IssueList Issues={issues} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

// import React from "react";
// import Header from "../body/header/Header";
// import Footer from "../body/footer/Footer";
// import Post from "../feed/Post";
// import "./Profile.css";

// const Profile = (props) => {
//   const { username } = props;

//   return (
//     <div className="color_bg">
//       <Header />
//       <main role="main">
//         <section className="prof-panel">
//           <h2>Welcome {username}!</h2>
//           <div className="prof-content"></div>
//         </section>
//         <Post />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Profile;