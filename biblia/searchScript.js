function achar(){
    var genesis = document.getElementById("gnBible")
    var see = document.getElementById("bibleText")

    var gnURL = `https://www.abibliadigital.com.br/api/verses/nvi/gn/1`

    fetch(gnURL).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        
      var caps = genesis.value
      var realCaps = caps - 1
        
        see.innerHTML = data.verses[realCaps].text
    })
    
}

function acharEx(){
    var exodo = document.getElementById("exBible")
    var see = document.getElementById("bibleTextex")

    var exURL = `https://www.abibliadigital.com.br/api/verses/nvi/ex/1`

    fetch(exURL).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        var caps = exodo.value;
        var realCaps = caps - 1

        see.innerHTML = data.verses[realCaps].text
    })
}