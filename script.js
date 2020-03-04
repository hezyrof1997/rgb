let zmiana = () => {
    let input1 = document.querySelector(".input1").value;
    let input2 = document.querySelector(".input2").value;
    let input3 = document.querySelector(".input3").value;

    /*  console.log(`Wartość pierwszego inputa = ${input1}`);
     console.log(`Wartość drugiego inputa = ${input2}`);
     console.log(`Wartość trzeciego inputa = ${input3}`); */

    document.querySelector("body").style.backgroundColor = `rgb(${input1},${input2},${input3})`;

    document.querySelector(".r").innerHTML = input1;
    document.querySelector(".g").innerHTML = input2;
    document.querySelector(".b").innerHTML = input3;



    document.querySelector(".wynik").innerHTML = `rgb(${input1},${input2},${input3})`;



    let suma = parseInt(input1) + parseInt(input2) + parseInt(input3);

    // console.log(suma);

    if (suma < 384) {

        document.querySelector(".wynik").classList.add("jasne");

    } else { document.querySelector(".wynik").classList.remove("jasne"); }

};

window.addEventListener("load", () => { zmiana(); })

document.querySelector(".input1").addEventListener("input", () => { zmiana(); })
document.querySelector(".input2").addEventListener("input", () => { zmiana(); })
document.querySelector(".input3").addEventListener("input", () => { zmiana(); })



