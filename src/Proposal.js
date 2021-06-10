/* main proposal page of our project. Containing problem/data domain and app description*/
import React from 'react';

function ProposalPage() {
  return (
    <div>
        <h2>About Us</h2>
        
    <section>
        <h2>Problem/Data Domain</h2>
        <p>Many people are fans of sports especially Basketball, but there is no place for people to come together to discuss sports, in this case Basketball. We want to create a platform that provides statistics information as well as discussion for users, as well as, an ability to create tournament brackets to compete against each other while keeping track of stats. </p>
        <p>Recreational basketball players lack a tool to organize their games and keep track of statistics that may be useful for enhancing their experience or improving their games. Currently there are guides on creating recreational sport leagues online as well as web apps that can be registered for to create an entire recreation league tracker. For example, there are a lot of applications available for more club and better organized sports like <a href="https://www.teamsnap.com/">team snap</a> but there is a lack of applications that cater towards recreational sports with lower commitment and more casually organized for friends and/or family. </p>
    </section>

  
    <section>
        <h2>App Description</h2>
        <p>The users of the application will be those running a recreational sports league and interested in organizing teams with their friends as well as keeping track of statistics and tournament brackets. Users will be viewing information including dates, for example on a calendar of scheduled events input by them, as well as statistics for their team members that are also input by them.</p>
        <p>The users will interact with the web app by creating their teams and inputting/selecting team members (for example their friends) as well as scheduling events, for example games between other teams, and finally inputting statistics for their teammates, for example number of assists or 2-point field goals scored. Registering the web app will also be another way for users to interact. Using this web app will help people interested in enhancing their recreational sport experience keep track of their team statistics as well as organize their team and have a good way of scheduling sporting events with other teams registered on the web app.</p>
    </section>
    </div>
  );
}

export default ProposalPage;

export {ProposalPage};