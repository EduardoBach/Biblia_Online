var search = document.getElementById("searchBtn")
search.addEventListener("click", buscarVersiculo)

async function buscarVersiculo() {
  var livro = document.getElementById('livro').value
  var abreviacaoLivro = ''
  switch (livro.toLowerCase()) {
    case 'genesis':
      abreviacaoLivro = 'gn'
      break
    case 'exodo':
      abreviacaoLivro = 'ex'
      break
    case 'levitico':
      abreviacaoLivro = "lv"
      break
    case 'numeros':
      abreviacaoLivro = "nm"
    break
    case 'deuteronomio':
      abreviacaoLivro = "dt"
    break
    case 'josue':
      abreviacaoLivro = 'js'
    break
    case 'juizes':
      abreviacaoLivro = 'js'
    break
    case 'rute':
      abreviacaoLivro = 'rt'
    break
    case '1samuel':
      abreviacaoLivro = '1sm'
    break
    case '2samuel':
      abreviacaoLivro = '2sm'
    break
    case '1reis':
      abreviacaoLivro = '1rs'
    break
    case '2reis':
      abreviacaoLivro = '2rs'
    break
    case '1cronicas':
      abreviacaoLivro = '1cr'
    break
    case '2cronicas':
      abreviacaoLivro = '2cr'
    break
    case 'esdras':
      abreviacaoLivro = 'ed'
    break
    case 'neemias':
      abreviacaoLivro = 'ne'
    break
    case 'ester':
      abreviacaoLivro = 'et'
    break
    case 'jo':
      abreviacaoLivro = 'jo'
    break
    case 'salmos':
      abreviacaoLivro = 'sl'
    break
    case 'proverbios':
      abreviacaoLivro = 'pv'
    break
    case 'eclesiastes':
      abreviacaoLivro = 'ec'
    break
    case 'cantico dos canticos':
      abreviacaoLivro = 'ct'
    break
    case 'isaias':
      abreviacaoLivro = 'is'
    break
    case 'jeremias':
      abreviacaoLivro = 'jr'
    break
    case 'lamentações de jeremias':
      abreviacaoLivro = 'lm'
    break
    case 'ezequiel':
      abreviacaoLivro = 'ez'
    break
    case 'daniel':
      abreviacaoLivro = 'dn'
    break
    case 'oseias':
      abreviacaoLivro = 'os'
    break
    case 'joel':
      abreviacaoLivro = 'jl'
    break
    case 'amos':
      abreviacaoLivro = 'am'
    break
    case 'obadias':
      abreviacaoLivro = 'ob'
    break
    case 'jonas':
      abreviacaoLivro = 'jn'
    break
    case 'miqueias':
      abreviacaoLivro = 'mq'
    break
    case 'naum':
      abreviacaoLivro = 'na'
    break
    case 'habacuque':
      abreviacaoLivro = 'hc'
    break
    case 'sofonia':
      abreviacaoLivro = 'sf'
    break
    case 'ageu':
      abreviacaoLivro = 'ag'
    break
    case 'zacarias':
      abreviacaoLivro = 'zc'
    break
    case 'malaquias':
      abreviacaoLivro = 'ml'
    break

      // novo testamento

    case 'mateus':
      abreviacaoLivro = 'mt'
    break
    case 'marcos':
      abreviacaoLivro = 'mc'
    break
    case 'lucas':
      abreviacaoLivro = 'lc'
    break
    case 'joão':
      abreviacaoLivro = 'jo'
    break
    case 'atos':
      abreviacaoLivro = 'at'
    break
    case 'romanos':
      abreviacaoLivro = 'rm'
    break
    case '1contintios':
      abreviacaoLivro = '1co'
    break
    case '2corintios':
      abreviacaoLivro = '2co'
    break
    case 'galatas':
      abreviacaoLivro = 'gl'
    break
    case 'efesios':
      abreviacaoLivro = 'ef'
    break
    case 'filipenses':
      abreviacaoLivro = 'fp'
    break
    case 'colossenses':
      abreviacaoLivro = 'cl'
    break
    case '1tessalonicenses':
      abreviacaoLivro = '1ts'
    break
    case '2tessalonicenses':
      abreviacaoLivro = '2ts'
    break
    case '1timoteo':
      abreviacaoLivro = '1tm'
    break
    case '2timoteo':
      abreviacaoLivro = '2tm'
    break
    case 'tito':
      abreviacaoLivro = 'tt'
    break
    case 'filemom':
      abreviacaoLivro = 'fm'
    break
    case 'hebreus':
      abreviacaoLivro = 'hb'
    break
    case 'tiago':
      abreviacaoLivro = 'tg'
    break
    case '1pedro':
      abreviacaoLivro = '1pe'
    break
    case '2pedro':
      abreviacaoLivro = '2pe'
    break
    case '1joão':
      abreviacaoLivro = '1jo'
    break
    case '2joão':
      abreviacaoLivro = '2jo'
    break
    case '3joão':
      abreviacaoLivro = '3jo'
    break
    case 'judas':
      abreviacaoLivro = 'jd'
    break
    case 'apocalipse':
      abreviacaoLivro = 'ap'
    break
    default:
      // caso o livro não seja reconhecido, mostrar mensagem de erro e sair da função
      alert('Livro não encontrado')
      return
  }
  var capitulo = document.getElementById('capitulo').value
  var versiculo = document.getElementById('versiculo').value
  var elemento = document.getElementById('resultado')
  await acharLivro(abreviacaoLivro, capitulo, versiculo, elemento)
}

async function acharLivro(livro, capitulo, versiculo, elemento) {
  var url = `https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${capitulo}/${versiculo}`
  var response = await fetch(url)
  var data = await response.json()

  if (data.text === undefined) {
    elemento.innerHTML = "Versículo inexistente."
  } else {
    elemento.innerHTML = data.text
  }
  arrowBtn.style.display = "flex"
  arrowBtn.style.justifyContent = "space-between"
}


var arrowBtn = document.getElementById("arrowButtons")
var botaoAvanca = document.getElementById('foward');
var botaoRetrocede = document.getElementById('back');
var campoVersiculo = document.getElementById('versiculo');

botaoAvanca.addEventListener('click', () => {
  campoVersiculo.value = parseInt(campoVersiculo.value) + 1;
  buscarVersiculo();
});

botaoRetrocede.addEventListener('click', () => {
  campoVersiculo.value = parseInt(campoVersiculo.value) - 1;
  buscarVersiculo();
});