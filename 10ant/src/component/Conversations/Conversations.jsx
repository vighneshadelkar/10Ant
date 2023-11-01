import React, { useContext, useEffect, useState } from "react";
import "./Conversations.css";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Conversations() {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const [friendsWithConversations, setFriendsWithConversations] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        let requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const res = await fetch(
          `http://localhost:9000/conversation/${user.user_id}`,
          requestOptions
        );

        if (res.ok) {
          const result = await res.json();
          setFriendsWithConversations(result);
        } else {
          console.error("Error fetching conversations:", res.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const getUsers = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/user/`);
        const result = await res.json();
        setUsers(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getConversations();
    getUsers();
  }, [user.user_id]);

  return (
    <div className="conversations">
      <div className="conversationsWrapper">
        {friendsWithConversations.map((convo) => {
          const friendId = convo.members.find((m) => m != user.user_id);
          const friend = users.find((user) => user.id == friendId);
          console.log(friend)
          return (
            <span
              key={convo._id}
              onClick={() => {
                navigate({
                  pathname: "/chat",
                  search: `?owner_pkey=${friendId}`,
                });
              }}
            >
              Room Owner: {friend ? friend.username : "Unknown"}
            </span>
          );
        })}
      </div>
    </div>
  );
}
