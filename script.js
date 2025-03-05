document.addEventListener("DOMContentLoaded", () => {
    loadCars();

    const carForm = document.getElementById("car-form")
    carForm.addEventListener("submit", addCar)
})
    
//Carregar carros do localStorage

function loadCars(){
    var carList = document.getElementById("car-list");
    var cars = JSON.parse(localStorage.getItem("cars")) || [];
    carList.innerHTML = "";
    for (let i = 0; i < cars.length; i++) {
        addCarToList(cars[i], i)
    }
}
    
//Adicionar carros à lista no front-end

function addCarToList(car, index) {
    var carList = document.getElementById("car-list");
    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = "<span> <strong>" + car.model + "</strong> - " + car.year + " R$" + car.price + "</span>" + 
    "<button class='btn btn-danger btn-sm' onclick='deleteCar(" + index + ")'>Deletar</button>"
    
    carList.appendChild(li);
}

//Adicionar um carro ao localStorage, usando a função saveCars

function addCar(event) {
    event.preventDefault();
    
    var model = document.getElementById("model").value;
    var year = parseInt(document.getElementById("year").value);
    var price = parseFloat(document.getElementById("price").value).toFixed(2);

    var cars = JSON.parse(localStorage.getItem("cars")) || [];
    cars.push({model: model, year: year, price: price});

    saveCars(cars);
    loadCars();

}

//Salvar carros, ou adicioná-los no localStorage
function saveCars(cars) {
    localStorage.setItem("cars", JSON.stringify(cars));
}