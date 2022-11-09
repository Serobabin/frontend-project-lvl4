import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <div id="nav"><h1>Hexlet Chat</h1></div>
    <div id="detail">
      <Outlet />
    </div>
  </>

);

export default App;
