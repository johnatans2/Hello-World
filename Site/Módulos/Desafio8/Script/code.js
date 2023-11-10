window.alert("Hello World!");
let nome=window.prompt("Qual é o seu nome?");
let bemvindo=window.document.querySelector('h1#boasvindas');
let hora=new Date()
let cumprimento=hora.getHours()
if(nome>=0||nome<0){
    bemvindo.innerText+=" !";
}else{
    bemvindo.innerText+=` ${nome.toUpperCase()}!`;
}
if(cumprimento<6){
    bemvindo.innerHTML+='<br/>boa madrugada !'.toUpperCase();
}else{
    if(cumprimento<12){
        bemvindo.innerHTML+='<br/>bom dia !'.toUpperCase();
    }else{
        if(cumprimento<18){
            bemvindo.innerHTML+='<br/>boa tarde !'.toUpperCase();
        }else{
            bemvindo.innerHTML+='<br/>boa noite !'.toUpperCase();
        }
    }
}
// let evento=window.document.getElementById('but');
// let evento1=window.document.querySelector('button#but1');
// let evento2=window.document.getElementsByClassName('button')[2];
// evento.addEventListener('mouseenter',Entrou)
// evento.addEventListener('mouseout',Saiu)
// function Entrou(){
//     evento.innerText='Olá';
//     evento.style.background='black';
//     evento.style.color='white'
// }
// function Saiu(){
//     evento.innerText='Clique';
//     evento.style.background='#f7e018'
//     evento.style.color='inherit'
// }
// evento.innerText='olá';
// evento1.innerHTML='olá';
// evento2.innerText='olá';