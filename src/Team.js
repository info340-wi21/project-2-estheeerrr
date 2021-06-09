import React from 'react';

function TeamPage() {
  return (
    <div>
        <h2>Team member</h2>
        <section>
      

        <a href="javascript:void(0);" class="icon" onclick="navFunction()">
          <i class="fa fa-bars"></i>
        </a>

        <h2>About Us:</h2>
        <address>
        <div className="col-4"> 
            <ul>
                <li>Grant Yang: <a href="mailto:ley5@uw.edu">ley5@uw.edu</a></li>
                <li>Shirley Zhang: <a href="mailto:hailunzh@uw.edu">hailunzh@uw.edu</a></li>
                <li>Esther Han <a href="mailto:jingxh3@uw.edu">jingxh3@uw.edu</a></li>
                <li>Sunny Li <a href="mailto:cl237@uw.edu">cl237@uw.edu</a></li>
            </ul>
        </div>
        </address>

    </section>
    </div>
  );
}

export default TeamPage;

export {TeamPage};