import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className = "pageSetup">
    <webPageHeader>
        <p>  React web page </p>
    </webPageHeader>
    <webPageMain>
      <div className = "mainLeftHalf">
      <p>Hello1</p>
      </div>
      <div className = "mainRightHalf">
      <p>Hello2</p>
      </div>
    </webPageMain>
    <webPageFooter>
    <p>  This is footer </p>
    </webPageFooter>
  </div>
  );
}

export default App;
