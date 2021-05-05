import './App.css';
import Feed from './Component/Feed/Feed';
import Header from './Component/Header/Header';
import SideBar from './Component/SideBar/SideBar';

function App() {
  return (
    //BEM naming convention
    <div className="app">

      {/* Header */}
      <Header/>
      {/* App Body */}
      <div className="app__body">
        {/* sidebar */}
        <SideBar/>
        {/* Feed */}
        <Feed/>
        {/* widgets */}
      </div>
        
    </div>
  );
}

export default App;
