// cours js;

// [] = tableau

//  camelcase pascalcase snakecase;

console.log("script");

let string = "string";
let numberstr = "1";

console.log(string, "string");

let t = true;
let f = false;

// if (condition);

// old scholl
function test(params) {
  let number = 1;
  if (number <= 0) {
    console.log(params + "faux");
  } else if (number >= 1) {
    console.log(params + "vrai");
  }
}

test("Vous avez");

// arguments
function add (valuel, valuel2){
    return valuel + valuel2
}
console.log(add (2,2))


// programmation fonctionnelle

function test2() {
    // fonctions fléchées
    // alert("programation fonctionnelle");
};
 test2()

let img = document.querySelector ("img");
console.log(img)

img.onclick = function onclick(params) {
    alert("programmation fonctionnelle");
};
    





// concaténation(+)
let z = "salut";
let x = "toi";                       
console.log(z + x);