class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.tipeDriver = document.getElementById("tipe-driver");
    this.date = document.getElementById("tanggal");
    this.pickUpTime = document.getElementById("waktu-jemput");
    this.customer = document.getElementById("jumlah-penumpang");
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("list-card");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load(customer) {
    const date = app.date.value;
    const pickUp = app.pickUpTime.value;
    const input = new Date(`${date} ${pickUp}`);
    const miliTimeInput = input.getTime();

    const cars = await Binar.listCars((item) => {
      const dateTime = new Date(item.availableAt);
      const miliDataTime = Number(dateTime.getTime());
      const dateFilter = miliDataTime < miliTimeInput;
      if (item.capacity == customer) {
        return dateFilter;
      }
    });

    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
