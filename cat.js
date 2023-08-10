
import Animal from './animal.js'
export default class Cat extends Animal{

constructor (name,species,color){
super(name,species);
this.color=color;
}

speak(){

console.log (`"Meow! I'm ${this.name}, a ${this.color} cat`);
}

}