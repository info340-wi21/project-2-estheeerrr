
/*
Many people are fan of sport especially Basketball, but there no place for people come together to discuss for sport in this case Basketball.
This is an app that provides statistics information as well as discussion and lastly users will be able to create brackets for the NBA.
*/
// import Button from 'react-bootstrap/Button';
import React from 'react'; //import React Component
import { Button } from 'react-bootstrap';
import { CardBoard } from './playerBoard';
import { PlayerForm } from './form';
import { useState } from 'react';
import { TeamPage } from './Team';
import { BrowserRouter, NavLink, Route, Switch, Link, Redirect } from 'react-router-dom';
import { ProposalPage } from './Proposal';
import SignIn from './Login';
import SignUp from './SignUp';
import { auth } from "./firebase.js";
import { useEffect } from 'react';


function App(props) {
  const [players, setPlayers] = useState(props.player);

  const [login, setLogin] = useState(undefined);
  const [user, setUser] = useState("");

  useEffect(() => {
    authentication();
  }, []);

  const authentication = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user.email);
        setLogin(true);
        // ...
      } else {
        // User is signed out
        // ...
        setLogin(undefined);
        setUser("");
      }
    });
  }

  function UserGreeting(name) {
    const n = name["name"];
    console.log(n);
    return (<div className="container welcomeback">
      <h3>Welcome back, {n}</h3>
      <button onClick={() => signOutUser()}>Sign Out</button>
    </div>);
  }

  function GuestGreeting() {
    return <h3>Please login, link on the Left.</h3>;
  }

  function Greeting() {
    if (login) {
      // console.log(user);
      return <UserGreeting name={user} />;
    }
    return <GuestGreeting />;
  }

  function signOutUser() {
    auth.signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
  }

  return (

    <div className="App">

      <header className="App-header">
        <h1>Player Viewer</h1>
        <p>By Team Cereal Killer</p>
      </header>
      <Greeting />
      <main className="row">
        <div className="container aboutNav">
          <AboutNav />
        </div>

        

        <Switch>
          <Route exact path="/">
            <div className="container boardSpan">
              <CardBoard players={players} />
            </div>
            <div className="container formSpan">
              <PlayerForm />
            </div>
          </Route>

          <Route path="/proposal">
            <span className="container proposal">
              <ProposalPage />
            </span>
          </Route>

          <Route path="/team">
            <span className="container team">
              <TeamPage />
            </span>
          </Route>

          <Route path="/login">
          <span className="container signin">
            <SignIn />
            </span>
          </Route>

          <Route path="/signup">
          <span className="container signup">
            <SignUp />
            </span>
          </Route>

          <Redirect to="/"></Redirect>

        </Switch>
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
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink exact to="/">Player Board</NavLink></li>
        <li><NavLink to="/proposal">Proposal</NavLink></li>
        <li><NavLink to="/team">Our Team</NavLink></li>
        
      </ul>

    </nav>

  );
}
export default App;
