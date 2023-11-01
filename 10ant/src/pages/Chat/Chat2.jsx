import { useEffect, useContext, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import Conversations from "../../component/Conversations/Conversations";
import { AuthContext } from "../../Context/AuthContext";
import Messages from "../../component/Messages/Messages";
import "./Chat.css";
import Navbar2 from "../../component/Topbar/Topbar";
import SearchUsers from "../../component/Search/Users";
import Person1 from "../../component/Images/person1.jpg";
import { useLocation, useNavigate } from "react-router-dom";

export default function Chat2() {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [count, setcount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setusers] = useState([]);
  const [inputText, setInputText] = useState("");
  const containerRef = useRef();
  const socket = useRef(null);

  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const owner_pkey = params.get('owner_pkey');

  const [currentOwnerPkey, setCurrentOwnerPkey] = useState(owner_pkey);


  useEffect(() => {
    // Update the current owner_pkey whenever it changes in the URL
    setCurrentOwnerPkey(owner_pkey);
  }, [owner_pkey]);

  // scroll in message boxes
  const scrollDiv = (event) => {
    const delta = Math.sign(event.deltaY);
    containerRef.current.scrollTop += delta * 40;
    event.preventDefault();
  };

  // start a conversation
  const createConvo = async (receiverId) => {
    console.log(receiverId);
    const existingConvo = conversations.find(
      (convo) =>
        (convo.senderId === user.user_id && convo.receiverId === receiverId) ||
        (convo.senderId === receiverId && convo.receiverId === user.user_id)
    );

    if (existingConvo) {
      return;
    }
    try {
      const newConversation = {
        senderId: user.user_id,
        receiverId: receiverId,
      };

      let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConversation),
        redirect: "follow",
      };

      let res = await fetch(
        "http://localhost:9000/conversation/",
        requestOptions
      );

      if (res.ok) {
        setcount((prev) => prev + 1);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // search users feature
  async function getUsers() {
    try {
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const res = await fetch(
        "http://localhost:8000/api/user/",
        requestOptions
      );

      if (res.ok) {
        const result = await res.json();
        setusers(result);
      } else {
        console.error("Error fetching messages:", res.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = users.filter(
    (item) =>
      item.owner && item.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCards = (items) => {
    return filteredData.map((item, index) => (
      <li
        key={index}
        className="userListItem"
        onClick={() => createConvo(item.owner_pkey)}
      >
        {item.username}
      </li>
    ));
  };

  // initalised soxket
  useEffect(() => {
    socket.current = socketIOClient("http://localhost:9000");

    socket.current.on("receiveMessage", (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [messages]);

  // get all the messages on clicking on conversations
  useEffect(() => {
    if (currentChat) {
      async function getExistingMessages() {
        try {
          let requestOptions = {
            method: "GET",
            redirect: "follow",
          };

          const res = await fetch(
            `http://localhost:9000/messages/${currentChat[0]._id}`,
            requestOptions
          );

          if (res.ok) {
            const result = await res.json();
            setMessages(result);
          } else {
            console.error("Error fetching messages:", res.status);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }

      getExistingMessages();
    }
  }, [currentChat]);

  useEffect(() => {
    const fetchConversationById = async () => {
      try {
        const res = await fetch(
          `http://localhost:9000/conversation/${user.user_id}/${currentOwnerPkey}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setMessages([]);
        setCurrentChat(data); // Set the fetched conversation as currentChat
      } catch (error) {
        console.error("Error fetching conversation:", error);
      }
    };
    fetchConversationById();
  }, [currentOwnerPkey]);

  // get conversations between users
  useEffect(() => {
    async function getConversations() {
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
          setConversations(result);
        } else {
          console.error("Error fetching conversations:", res.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getConversations();
  }, []);

  // send message on chat
  const sendMessage = (e) => {
    e.preventDefault();
    let newMessage;
    if (inputText !== "") {
        newMessage = {
        conversationId: currentChat[0]._id,
        sender: user.user_id,
        text: inputText,
      };
    }

    socket.current.emit("sendMessage", newMessage);

    setInputText("");
  };

  return (
    <div className="chatContainer">
      <Navbar2 />
      <div className="chatWrapper">
        <div className="chatSidebar">
          <SearchUsers handleSearch={handleSearch} />
          {searchTerm && <ul>{renderCards(filteredData)}</ul>}
          {conversations?.map((c) => {
            console.log(c.members[1])
            return (
              <div
                className="okay"
                key={c._id}
                onClick={() => {
                  navigate({
                    pathname: '/chat',
                    search: `?owner_pkey=${c.members[1]}`
                  });
                }}
              >
                <Conversations conversations={c} currentUser={user} />
              </div>
            );
          })}
        </div>

        <div className="chatbox">
          {currentChat ? (
            <div className="chatDiv">
              <div className="chatTop" ref={containerRef} onWheel={scrollDiv}>
                {messages?.map((m) => {
                  return <Messages key={m._id} messages={m} user={user} />;
                })}
              </div>
              <div className="chatBottom">
                <form onSubmit={sendMessage} className="chatForm">
                  <input
                    type="chatText"
                    value={inputText}
                    className="chatInput"
                    placeholder="Messages..."
                    onChange={(e) => setInputText(e.target.value)}
                  ></input>
                  <button className="chat-btn">
                    {/* <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div> */}
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <p className="joinConvo">Join conversation </p>
          )}
        </div>
      </div>
    </div>
  );
}
