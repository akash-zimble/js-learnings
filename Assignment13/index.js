function buttonClickMain() {
  let noOfTimesClicked = 0;
  return function () {
    console.log(++noOfTimesClicked);
  };
}

document.getElementById("clickMe").addEventListener("click", buttonClickMain());

  
/**
 * In above code, the buttonClickMain will return call back function. Line number 8 will find button element, and adds event listener to it.
 */

/**
 * A callback function is a function that is passed as an argument to another function and is invoked later, usually in response to an event or async operation.
 * Callbacks allow JavaScript to handle long-running operations asynchronously, preventing the blocking of the main thread.
 * Examples: Event Listeners (like your button click example), setTimeout / setInterval, API calls using fetch, Reading files in Node.js (fs.readFile)
 * 
 * Note: Remove Event Listners if not used. Because it takes much memory. So it is a best pracise to remove event listners, when we not going to use that event listner anymore.
 */