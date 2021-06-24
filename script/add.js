let retrievedEntries = localStorage.getItem(0);
let retrievedArray = JSON.parse(retrievedEntries);

//clear inputs
let clrInputs = () => {
    let inputs = document.getElementsByTagName("input")
    for (x of inputs) {
        x.value = ""
    }
}



let addItems = () => {
    let inputs = document.getElementsByTagName("input")
    const itemName = inputs[0].value.toUpperCase()
    const description = inputs[1].value.toUpperCase()
    const quantity = parseInt(inputs[2].value)
    const category = document.getElementById("category").value

    if (itemName == "" || description == "" || quantity < 0) {
        alert("Please Give Valid Details")
        return
    } else {
        let inputsObjects = {
            itemName,
            description,
            category,
            quantity
        }
        retrievedArray.push(inputsObjects)
        localStorage.setItem(0, JSON.stringify(retrievedArray));
    }
    
    clrInputs()
}




let addItemBtn = document.getElementById("addBtn")
addItemBtn.addEventListener("click", addItems)