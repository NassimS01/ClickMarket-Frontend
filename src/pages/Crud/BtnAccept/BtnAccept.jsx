import React from "react";
import { BiCheck, BiX } from "react-icons/bi";

const BtnAccept = ({ user, handleActive }) => {
  return (
    <>
      {user.active == true ? (
        <BiX
          onClick={() => handleActive(user, user.active)}
          size="25px"
          color="var(--colorPrimary)"
        />
      ) : (
        <BiCheck
          onClick={() => handleActive(user, user.active)}
          size="25px"
          color="var(--colorSuccess)"
        />
      )}
    </>
  );
};

export default BtnAccept;
