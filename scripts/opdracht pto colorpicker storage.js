const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let blue = document.getElementById("sldBlue").value;
    let green = document.getElementById("sldGreen").value;

    let rgb = {
        red: red,
        green: green,
        blue: blue
    };

    let jsonText = JSON.stringify(rgb);
    localStorage.setItem("colorpicker.sliders", jsonText);
};

const restoreSliderValues = () => {
    let jsonText = localStorage.getItem("colorpicker.sliders");

    if (jsonText != null){
        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let replaceColor = [];
    let swatches = document.getElementsByClassName("swatch");
    for (let i = 1; i < swatches.length; i++){
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue")
        };
        replaceColor.push(rgb);
    }
    let jsonText = JSON.stringify(replaceColor);
    localStorage.setItem("colorpicker.swatches", jsonText);
};

const restoreSwatches = () => {
    let jsonText = localStorage.getItem("colorpicker.swatches");
    if (jsonText){
        let swatches = JSON.parse(jsonText);
        let swatchElements = document.querySelectorAll('.swatch');
        for (let i = 0; i < swatchElements.length; i++){
            swatchElements[i].style.backgroundColor = swatches[i];
        }
    }
};