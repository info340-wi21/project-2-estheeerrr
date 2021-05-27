import './App.css';
// boostrap组件可以通过下面这样来import， 这个是documentation，直接复制粘贴就完了：https://react-bootstrap.github.io/getting-started/introduction/
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Player Viewer</h1>
        <p>By Team Cereal Killer</p>
      </header>
      <main>
        <div className="gridView">
        </div> 

        <div className="submitPlayer">
        </div>
      </main>
      <footer>A project for INFO 340 <a href="https://github.com/info340a-sp21/project-01-Gyangle">Link</a></footer>
    </div>
  );
}

export default App;
