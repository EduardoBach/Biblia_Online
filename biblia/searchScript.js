function achar(){
    var genesis = document.getElementById("gnBible")
    var see = document.getElementById("bibleText")
    var verse = document.getElementById("gnVerseBible")
    var verseValue = verse.value;
    var genesisReal = genesis.value

    var gnURL = `https://www.abibliadigital.com.br/api/verses/nvi/gn/${genesisReal}/${verseValue}`

    fetch(gnURL).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        see.innerHTML = data.text;
    })
    
}

function acharEx(){
   var exodo = document.getElementById("exBible")
   var see = document.getElementById("bibleTextex")
   var verse = document.getElementById("exVerseBible")
   var verseReal = verse.value;
   var exodoReal = exodo.value;

   var exURL = `https://www.abibliadigital.com.br/api/verses/nvi/gn/${exodoReal}/${verseReal}`

   fetch(exURL).then((resp)=>{
    return resp.json()
   }).then((data)=>{
    see.innerHTML = data.text;
   })
}