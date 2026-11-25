const player = document.querySelector("#playerPin");

const paletteStyle = document.querySelector("link[href='peliStyle.css']")

const cityArray = [

    {

        name: 'Helsinki',
        image:'img/battle4.jpg',
        x:'35.2',
        y:'99.25'

    },
    {

        name: 'Jyväskylä',
        image:'img/battle.jpg',
        x:'42.7',
        y:'77.3'

    },
    {

        name: 'Turku',
        image:'img/battle2.jpg',
        x:'10.7',
        y:'96.3'

    },
    {

        name: 'Tampere',
        image:'img/battle3.jpg',
        x:'24.3',
        y:'85.5'

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
        
        const targetLeft = `${city.x}%`;
        const targetTop = `${city.y}%`;

        function openCityModal() {

            let shinyChance = Math.floor(Math.random() * 8192) + 1;

            if (shinyChance === 1) {

                document.querySelector("#cityModal img").src = 'img/shiny.png';

            }
            
            else {

                document.querySelector("#cityModal img").src = city.image;

            };

            document.querySelector("#cityModal").showModal();

        };

        if (player.style.left === targetLeft && player.style.top === targetTop) {

            openCityModal();
            return;

        }

        player.style.left = targetLeft;
        player.style.top = targetTop;

        player.addEventListener('transitionend', () => {
            
            openCityModal();

        });

    });

    document.querySelector(".mapContainer").appendChild(cityBtn);

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