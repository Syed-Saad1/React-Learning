import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <h1 className="bg-blue-700 text-3xl font-bold text-center p-4">
        User : {userid}
      </h1>
    </>
  );
}
export default User;
