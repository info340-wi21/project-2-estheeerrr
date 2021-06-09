
/*
Many people are fan of sport especially Basketball, but there no place for people come together to discuss for sport in this case Basketball.
This is an app that provides statistics information as well as discussion and lastly users will be able to create brackets for the NBA.
*/
// boostrap组件可以通过下面这样来import， 这个是documentation，直接复制粘贴就完了：https://react-bootstrap.github.io/getting-started/introduction/
// 我已经把bootstrap加到node module 里面了，应该能用【狗头
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';
import { CardBoard } from './playerBoad';
import { PlayerForm } from './form';
import { GameBoard } from './gameBoard';
import { useState } from 'react';
import { Router, NavLink} from 'react-dom'

function App(props) {
  const [players, setPlayers] = useState(props.player);
  return (

    <div className="App">

      <header className="App-header">
        <h1>Player Viewer</h1>
        <p>By Team Cereal Killer</p>
      </header>


      <main>
        <div className="row">
          <div className="container">
            <AboutNav />
          </div>


            <span className="container boardSpan">
              <CardBoard players={players} />
            </span>

            <span className="container formSpan">
              <PlayerForm />
            </span>

       </div>
      </main>
      <footer>A project for INFO 340 <a href="https://github.com/info340a-sp21/project-01-Gyangle">Link</a></footer>
    </div>

  );
}

/*Navigation bar that used to redirect routing */
function AboutNav() {
  return (
    <nav id="aboutLinks">
      <h2>About</h2>
      <ul className="list-unstyled">
        <li>Player Board</li>
        <li>Proposal</li>
        <li>Our Team</li>
      </ul>
    </nav>
  );
}
export default App;
