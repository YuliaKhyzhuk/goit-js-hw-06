const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');

const createIngredient = ingredient => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList.add('item')

  // firstItem.textContent = "Ajax";
  ingredientItemEl.textContent = ingredient;

  return ingredientItemEl;
}

const recipeIngredients = ingredients.map(ingredient => createIngredient(ingredient));

ingredientList.append(...recipeIngredients);