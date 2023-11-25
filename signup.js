let x = 0;

document.getElementById("flexSwitchCheckChecked").addEventListener('click',changePrice )

function changePrice(){
    x++;
    if(x%2 ==0){
        document.querySelector("#basic-price").innerHTML = "฿600"
        document.querySelector("#pro").innerHTML = "฿800"
        document.querySelector("#premium").innerHTML = "฿1000"

    }else{
        document.querySelector("#basic-price").innerHTML = "฿1500"
        document.querySelector("#pro").innerHTML = "฿2100"
        document.querySelector("#premium").innerHTML = "฿2700"

    }

}

// document.querySelector(".btnicon").addEventListener('click',function(){
//     document.querySelector("#tymsg").style.display = "block";
//     setTimeout(function(){
//         document.querySelector("#tymsg").style.display = "none";
//         // document.querySelector("form").reset();

//     },3000)
// })