const list = document.getElementById("itemList");
const resultElement = document.getElementById("context");
const button = document.getElementById("createItemButton");
let count = 1;


button.addEventListener("click", () => {
    const listItem = document.createElement('li');
    const childButton = document.createElement('button');
    childButton.textContent = `Button Item ${count}`;
    listItem.appendChild(childButton);
    listItem.setAttribute('id',`child-button-${count}`);
    list.appendChild(listItem);
    count++;
})

list.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if(event.target.tagName === 'BUTTON'){
        resultElement.textContent = `Clicked element: ${event.target.textContent}`;
    }
})


/**
 * Event Delegation: Event delegation is technique in JS, where a parent element handles events for its child elements, 
 * even if the children are added dynamically after page loading. 
 * So rather then writing event listeners for each child, we can just add event listener for parent.
 */