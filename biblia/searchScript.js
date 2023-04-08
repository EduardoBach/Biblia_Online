async function buscarVersiculo() {
    const livro = document.getElementById('livro').value
    const capitulo = document.getElementById('capitulo').value
    const versiculo = document.getElementById('versiculo').value
    const elemento = document.getElementById('resultado')
    await acharLivro(livro, capitulo, versiculo, elemento)
}

async function acharLivro(livro, capitulo, versiculo, elemento) {
    const url = `https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${capitulo}/${versiculo}`
    const response = await fetch(url)
    const data = await response.json()
    elemento.innerHTML = data.text
}