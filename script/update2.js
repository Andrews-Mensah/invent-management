let retrievedEntries = localStorage.getItem(0);
let retrievedArray = JSON.parse(retrievedEntries);

let updateQuantity = () => {
    let inputs = document.getElementsByTagName("input")
    const itemName = inputs[0].value
    const quantity = parseInt(inputs[1].value)


    let found = false;
    for (let i = 0; i < retrievedArray.length; i++) {
        if (retrievedArray[i].itemName == itemName) {
            retrievedArray[i].quantity = quantity
            console.log(retrievedArray[i])
            found = true;
        }
    }
    localStorage.setItem(0, JSON.stringify(retrievedArray));
    clrInputs()
    // err(found)
}



//clear inputs
let clrInputs = () => {
    let inputs = document.getElementsByTagName("input")
    for (x of inputs) {
        x.value = ""
    }
}



let addItemBtn = document.getElementById("addBtn")
addItemBtn.addEventListener("click", updateQuantity)