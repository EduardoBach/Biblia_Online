document.getElementById("searchBtn").addEventListener("click", buscarReceita);

async function buscarReceita() {
  const recipeName = document.getElementById('recipeName').value.trim();
  const elemento = document.getElementById('resultado');

  if (recipeName === '') {
    alert('Por favor, insira o nome da receita.');
    return;
  }

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(recipeName)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.meals) {
      elemento.innerHTML = 'Receita não encontrada.';
      return;
    }

    const receita = data.meals[0];
    elemento.innerHTML = `
      <h2>${receita.strMeal}</h2>
      <img src="${receita.strMealThumb}" alt="${receita.strMeal}" style="width: 300px;"/>
      <p><strong>Categoria:</strong> ${receita.strCategory}</p>
      <p><strong>Origem:</strong> ${receita.strArea}</p>
      <p><strong>Instruções:</strong> ${receita.strInstructions}</p>
    `;
  } catch (error) {
    elemento.innerHTML = 'Ocorreu um erro ao buscar a receita.';
    console.error('Erro:', error);
  }
}
