let cupOfCoffee = {
  cupType: {
    brand: 'generic'
    material: 'paper'
  }
  coffeeContents: ['Folgers Coffee', 'vanilla creamer', 'packet of sugar'],
  colors: ['white', 'brown'],
  taste: 'decent'
}



Object.entries(cupOfCoffee).forEach(entry => {
  console.log(entry);
});

console.log()