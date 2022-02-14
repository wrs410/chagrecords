
import './App.css';

import Mainframe from './components/Mainframe.js';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <main id = "mainGrid">
      <Sidebar />
      <Mainframe />
    </main>
  );
}

export default App;
