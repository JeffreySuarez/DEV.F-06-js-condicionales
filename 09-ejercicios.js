// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

let oreo = 10;
let kitkat = 15;
let brownie = 20;
let sinTopping = 50;

let solicitudHelado = prompt("por favor agregar el topping del helado: ").toLowerCase();

if (solicitudHelado === "oreo") {
  console.log(`El valor del helado es:--> $ ${sinTopping + oreo} MXN `);
} else if (solicitudHelado === "kitkat") {
  console.log(`El valor del helado es:--> $ ${sinTopping + kitkat} MXN `);
} else if (solicitudHelado === "brownie") {
  console.log(`El valor del helado es:--> $ ${sinTopping + brownie} MXN `);
} else {
  console.log(`No tenemos este topping, lo sentimos. El valor del helado es:--> $ ${sinTopping} MXN `);
}
