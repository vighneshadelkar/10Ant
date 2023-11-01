import React, { useContext, useEffect, useState } from "react";
import "./Conversations.css";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Conversations({ conversations, currentUser }) {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const [friend, setFriend] = useState({
    firstname: "",
    lastname: "",
  });

  useEffect(() => {
    // console.log(conversations)
    const friendId = conversations.members[1];
    setFriend([friendId]);
    // const getUser = async () => {
    //   const res = await fetch("http://localhost:8000/api/user/" + friendId);
    //   const result = await res.json();

    //   if (!res) {
    //     console.log("error");
    //   }

    //   if (res) {
    //     setFriend(result);
    //     console.log(result)
    //   }
    // };
    // getUser();
  }, [currentUser, conversations]);

  return (
    <div
      className="conversations"
      onClick={() => {
        navigate({
          pathname: "/chat",
          search: `?owner_pkey=${friend[0]}`,
        });
      }}
    >
      <div className="conversationsWrapper">
        <span>{friend[0]}</span>
      </div>
    </div>
  );
}
