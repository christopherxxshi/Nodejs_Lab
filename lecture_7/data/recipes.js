const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("uuid");

module.exports = {
    getAllRecipes:getAllRecipes,
    getRecipeById:getRecipeById,
    addRecipe:addRecipe,
    replaceRecipe:replaceRecipe,
    deleteRecipe:deleteRecipe,
    updateRecipe:updateRecipe
};

async function getAllRecipes (){
    const recipeCollections = await recipes();
    let allRecipes = await recipeCollections.find({}).toArray();
    let outputRecipes = allRecipes.map(item => {
        return {_id : item._id, title : item.title};
    })
    return outputRecipes;
};

async function getRecipeById (id) {
    if(!id){
        throw "you must provide an ID";
    }
    const recipeCollections = await recipes();
    let recipe = await recipeCollections.findOne({_id:id});

    if(!recipe){
        throw "Cannot find recipe by this ID";
    }

    return recipe;
};

async function addRecipe (title, ingredients, steps){
    if(!title || typeof title !== 'string'){
        throw "You must provide a title";
    }
    if(!ingredients || !Array.isArray(ingredients)){
        throw "You must provide an Array as ingredients";
    }
    if(!steps || !Array.isArray(steps)){
        throw "You must provide an Array as steps";
    }

    for(let i = 0; i < ingredients.length; i++){
        if(!ingredients[i].name){
            throw "You must provide the name of this ingredient";
        }
        if(!ingredients[i].amount){
            throw "You must provide the amount of this ingredient";
        }
    }

    for(let i = 0; i < steps.length; i++){
        if(typeof steps[i] !== "string"){
            throw "you must provide a string as each step";
        }
    }
    
    let newRecipe = {
        "_id": uuid.v4(),
        "title": title,
        "ingredients":ingredients,
        "steps":steps
    };

    const recipeCollections = await recipes();
    await recipeCollections.insertOne(newRecipe);
    return await getRecipeById(newRecipe._id);
};

async function replaceRecipe (id, newRecipe){
    if(!id){
        throw "you must provide an ID";
    }
    if(!newRecipe.title || typeof newRecipe.title !== 'string'){
        throw "You must provide a title";
    }
    if(!newRecipe.ingredients || !Array.isArray(newRecipe.ingredients)){
        throw "You must provide an Array as ingredients";
    }
    if(!newRecipe.steps || !Array.isArray(newRecipe.steps)){
        throw "You must provide an Array as steps";
    }

    for(let i = 0; i < newRecipe.ingredients.length; i++){
        if(!newRecipe.ingredients[i].name){
            throw "You must provide the name of this ingredient";
        }
        if(!newRecipe.ingredients[i].amount){
            throw "You must provide the amount of this ingredient";
        }
    }

    for(let i = 0; i < newRecipe.steps.length; i++){
        if(typeof newRecipe.steps[i] !== "string"){
            throw "you must provide a string as each step";
        }
    }

    const recipeCollections = await recipes();
    await recipeCollections.updateOne({_id:id},{$set:newRecipe});
    return await getRecipeById(id);
};

async function deleteRecipe (id){
    if(!id){
        throw "you must provide an ID";
    }
    const recipeCollections = await recipes();
    await recipeCollections.removeOne({_id:id});
    return true;
};

async function updateRecipe (id, updatedRecipe){
    const recipeCollections = await recipes();
    const updatedRecipeData = {};
    if(updatedRecipe.title){
        if(typeof updatedRecipe.title !== "string") throw "you must provide a string as title";
        updatedRecipeData.title = updatedRecipe.title;
    }
    if(updatedRecipe.ingredients){
        if(!Array.isArray(updatedRecipe.ingredients)) throw "you must provide a array as ingredients";
        updatedRecipeData.ingredients = updatedRecipe.ingredients;
    }
    if(updatedRecipe.steps){
        if(!Array.isArray(updatedRecipe.steps)) throw "you must provide a array as steps";
        updatedRecipeData.steps = updatedRecipe.steps;
    }

    await recipeCollections.updateOne({_id:id},{$set:updatedRecipeData});
    return await getRecipeById(id);
}
