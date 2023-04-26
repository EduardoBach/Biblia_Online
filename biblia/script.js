var search = document.getElementById("pesquisar")
var maxTries = 10
var tryCount = 0

search.addEventListener("click", pesquisar)

function pesquisar(){
    var texto = document.getElementById("biblia")
    let cap = Math.floor(Math.random() * 15)
    let vers = Math.floor(Math.random() * 10)
    var chapters =["gn","ex","lv","nm","dt","js","jz","rt","1sm","2sm","1rs","2rs",
    "1cr","2cr","ed","ne","et","jo","sl","pv","ec","ct","is","jr","lm","ez","dn","os","jl","am",
    "ob","jn","mq","na","hc","sf","ag","zc","ml",
    "mt","mc","lc","jo","at","rm","1co","2co","gl","ef","fp","cl","1ts","2ts",
    "1tm","2tm","tt","fm","hb","tg","1pe","2pe","1jo","2jo","3jo","jd","ap"]
    var sort = Math.floor(Math.random() * chapters.length);

    let url = `https://www.abibliadigital.com.br/api/verses/nvi/${chapters[sort]}/${cap}/${vers}`

    fetch(url)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        if (data && data.text) {
            texto.innerHTML = data.text
        } else {
            tryCount++
            if (tryCount < maxTries) {
                pesquisar()
            } else {
                texto.innerHTML = "Não foi possível obter um versículo da Bíblia. Tente novamente."
            }
        }
    })


    var sigla = document.getElementById("sigla")
    var numberCap = document.getElementById("numberCap")
    var numberVers = document.getElementById("numberVers")

    var ss = chapters[sort]

    sigla.innerHTML = "Livro: " + ss.charAt(0).toUpperCase() + ss.slice(1);
    numberCap.innerHTML = "Capitulo: " + cap
    numberVers.innerHTML = "Numero: " + vers

}


