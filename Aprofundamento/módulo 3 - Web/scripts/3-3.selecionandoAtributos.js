const  input  = document.querySelector('input')
const  select = document.querySelector('select')
const  button = document.querySelector('button')


input.addEventListener('focus', ()=>{
    alert('Dei um foco')
})


select.addEventListener('change', () => {
    alert(select.value)
}) 


button.addEventListener('click', () => {
    alert('O botao foi clicado!')
})
