function achar(){
    var genesis = document.getElementById("gnBible")
    var see = document.getElementById("bibleText")

    var gnURL = `https://www.abibliadigital.com.br/api/verses/nvi/gn/1`

    fetch(gnURL).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        
        caps = genesis.value
        realCaps = caps - 1
        
        see.innerHTML = data.verses[realCaps].text
    })
    
}