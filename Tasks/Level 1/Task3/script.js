const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1); return fahrenheit;
    }
    // Celsius to Kelvin
    const celToKel = (cel) => {
        let kelvin = (cel + 273.15).toFixed(1); return kelvin;
    }
    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1); return celsius;
    }
    
    // Fahrenheit to Kelvin
    const fahToKel = (fah) => {
        let kelvin = ((fah - 32) * 5 / 9 + 273.15).toFixed(1); return kelvin;
    }
    //kelvin to celsius
    const kelToCel = (kel) => {
        let celsius= (kel - 273.15).toFixed(1); return celsius;
    }
    // Kelvin to fahrenheit
    const kelTofah = (kel) => {
        let fahrenheit = ((kel - 273.15) * 9 / 5 + 32).toFixed(1); return fahrenheit;
    }
    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; fahrenheit"
    }
    else if (valueTemp == 'fah') {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; celsius";
    }
    else if (valueTemp == 'kel') {
        document.getElementById("result").innerHTML = kelToCel(inputTemp) + "&#176; celsius";
    }
    else if (valueTemp == 'kel') {
        document.getElementById("result").innerHTML = kelTofah(inputTemp) + "&#176; fahrenheit";
    }
    else if (valueTemp == 'fah') {
        document.getElementById("result").innerHTML = fahToKel(inputTemp) + "&#176; Kelvin";
    }
    else if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToKel(inputTemp) + "&#176; Kelvin";
    }

}


