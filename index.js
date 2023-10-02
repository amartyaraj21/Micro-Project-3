// syntax for jason file 

const foodata = require('./food.json');

// list all the food items
function All_food_items(fooditem) {
    return fooditem.map(items => items.foodname);
}
console.log("All the food item are", All_food_items(foodata));


// list all the food items with category vegetables.

function listvegetable(data) {
    return data.filter(item => item.category === 'Vegetable').map(item => item.foodname);

}
console.log("All the food items with category vegetables ", listvegetable(foodata));

// list all the food items with category fruit.
function Listfruit(data) {
    return data.filter((item) => item.category === 'Fruit').map((item) => item.foodname)
};
console.log("All the food items with category fruit", Listfruit(foodata));

// list all the food items with category protien

function protienItem(data) {
    return data.filter(item => item.category === 'Protein').map(item => item.foodname);
}
console.log("all the food items with category protien", protienItem(foodata));

// list all the  food item with category nuts.

function nutsitems(data) {
    return data.filter((item) => item.category === 'Nuts').map((item) => item.foodname);

}
console.log("All the food items with category of Nuts", nutsitems(foodata));

// All the food items with category of grains.


function GrainsItems(data) {

    return data.filter((item) => item.category === "Grain").map((item) => item.foodname);
}
console.log("list all the  Grains", GrainsItems(foodata));

// list all the food items with calorie of Dairy.
function dairyItem(data) {
    return data.filter((item) => item.category === 'Dairy').map(item => item.foodname);
}
console.log("All Dairy item", dairyItem(foodata));

// list all the food items with calorie above 100.

function calorie_100(data) {
    return data.filter((item) => item.calorie > 100).map((item) => item.foodname)
}
console.log("All the food items with calorie above 100", calorie_100(foodata));

// list All the food items with calorie below 100.
function calorieBelow_100(data) {
    return data.filter(item => item.calorie < 100).map(item => item.foodname);
}
console.log("All the food items with calorie below 100", calorieBelow_100(foodata));

// list all the food items with highest protien content to lowest

function sortedByProtein(data) {
    return data.slice().sort((x, y) => y.protiens - x.protiens).map(item => item.foodname);
}
console.log("all the food items with highest protien content to lowest", sortedByProtein(foodata));

// list all the food items with lowest cab content to highest
function sortedByCab(data) {
    return data.slice().sort((x, y) => x.cab - y.cab).map(item => item.foodname);
}
console.log("all the food items with lowest cab content to highest", sortedByCab(foodata));