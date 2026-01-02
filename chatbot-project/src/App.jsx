import { useState } from 'react' //named export
import { ChatInput } from './components/ChatInput';
import ChatMessage from './components/ChatMessages'; //deafult export
import './App.css'


    function App () {
        const [chatMessages, setChatMessages] = useState([{
          message: "hello chatbot",
          sender: "user",
          id: 'id1'
        }, {
          message: "Hello! How can I help you?",
          sender: "robot",
          id: 'id2'         
        }, {
          message: "can you get me today's date?",
          sender: "user",
          id: 'id3'
        }, {
          message: "Today is September 27",
          sender: "robot",
          id: 'id4'
        }]);
        //const [chatMessages, setChatMessages] = array;
        //array destructuring
        //order matters
        //array to hold chat messages


        return (
         <div className="app-container">
            <ChatMessages 
              chatMessages={chatMessages}
            />
            <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
         </div>
        );
      }


export default App
