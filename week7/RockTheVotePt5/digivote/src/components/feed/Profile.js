import React from "react";
import Header from "../body/header/Header";
import { UserContext } from "../../context/UserProvider.js";
import Footer from "../body/footer/Footer";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";
import "./Profile.css";

export default function Profile() {
  return (
    <UserContext.Consumer>
      {(context) => (
        <div className="color_bg">
          <Header />
          <main role="main">
            <section className="prof-panel">
              <h2>Welcome {context.user.username}!</h2>
              <IssueForm addIssue={context.addIssue} />
              <h3>Your topics</h3>
            </section>
              <IssueList issues={context.issues} />
          </main>
          <Footer />
        </div>
      )}
    </UserContext.Consumer>
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
