/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

// const urlSearchParams = new URLSearchParams(window.location.search);
// const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.loadButton.addEventListener("click", () => {
  const tipeDriver = app.tipeDriver.value;
  const customer = app.customer.value;

  if (tipeDriver && customer > 0) {
    app.load(customer).then(app.run);
    app.clear();
  }
});

app.clearButton.addEventListener("click", () => {
  app.clear();
});
