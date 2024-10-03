
const titulo = document.getElementById('titulo')
console.log("titulo");

titulo.innerText = 'Alterando Título e Mostrando no Console'

const link = document.querySelector('a');
console.log("a");

link.innerText = 'Alterando texto do link: Site da Proz e mostrando no Console'


let listaNaoOrdenada = document.querySelector('ul')
console.log("ul");

let listaOrdenada = document.querySelector('ol')
console.log("ol");


listaNaoOrdenada.innerHTML = `
  <li>internet</li>
  <li>browser</li>
  <li>navegador</li>
`

listaOrdenada.innerHTML = `
  <li><a href="https://www.instagram.com/">Instagram</a></li>
  <li><a href="https://web.telegram.org/">telegram</a></li>
  <li><a href="https://web.telegram.org">Facebook</a></li>
`