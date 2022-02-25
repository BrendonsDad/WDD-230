var temp= document.querySelector('#temp').textContent;
var wSpeed= document.querySelector('#wSpeed').textContent;
console.log(temp);

if (temp <= 50 && wSpeed > 3) {
    var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));



    var windChill= Math.round(windChill);
    } else {
        var windChill = 'N/A'
    }


document.getElementById("windChill").innerHTML= windChill;
