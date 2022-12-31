const categoriesLstEl = document.querySelector("#categories");
const allItemsArray = document.querySelectorAll(".item");
console.log("Number of categories:", allItemsArray.length);

for (let i = 0; i < allItemsArray.length; i++) {
  const itemTitle = allItemsArray[i].children[0].textContent;
  const itemElList = allItemsArray[i].children[1].children.length;
  console.log("Category: ", itemTitle);
  console.log("Elements: ", itemElList);
}
