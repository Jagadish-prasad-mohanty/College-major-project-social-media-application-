import './App.css';
import Feed from './Component/Feed/Feed';
import Header from './Component/Header/Header';
import SideBar from './Component/SideBar/SideBar';
import Widgets from './Component/Widgets/Widgets';


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
        <Widgets/>
      </div>
        
    </div>
  );
}

export default App;
