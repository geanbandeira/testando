// Dados fictícios de carros
const cars = [
    { id: 1, name: "Carro A", price: 50 },
    { id: 2, name: "Carro B", price: 70 },
    { id: 3, name: "Carro C", price: 60 },
];

// Event listener para preencher a lista de carros
document.addEventListener("DOMContentLoaded", () => {
    const carList = document.getElementById("car-list");
    const carSelect = document.getElementById("car-select");
    
    cars.forEach(car => {
        const listItem = document.createElement("li");
        listItem.textContent = `${car.name} - Preço: $${car.price}/dia`;
        carList.appendChild(listItem);

        const option = document.createElement("option");
        option.value = car.id;
        option.textContent = car.name;
        carSelect.appendChild(option);
    });
});

// Event listener para lidar com a reserva
document.getElementById("reservation-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedCarId = parseInt(document.getElementById("car-select").value, 10);
    const selectedCar = cars.find(car => car.id === selectedCarId);

    if (selectedCar) {
        const reservationDetails = document.getElementById("reservation-details");
        reservationDetails.textContent = `Você reservou o ${selectedCar.name} por $${selectedCar.price}/dia.`;
    }
});
