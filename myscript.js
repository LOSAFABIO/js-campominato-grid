let play = document.getElementById("play");

play.addEventListener(`click`, function(){
    let contenitore = document.querySelector(".tabella");
    
    let livelli = document.getElementById("livelli");
    contenitore.innerHTML = " ";

    if (livelli == "facile") {
        for (let i=0; i<100; i++){
            contenitore[i].innerHTML += `<div class="box"> `+ i +` </div>` 
        }
    } else if (livelli == "medio") {
        for (let j=0; j<81; j++){
            contenitore[j].innerHTML += `<div class="box"> `+ j +` </div>` 
        }
    } else if (livelli == "difficile") {
        for (let k=0; k<49; k++){
            contenitore[k].innerHTML += `<div class="box"> `+ k +` </div>` 
        }
    }  
    
})

// if(livelli == "vuoto"){
//     contenitore.innerHTML = " ";
// } else 