import {
  Box,
  Button,
  Collapse,
  Container,
  CssBaseline,
  LinearProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
      {profileState.isFetching && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}

      {profileState.profiles.map((item, index) => {
        return (
          <>
            <CssBaseline />
            <Container maxWidth="sm" style={{ maxWidth: "1210px" }}>
              <div style={{ border: "2px solid", display: "flex" }} key={index}>
                <img
                  style={{ padding: "17px" }}
                  width="180"
                  height="180"
                  src={item.owner.avatar_url}
                  alt=""
                />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2>{item.name}</h2>
                  <h4>{item.description}</h4>
                  <Button
                    variant="outlined"
                    href="#outlined-buttons"
                    style={{ width: "50px" }}
                  >
                    {item.stargazers_count}
                  </Button>
                  <p>
                    Last pushed at <b>{item.pushed_at}</b> by
                    <b>{item.full_name}</b>.
                  </p>
                </div>
              </div>
            </Container>
          </>
        );
      })}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button>Next</Button>
      </div>
    </div>
  );
}

export default Profile;
