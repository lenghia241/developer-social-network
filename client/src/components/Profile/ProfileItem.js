import React from "react";

const ProfileItem = () => {
  return (
    // <div className="card hoverable grey mg-10">
    //   <div className="waves-effect waves-block waves-light">
    //     <img
    //       className="activator profile-avatar"
    //       src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png"
    //       alt="avatar"
    //     />
    //   </div>
    //   <div className="profile-info">
    //     <h1 className="card-title activator grey-text text-darken-4">
    //       John Doe
    //     </h1>
    //     <p>Developer at Facebook</p>
    //     <p>Hanoi, Vietnam</p>
    //     <a className="waves-effect waves-light btn z-depth-2">View Profile</a>
    //   </div>
    //   <i className="material-icons right activator">more_vert</i>
    //   <div className="card-reveal">
    //     <span className="card-title black-text text-darken-4">
    //       Skill Set<i className="material-icons right">close</i>
    //     </span>
    //     <ul className="collection  black-text ">
    //       <li className="collection-item">HTML</li>
    //       <li className="collection-item">CSS</li>
    //       <li className="collection-item">Javascript</li>
    //       <li className="collection-item">C#</li>
    //     </ul>
    //   </div>
    // </div>
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator responsive-img"
            src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png"
            alt="profile avatar"
          />
          <span className="card-title light-blue-text accent-2 activator">
            <h1>John Doe</h1>
          </span>
        </div>
        <div className="card-content">
          <h1 className="card-title activator grey-text text-darken-4">
            John Doe
          </h1>
          <p>Developer at Facebook</p>
          <p>Helsinki, Finland</p>
          <div style={{ marginTop: "20px" }}>
            <a className="waves-effect waves-light btn halfway-fab z-depth-2">
              View Profile
            </a>
            <a
              style={{ marginLeft: "10px" }}
              className="waves-effect waves-light btn halfway-fab activator red z-depth-2"
            >
              Show Skills
            </a>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title black-text text-darken-4">
            Skill Set<i className="material-icons right">close</i>
          </span>
          <ul className="collection  black-text ">
            <li className="collection-item">HTML</li>
            <li className="collection-item">CSS</li>
            <li className="collection-item">Javascript</li>
            <li className="collection-item">C#</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
