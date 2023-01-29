function pesquisar(){
    var texto = document.getElementById("biblia")
    let cap = Math.floor(Math.random() * 15)
    let vers = Math.floor(Math.random() * 10)
    var chapters =["mt","mc","lc","jo","at","rm","1co","2co","gl","ef","fp","cl","1ts","2ts",
    "1tm","2tm","tt","fm","hb","tg","1pe","2pe","1jo","2jo","3jo","jd","ap"]
    var sort = Math.floor(Math.random() * chapters.length);

    let url = `https://www.abibliadigital.com.br/api/verses/nvi/${chapters[sort]}/${cap}/${vers}`

        fetch(url).then((resp)=>{
            return resp.json()
        }).then((data)=>{
            texto.innerHTML = data.text
        })

    var sigla = document.getElementById("sigla")
    var numberCap = document.getElementById("numberCap")
    var numberVers = document.getElementById("numberVers")

    var ss = chapters[sort]

    sigla.innerHTML = ss.charAt(0).toUpperCase() + ss.slice(1);
    numberCap.innerHTML = cap
    numberVers.innerHTML = vers

}



