const button = document.querySelectorAll(".bttsArms")
var imgArm2;


function handleEvent (event){
    imgArm2 = event.target.nextSibling.parentElement.firstElementChild
    
    async function uso(button) {
    const res = await fetch("main.json");
    const data = await res.json();

    //estado e imagem dos armarios usando dados do arquivo json

    if (button.classList.contains("arm-desocupado")) {
        button.classList.remove("arm-desocupado")
        button.classList.add("arm-ocupado")
        button.textContent = data.estado[2];
        imgArm2.src = data.imagem[1]; 
    }
    else if (button.classList.contains("arm-ocupado")) {
        button.classList.remove("arm-ocupado");
        button.classList.add("arm-manutencao");
        button.textContent = data.estado[1];
        imgArm2.src = data.imagem[2];
    }
    else {
        button.classList.remove("arm-manutencao");
        button.classList.add("arm-desocupado");
        button.textContent = data.estado[0];
        imgArm2.src = data.imagem[0];
    }

}
uso(event.target)

}

button.forEach((button) =>{
    button.addEventListener('click', handleEvent);
})
