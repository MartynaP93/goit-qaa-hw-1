const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

// tak mówił trener - nie działa
// const items = ingredients.map(ingredient => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   console.log(li);}
//   )

// ulIngredients.append(...items)




// to działa - moje 
// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ulIngredients.append(li)
//   console.log(li);
// });

