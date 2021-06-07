let colorName = document.getElementById("my-color-name");

function newColor(){
    console.log("gen-color-btn clicked");
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(r,g,b);
    if(colorName.innerText[0] !== "#")
    {
        document.getElementById("my-main").style.backgroundColor = "rgb("+r+","+g+","+b+")";
        colorName.innerText = "rgb("+r+","+g+","+b+")";
    }
    else{
        document.getElementById("my-main").style.backgroundColor = "rgb("+r+","+g+","+b+")";
        colorName.innerText = "rgb("+r+","+g+","+b+")";
        rgbToHex();

    }
}
function rgbToHex(){
    if(colorName.innerHTML[0] !== "#")
    {
        let str = colorName.innerText;
        console.log(str);
        let arr = [];
        let value = "";
        for(let i=4;i<str.length;i++){
            if(isNaN(parseInt(str[i],10)) === false)
                value += str[i];
            else{
                arr.push(parseInt(value,10).toString(16));
                value = "";
            }
        }
        let r = arr[0];
        let g = arr[1];
        let b = arr[2];
        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;

        let hex = "#" + r + g + b;
        colorName.innerText = hex;
    }
    else
        console.log("none")
}

function hexToRgb() {
    if(colorName.innerHTML[0] === "#")
    {
        console.log("hex:"+colorName.innerText+" toRgb");
        hex = colorName.innerText.slice(1,colorName.innerText.length);
        console.log(hex, typeof(hex))
        console.log(hex[0]);
        let rgb = []
        for(let i=0;i<hex.length;i++){
            if(isNaN(hex[i]) === true){
                console.log("aplha to deci")
                if(hex[i] === "a"){
                    rgb.push("10");
                    console.log(hex[i]);
                }
                else if(hex[i] === "b"){
                    rgb.push("11")
                    console.log(hex[i]);
                }
                else if(hex[i] === "c"){
                    rgb.push("12")
                    console.log(hex[i]);
                }
                else if(hex[i] === "d"){
                    rgb.push("13")
                    console.log(hex[i]);
                }
                else if(hex[i] === "e"){
                    rgb.push("14")
                    console.log(hex[i]);
                }
                else if(hex[i] === "f"){
                    rgb.push("15")
                    console.log(hex[i]);
                }
            }
            else
                rgb.push(hex[i]);
        }
        console.log(hex, typeof(hex))
        console.log(rgb)
        let r = parseInt(rgb[0],10)*16 + parseInt(rgb[1],10);
        console.log(r)
        let g = parseInt(rgb[2],10)*16 + parseInt(rgb[3],10);
        console.log(g)
        let b = parseInt(rgb[4],10)*16 + parseInt(rgb[5],10);
        console.log(b)
        // rgb = rgb.join("")
        // console.log(rgb)
        
        console.log(r,g,b)
        colorName.innerText = "rgb("+r+","+g+","+b+")";

    }
    else
        console.log("none");
}
