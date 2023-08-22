const events = [
    { name: "Partida de Futebol", odds: { home: 1.5, draw: 2.0, away: 3.0 } },
    { name: "Corrida de Cavalos", odds: { horse1: 2.5, horse2: 3.0, horse3: 4.0 } },
    // Adicione mais eventos aqui
];

const eventList = document.getElementById("event-list");

function displayEvents() {
    eventList.innerHTML = "";
    events.forEach(event => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${event.name}</h3>
            <p>Odds:</p>
            <ul>
                <li>Casa: ${event.odds.home}</li>
                <li>Empate: ${event.odds.draw}</li>
                <li>Fora: ${event.odds.away || event.odds.horse1 || ""}</li>
            </ul>
        `;
        eventList.appendChild(li);
    });
}

displayEvents();
