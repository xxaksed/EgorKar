let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
];
let results = [0, 0, 1];


function searchWinner(competitions, results) {
    let mapWinner = new Map();
    let currentWinner = "";
    let winner = "";
    mapWinner.set(currentWinner, 0);

    for (let i = 0; i < competitions.length; i++) {

        let homeTeam = competitions[i][0];
        let awayTeam = competitions[i][1];

        if (results[i] == 1) {
            winner = homeTeam;
        }
        if (results[i] == 0) {
            winner = awayTeam;
        }
        // console.log(homeTeam, awayTeam)
        console.log(mapWinner)

        if (mapWinner.get(winner) > mapWinner.get(currentWinner)) {
            currentWinner = winner;
        }

        if (!mapWinner.has(winner)) {
            mapWinner.set(winner, 0);
        }

        mapWinner.set(winner, mapWinner.get(winner) + 3);

    }
    // console.log(winner)

    return console.log(winner);
}

searchWinner(competitions, results);