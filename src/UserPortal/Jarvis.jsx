import React, { useState, useEffect, useRef } from 'react';
import { PiRobotThin } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa"; 
import './UserPortal.css'


const Jarvis = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const inputRef = useRef(null);
  const chatboxRef = useRef(null); 

  const API_KEY = 'AIzaSyDRaih7TbaaymRcjvoa3YO5BekyA2LY4Ig'; 
  const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

  const createChatLi = (message, className) => {
    return (
      
      <li className={`chat ${className}`} style={{ display: 'flex'}}>
      
        {className === 'incoming' && (
          <span className="material-symbols-outlined" style={{ display: 'flex', alignItems: 'center' ,fontSize:"12px"}}>
            <PiRobotThin  style={{ margin:'0px 2px 0px 0px'}}className='six'/>
          </span>
        )}
        {className === 'outgoing' && ( 
          <span className="material-symbols-outlined" style={{ display: 'flex', alignItems: 'center',fontSize:"12px"}}>
            <FaUserCircle style={{ margin:'0px 10px 0px 0px'}} className='six'/>
          </span>
        )}
        <p>{message}</p>
      </li>
    );
  };

  const handleChat = async () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setUserMessage(''); 

    const outgoingChat = createChatLi(trimmedMessage, 'outgoing');
    setChatHistory((prevHistory) => [...prevHistory, outgoingChat]);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [{ text: trimmedMessage }]
          }]
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      const incomingMessage = data.candidates[0].content.parts[0].text;
      const incomingChat = createChatLi(incomingMessage, 'incoming');
      setChatHistory((prevHistory) => [...prevHistory, incomingChat]);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorChat = createChatLi('An error occurred. Please try again.', 'incoming');
      setChatHistory((prevHistory) => [...prevHistory, errorChat]);
    } finally {
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  };

 
  useEffect(() => {
    scrollToBottom();
    inputRef.current.style.height = 'auto';
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
  }, [chatHistory]);

  return (
    
    <div className="bd">
      <div className="chatbot persistent expanded">
        <header>
          <h2 className='chat'> Jarvis</h2>
        </header>
       
        <ul id="chatbox" ref={chatboxRef} className="chatbox">
        <span style={{ margin:'10px 10px 0px 0px',alignItems: 'center'}}>
            <PiRobotThin  style={{ margin:'-5px 10px 0px 0px',alignItems: 'center'}}className='six'/>Hii User,How Can I help You
          </span>
          {chatHistory.map((chatLi, index) => (
            <React.Fragment key={index}>{chatLi}</React.Fragment>
          ))}
        </ul>
        <div className="chat-input">
          <textarea
           
            ref={inputRef}
            placeholder="Enter a message..."
            spellCheck={false}
            required
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleChat();
              }
            }}
          />
          <button id="send-btn" className="material-symbols-rounded" onClick={handleChat}>
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jarvis;