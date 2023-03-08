let person = {
    firstName: "John",
    lastName: "Erwin",
    age: 19
}

// console.log(person.firstName, person.lastName)

let meal = {
    appetizer: 'Rolls',
    entree: 'Steak',
    dessert: 'Shake', 
    drink: 'Lemonaid'
}

// const dessert = meal.dessert

        // const {dessert} = meal
const {appetizer, drink: bestDrinkEver, entree, dessert} = meal

// let {drink: bestDrinkEver, appetizer, entree} = meal

// console.log(appetizer, bestDrinkEver, entree, dessert)

// for (let key in meal) {
//     console.log(`for ${key} I had ${meal[key]}.`)
// }

person.job = 'Statistical Analysis and Data Reconfiguration'

person.pets = ['Duck', 'Chicken']

person.scaresTheBegeesus = 'Michael Flatley Lord of the Dance'

// console.log(person)

delete meal.dessert



//Classes   CLASSNAME {
//   constructor(VALUES FROM INSTANCE) {
//      this.KEY = VALUE
//   }

//      METHOSNAME(PARAMS){
//             CODE BLOCK
//   }
// }
class Pet {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Turt extends Pet {
    constructor(name, age, breed) {
        super(name, age)

        this.breed = breed
    }

    bark() {
        console.log(`Bark! My name is ${this.name}`)
    }
}

let bert = new Turt('Bert', 5, 'desert tortiose')

console.log(bert)

bert.bark()