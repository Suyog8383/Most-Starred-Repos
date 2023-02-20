import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./ProfileSlice";
function Profile() {
  const profileState = useSelector((state) => state.profiles);
  const dispatch = useDispatch();

  console.log({ profileState });

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <div>
      <h1>Most Starred Repos</h1>
    </div>
  );
}

export default Profile;
