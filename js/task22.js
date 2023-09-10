/**
*? Зробіть знижку 20% на всі фрукти у масиві
*? Надайте ід для кожного продукту
*/

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];


  const descontFruits = fruits.map(fruit => {
    console.log(fruit);
    return {
        id:Math.random(),
    ...fruit, 
    price:fruit.price * 0.8

    }
    
  })
  console.log(descontFruits)