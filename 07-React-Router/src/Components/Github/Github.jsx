import React, { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Syed-Saad1")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <div className="text-4xl font-bold bg-blue-700 p-4 m-4 text-center ">
        Github Follower : {data.followers}
        <img
          className="mt-6 mx-auto"
          src={data.avatar_url}
          alt="Git-Pic"
          width={300}
        />
        <h1 className="mt-3">UserName : {data.name}</h1>
        <h1 className="mt-3">Bio : {data.bio}</h1>
      </div>
    </>
  );
}
export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Syed-Saad1");
  return response.json();
};
