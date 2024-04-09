import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <>
      <ChatEngine 
        height="100vh"
        projectID="6d678a44-7e2f-4047-8483-a32c9fbb59be"
        userName="nazmussaquib"
        userSecret="12345678"
        
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </>
  );
}

export default App;
