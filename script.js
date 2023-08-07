function result() {
    //variaveis
    const itens = document.querySelectorAll('li')
    const button = document.querySelector('button')
    //funcao para pegar o numero escolhido
    itens.forEach((item) => {
        item.addEventListener('click', getNumber)
        function getNumber() {
            button.addEventListener('click', sendNumber)
            function sendNumber() {
                const result = document.querySelector('.result')
                result.innerText = item.innerText
                const select = document.querySelector('.select')
                const thank = document.querySelector('.thank')
                thank.classList.add('active')
                select.classList.add('active')
            }
        }
    })
   
    itens.forEach((item)=>{
        item.addEventListener('click',active)
    })

    function active(){
        itens.forEach((item)=>{
            item.classList.remove('active')
        })
        this.classList.add('active')
    }
  
}
result()