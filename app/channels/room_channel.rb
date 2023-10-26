class RoomChannel < ApplicationCable::Channel
  def subscribed
    @connection_token = generate_connection_token
    @username = @connection_token[0, 6]
    stream_from "room_channel"
    send_message({"message": "#{@username} has joined the server"}, "System")
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(json_message)
    message = json_message.deep_symbolize_keys
    Rails.logger.info "Received message #{message}"
    chat(message[:data])
  end

  def chat(data)
    send_message(data, @username)
  end

  private

  def send_message(data, username)
    ActionCable.server.broadcast "room_channel", { sender: username, timestamp: DateTime.now.to_i * 1000, body: data[:message] }
  end

  def generate_connection_token
    SecureRandom.hex(36)
  end
end
