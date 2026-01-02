    import { useRef, useEffect } from 'react'
    import { ChatMessage } from './ChatMessage';


    function ChatMessages ({ chatMessages }) { //chat messages component
        //React doesnt not use DOM directly
        const chatMessagesRef = useRef(null);

        useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem ) { 
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages]); //dont put a hook in an if statement or loop
        //array controls when use effect runs

        return (
          <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage 
                  message={chatMessage.message} 
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
           })}
          </div>
        );
    }

    export default ChatMessages;