document.addEventListener('DOMContentLoaded', ()=>{

    new TypeIt(".animado",{
        speed: 100,
        loop: true
    })
    .type('Julia Angela',{delay: 900})
    .delete(12)
    .type('Designer Grafico',{delay: 500})
    .delete(18)
    .type('Desenvolvedora Front-end',{delay: 400})
    .go()

})