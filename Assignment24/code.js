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


fetchDataFromApi("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log(data))
    .catch(err => console.log(err.error));


fetchDataFromApi("https://jsonplaceholder.typicode.com1/posts/1")
    .then(data => console.log(data))
    .catch(err => console.log(err));


/**
 * fetchDataFromApi returns a promise.
 * A Promise is an object that represents the eventual completion (fulfilled) or failure (rejected) of an asynchronous operation, along with its resulting value.
 * 
 * Promises have 3 possible states: 
 * - pending (initial state, neither fulfilled nor rejected)
 * - fulfilled (operation completed successfully)
 * - rejected (operation failed)
 * 
 * When the promise resolves (fulfilled), the code inside the `then` block runs.
 * If the promise is rejected, the error will be handled inside the `catch` block.
 */
