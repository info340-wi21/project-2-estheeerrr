/*

*/
export function GameBoard() {
    return(
        <div>
            <p>Choose a statistic to rank the players</p>
            <div>
                <button className="btn btn-info">Points</button>
                <button className="btn btn-info">Assists</button>
                <button className="btn btn-info">Rebounds</button>
                <p></p>
            </div>
        </div>
    )
}

function sortByPoints(playerObj) {
      return playerObj.players.sort((a, b) => (a.point < b.point) ? 1 : -1);
}

function sortByAss(playerObj) {
    return playerObj.players.sort((a, b) => (a.assist < b.assist) ? 1 : -1);
}

function sortByRebounds(playerObj) {
    return playerObj.players.sort((a, b) => (a.rebound < b.rebound) ? 1 : -1);
}