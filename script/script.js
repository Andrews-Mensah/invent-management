
let iniGroup = () => {
    if (localStorage.getItem(0) === null) {
        let inputsArray = [{
                itemName: "Longman Hammer",
                description: "Heavy Duty Hammer",
                category: "HARDWARE",
                quantity: 40
            },
            {
                itemName: "Hacksaw Blade",
                description: "Cutting Tool",
                category: "HARDWARE",
                quantity: 60
            },
            {
                itemName: "AZAR PAINT",
                description: "AZAR PAINT",
                category: "ACCESSORY",
                quantity: 70
            }
        ]
        localStorage.setItem(0, JSON.stringify(inputsArray));
    }
}

let retrievedData = localStorage.getItem(0);
let retrievedArray = JSON.parse(retrievedData);

iniGroup()



const data = document.getElementById('tableBody')
const displayData = (arr, count) => {
    const tr = document.createElement('tr')
    tr.className = 'tableRow'
    tr.innerHTML = `
    <tr>
        <td>${arr[count].itemName}</td>
        <td>${arr[count].description}</td>
        <td>${arr[count].category}</td>
        <td>${arr[count].quantity}</td>
        <td class="indicator"></td>
    </tr>
    `
    data.append(tr)
}

for (let i = 0; i < retrievedArray.length; i++) {
    displayData(retrievedArray, i)
}


//Set indicator colors
let indicators = document.getElementsByClassName("indicator")

for (let i = 0; i < retrievedArray.length; i++) {
    
    if (retrievedArray[i].quantity == 0) {
        indicators[i].classList.add("red")
        // indicators[i].innerHTML = "Out of stock"
    }
    else if(retrievedArray[i].quantity > 0 && retrievedArray[i].quantity < 20){
        indicators[i].classList.add("orange")
        // indicators[i].innerHTML = "Almost out of stock"
    }
    else{
        indicators[i].classList.add("green")
        // indicators[i].innerHTML = "In stock"
    }
}