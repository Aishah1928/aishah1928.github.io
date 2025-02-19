function searchRecipes() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let recipes = document.getElementById("recipeList").getElementsByTagName("li");

    for (let i = 0; i < recipes.length; i++) {
        let recipeName = recipes[i].innerText.toLowerCase();
        if (recipeName.includes(input)) {
            recipes[i].style.display = "block";
        } else {
            recipes[i].style.display = "none";
        }
    }
}
