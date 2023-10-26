import React, {useEffect, useState} from 'react';
import consumer from "../../channels/consumer";

const RoomIndex = ({}) => {
  const [messages, setMessages] = useState(['test message']);

  useEffect(() => {
    consumer.subscriptions.create(
      {channel: "RoomChannel"},
      {
        received(data) {
          setMessages([...messages, data.message]);
        },
      }
    );
  }, [messages, setMessages]);

  return <>
    <div className="Card">This is the room index page</div>
    {messages.map((m, index) => <p key={`message-${index}`}>{m}</p>)}
  </>;
};

export default RoomIndex;