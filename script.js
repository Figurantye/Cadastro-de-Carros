document.addEventListener("DOMContentLoaded", () => {
    const carForm = document.getElementById("car-Form")
    const carList = document.getElementById("car-list")

    //Carregar carros do localStorage

    const loadCars = () => {
        const cars = JSON.parse(localStorage.getItem("cars")) || [];
        carList.innerHTML = "";
        cars.array.forEach((car, index) => addCarToList(car, index));
    }

    //Salvar carros no localStorage
    const saveCars = (cars) => {
        localStorage.setItem("cars", JSON.stringify(cars))
    }
})

const model = document.getElementById("model")
const year = document.getElementById("year")
const price = document.getElementById("price")