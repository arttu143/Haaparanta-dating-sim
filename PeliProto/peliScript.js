const city = document.querySelector(".city");

const cityArray = [

    {

        name: 'Jyväskylä',
        image:'img/battle.jpg',
        x:'2980',
        y:'-6500'

    },
    {

        name: 'Turku',
        image:'img/battle2.jpg',
        x:'440',
        y:'-710'

    },

]

for(const city of cityArray){

let cityBtn = document.createElement("button");
cityBtn.setAttribute("class", "city");
cityBtn.setAttribute("class", "cityPin");
cityBtn.setAttribute("style", "top: 30%; left: 55%;");
cityBtn.setAttribute("style", `transform: translate(${city.x}% , ${city.y}%)`);
cityBtn.setAttribute("data-city", city.name);

let cityTooltip = document.createElement("span");
cityTooltip.setAttribute("class", "tooltip")
cityTooltip.innerText = city.name;
cityBtn.appendChild(cityTooltip);

cityBtn.addEventListener('click', () => {

    console.log(city.name)

    document.querySelector("dialog img").src = city.image;
    document.querySelector("dialog").showModal();

});

document.querySelector(".mapContainer").appendChild(cityBtn)

}

document.querySelector("dialog").addEventListener("click", () => {

    document.querySelector("dialog img").src = "";
    document.querySelector("dialog").close();

});