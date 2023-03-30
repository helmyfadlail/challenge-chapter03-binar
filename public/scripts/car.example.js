class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    const price = Intl.NumberFormat("id-ID", {
      currency: "IDR",
      style: "currency",
    }).format(this.rentPerDay);
    return ` 
      <div class="card-content">
        <img src="${this.image}" alt="${this.manufacture}" />

        <div class="card-description">
          <span class="name">${this.manufacture} ${this.model} / ${this.type}</span>
          <span class="profession">${price} / hari</span>
          <p class="description">${this.description}</p>
        </div>

        <div class="card-detail">
          <div>
            <ion-icon name="person-outline"></ion-icon>
            <span>${this.capacity}</span>
          </div>
          <div>
            <ion-icon name="settings-outline"></ion-icon>
            <span>${this.transmission}</span>
          </div>
          <div>
            <ion-icon name="calendar-clear-outline"></ion-icon>
            <span>${this.year}</span>
          </div>
        </div>

        <div class="button">
          <button class="aboutMe">Pilih Mobil</button>
        </div>
      </div>
    `;
  }
}
