var search = document.getElementById("pesquisar");

search.addEventListener("click", pesquisar);

function pesquisar() {
    var nomeReceita = document.getElementById("nomeReceita");
    var imagemReceita = document.getElementById("imagemReceita");
    var categoriaReceita = document.getElementById("categoriaReceita");
    var instrucoesReceita = document.getElementById("instrucoesReceita");

    let url = "https://www.themealdb.com/api/json/v1/1/random.php";

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        if (data.meals && data.meals.length > 0) {
            let receita = data.meals[0];
            nomeReceita.innerHTML = receita.strMeal;
            imagemReceita.src = receita.strMealThumb;
            categoriaReceita.innerHTML = "Categoria: " + receita.strCategory;
            instrucoesReceita.innerHTML = "Instruções: " + receita.strInstructions;
        } else {
            nomeReceita.innerHTML = "Não foi possível obter uma receita. Tente novamente.";
        }
    })
    .catch(() => {
        nomeReceita.innerHTML = "Erro ao buscar a receita. Verifique sua conexão.";
    });
}
