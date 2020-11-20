<<<<<<< HEAD


(function(){
    let target=document.querySelector("#target");
    let bouton=document.querySelector("#clickMe");
    let titre=document.querySelector("#titre");
    let titreInitial=titre.textContent;
    console.log('titreInitial:', titreInitial)

    let texte;
    let compliments=["T'es trop cool","T'as l'air plutôt sympa","Belle gueule, dis-donc!","J'adore ton sourire"];
    let nbCompl=compliments.length-1;
    let random;



    bouton.addEventListener("click",function compliment(){
        target.removeChild(bouton);
        texte=document.createElement("p");
        target.appendChild(texte);
        random=Math.floor(Math.random()*nbCompl);

        titre.innerHTML="Compliment me...";

        texte.innerHTML=compliments[random];
        setTimeout(function(){
            target.removeChild(texte);
            target.appendChild(bouton);
            titre.innerHTML="Clique encore si tu l'oses..."
        }, 5000)
    });

}())
=======
setTimeout(function(){ alert("Hello"); }, 3000);
>>>>>>> be1202701eceaf9d72de32ae34e6325f93ee2180
