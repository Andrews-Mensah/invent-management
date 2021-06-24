
window.onload = function (){

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
                itemName: "Azar Paint",
                description: "Azar Paint",
                category: "ACCESSORY",
                quantity: 70
            }

        


        ]
        localStorage.setItem(0, JSON.stringify(inputsArray));
    }
}

let retrievedEntries = localStorage.getItem(0);
let retrievedArray = JSON.parse(retrievedEntries);

iniGroup()


document.getElementById("totalItems").innerHTML = retrievedArray.length
    document.getElementById("numberOfCategories").innerHTML = 2
    let itemStock = document.getElementById("itemsInStock")
    let count = 0
    for(let i = 0; i<retrievedArray.length; i++){
        count += retrievedArray[i].quantity
    }
    itemStock.innerHTML = count


toggleMe = () => {
    let toggle = document.querySelector('.toggle')
    let sidebar_menu = document.querySelector('.sidebar-menu')
    let content = document.querySelector('.content')
    toggle.classList.toggle('active');
    sidebar_menu.classList.toggle('active');
    content.classList.toggle ('active');
}



const data = document.getElementById('tableBody')
const displayEntries = (arr, count) => {
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
    displayEntries(retrievedArray, i)
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

}