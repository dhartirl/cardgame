# Card Game Test

ActionCable & React based card game demo

## Running

`./bin/dev` - this should launch the rails server and shakapacker client/server

Note: the webpack server doesn't seem to terminate gracefully and requires a double sigterm to kill

## Dependencies

### Redis

`brew install redis` - install redis

`brew services start redis` - start the server

`redis-cli ping` - should respond "PONG" if server is configured correctly

### OS Dependencies

`brew install libyaml` - required to build the `psych` gem