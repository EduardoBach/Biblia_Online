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

function acharLev(){
    var levitico = document.getElementById("levBible")
    var see = document.getElementById("bibleTextlev")
    var verse = document.getElementById("levVerseBible")
    var verseReal = verse.value;
    var leviticoReal = levitico.value;

    var levURL = `https://www.abibliadigital.com.br/api/verses/nvi/lv/${leviticoReal}/${verseReal}`

    fetch(levURL).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        see.innerHTML = data.text;
    })
}

function acharNm(){
    var numeros = document.getElementById("nmBible")
    var see = document.getElementById("bibleTextnm")
    var verse = document.getElementById("nmVerseBible")
    var verseReal = verse.value;
    var numerosReal = numeros.value;

    var nmURL = `https://www.abibliadigital.com.br/api/verses/nvi/nm/${numerosReal}/${verseReal}`

    fetch(nmURL).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        see.innerHTML = data.text;
    })
}

function acharDt(){
    var deuteronomio = document.getElementById("dtBible")
    var see = document.getElementById("bibleTextdt")
    var verse = document.getElementById("dtVerseBible")
    var verseReal = verse.value;
    var deuteronomioReal = deuteronomio.value;

    var dtURL = `https://www.abibliadigital.com.br/api/verses/nvi/dt/${deuteronomioReal}/${verseReal}`

    fetch(dtURL).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        see.innerHTML = data.text;
    })
}