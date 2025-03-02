let getData = (val) => {
    console.log(`Searching for: ${val}`);
};

let onChange = (event) => {
  getData(event.target.value);
};

let timer;
let onChange2 = (event) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    getData(event.target.value);
  }, 500);
};


/**
 * Debouncing is a programming technique to make sure a function only runs after a delay.
 * When searching for something, you might take some time to complete your query.
 * In this case, triggering the API on every keystroke would consume computation resources and increase the server load.
 * 
 * Instead of hitting the API each time, we wait a bit after a key press. If another key press happens, we restart the timer to introduce a delay.
 * If no key press occurs, then we call the respective function.
 */