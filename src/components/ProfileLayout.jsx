import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./ProfileSlice";
function Profile() {
  const profileState = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  console.log("layout", profileState);

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Most Starred Repos</h1>
      </div>
      {profileState.isFetching && "Loading....."}

      {profileState.profiles.map((item, index) => {
        return (
          <div
            className="container"
            style={{ border: "2px solid", display: "flex" }}
            key={index}
          >
            <img width="100" height="100" src={item.owner.avatar_url} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>{item.name}</h2>
              <h4>{item.description}</h4>
              <button style={{ width: "50px" }}>{item.stargazers_count}</button>
              <button style={{ width: "50px" }}>{item.issues_url}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
