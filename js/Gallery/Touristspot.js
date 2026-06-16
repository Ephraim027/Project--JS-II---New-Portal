
let images = [
    {
        src: "images/Gallery/TouristSpot/IN_Logo/Ilocos_Norte_Im_In_Logo.jpg",
        desc: "Welcome to Ilocos Norte, where adventure begins!"
    },
    {
        src: "images/Gallery/TouristSpot/North/Pagudpud/Saud_Beach.jpg",
        desc: "Saud Beach - Pagudpud (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Pagudpud/patapat_bridge.jpg",
        desc: "Patapat Bridge - Pagudpud (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Bangui/Windmills.jpg",
        desc: "Windmills - Bangui (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Bangui/Kapurpurawan.jpg",
        desc: "Kapurpurawan - Bangui (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Bangui/Sentinella_hill.jpg",
        desc: "Sentinella Hill - Bangui (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Burgos/Light_House.jpg",
        desc: "Light House - Burgos (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Pasuquin/Biscocho.jpg",
        desc: "Pasuquin Biscocho - Pasuquin (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Pasuquin/Spanish_Watch_Tower.jpg",
        desc: "Spanish Watch Tower - Pasuquin (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Laoag_City/IN_Capitol.jpg",
        desc: "Ilocos Norte Capitol - Laoag City (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Laoag_City/St.William_Cathedral.jpg",
        desc: "St. William Cathedral Church - Laoag City (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Laoag_City/Sinking_Bell_Tower.jpg",
        desc: "Sinking Bell Tower - Laoag City (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Laoag_City/Laoag_Museum.jpg",
        desc: "Museum - Laoag City (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Laoag_City/SM_Laoag.jpg",
        desc: "SM - Laoag City (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Laoag_City/Fort_Ilocandia.jpg",
        desc: "Fort Ilocandia - Laoag City (North)"
    },
    {
        src: "images/Gallery/TouristSpot/North/Laoag_City/Sand_Dunes.jpg",
        desc: "Sand Dunes - Laoag City (North)"
    },
    {
        src: "images/Gallery/TouristSpot/South/Sarrat/Sta._Monica_Parish_Church_and_Museum.jpg",
        desc: "Sta. Monica Parish Church and Museum - Sarrat (South)"
    },
    {
        src: "images/Gallery/TouristSpot/South/Sarrat/Marcos_Museum.jpg",
        desc: "Marcos Museum - Sarrat (South)"
    },
    // {
    //     src: "images/Gallery/TouristSpot/South/Batac_City/Fedinand_E.Marcos_Presidential_Center.jpg",
    //     desc: "Fedinand E. Marcos Presidential Center  - Batac City (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Batac_City/Empanada.jpg",
    //     desc: "Batac Empanada  - Batac City (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Paoay/Saint_Augustine_Parish_Church.jpg",
    //     desc: "Saint Augustine Parish Church - Paoay (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Paoay/Malacañang_of_the_North.jpg",
    //     desc: "Malacañang of the North - Paoay (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Paoay/Chinese_Garden.jpg",
    //     desc: "Chinese Garden - Paoay (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Paoay/Paoay_Lake.jpg",
    //     desc: "Paoay Lake - Paoay (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Currimao/Spanish_Watch_Tower.jpg",
    //     desc: "Spanish Watch Tower - Currimao (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Currimao/Pangil_Rock_Formation.jpg",
    //     desc: "Pangil Rock Formation - Currimao (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Badoc/Minor_Basilica_and_Parish_of_Saint_John_the_Baptist.jpg",
    //     desc: "Minor Basilica and Parish of Saint John the Baptist - Badoc (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Badoc/La_Virgen_Milagrosa.jpg",
    //     desc: "La Virgen Milagrosa - Badoc (South)"
    // },
    // {
    //     src: "images/Gallery/TouristSpot/South/Badoc/Luna_Shrine_Museum.jpg",
    //     desc: "Gen. Antonio Luna and Juan Luna Shrine Museum - Badoc (South)"
    // },
    
];

let index = 0;
let slideshowInterval;

function showImage(i) {
    index = i;
    document.getElementById("largeImage").src = images[index].src;
    document.querySelector(".description p").textContent = images[index].desc;
}

function changeImage(imageSrc, desc) {
    let i = images.findIndex(img => img.src === imageSrc);
    if (i !== -1) {
        showImage(i);
        resetSlideshow();
    }
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
    resetSlideshow();
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
    resetSlideshow();
}

function startSlideshow() {
    slideshowInterval = setInterval(nextImage, 4000); // change every 4 seconds
}

function resetSlideshow() {
    clearInterval(slideshowInterval);
    startSlideshow();
}

// Start when page loads
window.onload = function() {
    showImage(index);
    startSlideshow();
};