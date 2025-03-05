function fetchDataFromApi(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status ${response.status}`)
            }
            return response.json();
        }).catch(err => {
            console.error(err.message);
            throw err;
        })
}

async function gettingData() {
    try {
        let data1 = await fetchDataFromApi("https://jsonplaceholder.typicode.com/posts/1");
        console.log(data1);
        let data2 = await fetchDataFromApi("https://jsonplaceholder.typicode.com1/posts/1");
        console.log(data2);
    } catch (err) {
        console.log(err)
    }
}

gettingData()



/**
 * async used to define asynchronous functions. and we use await to async statements.
 * and we can only use await inside async function.
 * 
 * Benefits of async/await over then and catch:
 *      async/await looks and feels more like synchronous code, so it’s easier to read and understand.
 *      No need to chain .catch(), we can just try/catch around the await call.
 *      Code flows top to bottom naturally, instead of jumping through .then() chains.
 *      await works inside loops and conditions, unlike chained .then() which can get messy in loops.
 */