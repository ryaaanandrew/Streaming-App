# Streamy McStreamy App


A single page streaming app built using React/Redux/Oauth/JSON-server/rtmp/node media server & Styled-Components.

Users can:
- Create a stream
- Save a stream
- Edit and Delete a stream

![Home page](https://i.imgur.com/Pz2uF3K.png)
![show page](https://i.imgur.com/oaO6k7s.png)

### To use:
1 Install dependencies in client, rtmpserver, server & root folders
2 cd back into the root folder
3 npm run start

### Connecting through OBS:
1. Open OBS and start a streaming session
2. Go to settings > stream 
3. Under service, choose custom
4. Your stream key will be the route id 'http://localhost:3000/streams/show/1**

# TODO
- Styling
- Switch back end to Go
- Host
- Internal User database
- Refactor into hooks(?)
