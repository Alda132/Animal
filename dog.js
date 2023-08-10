import Animal from  './animal.js';
export default class dog extends Animal {

constructor (name,species,breed){
super(name,species);
this.breed=breed;

}

speak(){

if (!this.breed){
  console.log(`Woof! I'm ${this.name} and i dont know my breed`);

}else {

console.log(`Woof! I'm ${this.name}, a ${this.breed} dog.`);
}
}


}