const player = document.querySelector("#playerPin");

const paletteStyle = document.querySelector("link[href='peliStyle.css']")

const cityArray = [

    {

        name: 'Helsinki',
        image:'img/battle4.jpg',
        x:'45',
        y:'90.5'

    },
    {

        name: 'Jyväskylä',
        image:'img/battle.jpg',
        x:'56',
        y:'5'

    },
    {

        name: 'Turku',
        image:'img/battle2.jpg',
        x:'9',
        y:'79.5'

    },
    {

        name: 'Tampere',
        image:'img/battle3.jpg',
        x:'29.5',
        y:'36.8'

    }

];

player.setAttribute("style", `left: ${cityArray[0].x}%; top:${cityArray[0].y}%`);

for(const city of cityArray){

    let cityBtn = document.createElement("button");
    cityBtn.setAttribute("class", "city");
    cityBtn.setAttribute("class", "cityPin");
    cityBtn.setAttribute("style", "top: 30%; left: 55%;");
    cityBtn.setAttribute("style", `left: ${city.x}%; top:${city.y}%`);
    cityBtn.setAttribute("data-city", city.name);

    let cityTooltip = document.createElement("span");
    cityTooltip.setAttribute("class", "tooltip")
    cityTooltip.innerText = city.name;
    cityBtn.appendChild(cityTooltip);

    cityBtn.addEventListener('click', () => {
        
        let shinyChance = Math.floor(Math.random() * 8192) + 1;

        player.setAttribute("style", `left: ${city.x}%; top:${city.y}%`);

        console.log(city.name)

        if(shinyChance == 1){
            
            document.querySelector("#cityModal img").src = 'img/shiny.png';

        }

        else{

            document.querySelector("#cityModal img").src = city.image;

        }

        document.querySelector("#cityModal").showModal();

    });

    document.querySelector(".mapContainer").appendChild(cityBtn)

};

document.querySelector("#cityModal").addEventListener("click", () => {

    document.querySelector("#cityModal img").src = "";
    document.querySelector("#cityModal").close();

});

document.querySelector("#invBtn").addEventListener("click", () => {

    document.querySelector("#inventory").showModal();

});

document.querySelector("#closeinv").addEventListener("click", () => {

    document.querySelector("#inventory").close();

});

document.querySelector("#closemenu").addEventListener("click", () => {

    document.querySelector("#menu").close();

});

document.querySelector("#menuBtn").addEventListener("click", () => {

    document.querySelector("#menu").showModal();

});

document.querySelector(".options").addEventListener("click", () => {

    document.querySelector("#settings").showModal();
    
});

document.querySelector("#closeModal").addEventListener("click", () => {

    document.querySelector("#settings").close();
    
});

document.querySelector("#palettechoose").addEventListener("click", () => {

    if(document.querySelector("select[name='palette']").value == "palette2"){

        paletteStyle.setAttribute("href", "peliStyle2.css")

    }

    else if(document.querySelector("select[name='palette']").value == "palette3"){

        paletteStyle.setAttribute("href", "peliStyle3.css")

    }

    else {

        paletteStyle.setAttribute("href", "peliStyle.css")

    };
    
});

let id = null;
function myMove(x, y) {
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      player.style.top = pos + "px"; 
      player.style.left = pos + "px"; 
    }
  }
}
