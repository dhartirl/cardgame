import React, {useEffect, useState} from 'react';
import moment from "moment";
import consumer from "../../channels/consumer";

const Chat = ({channel}) => {
  const [messages, setMessages] = useState([
    {sender: "System", timestamp: new Date().getTime(), body: "This is an example chat message"}
  ]);
  const [messageSubscription, setMessageSubscription] = useState();

  useEffect(() => {
    const sub = consumer.subscriptions.create(
      {channel: channel},
      {
        received(data) {
          setMessages(prevState => [...prevState, data]);
        },
      }
    );
    setMessageSubscription(sub);
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    const message = {
      command: "chat",
      identifier: {channel: channel},
      data: {message: event.target.querySelector('.Chat-input').value}
    };
    messageSubscription.send(message);
    event.target.reset();
  }

  return <div className="Chat">
    <div className="Chat-messages">
      {messages.map((m, index) => <div key={`message-${index}`} className="Chat-message">
        <span className="Chat-messageTimestamp">{moment(m.timestamp).format("HH:mm")}</span>
        <span className="Chat-messageSender">{m.sender}:</span>
        <span className="Chat-messageBody">{m.body}</span>
      </div>)}
    </div>
    <form onSubmit={sendMessage} className="Chat-form">
      <input className="Chat-input" placeholder="Send a message..." type="text" />
      <input type="submit" className="Button Button--tertiary Chat-submit" value="Send" />
    </form>
  </div>;
}

export default Chat;