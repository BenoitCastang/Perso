import {Cat} from "./cat_class";
import {Dog} from "./dog_class";

const lGarfield = new Cat();
lGarfield.mName = 'Garfield';
lGarfield.run();
lGarfield.meow();

const lOdie = new Dog;
lOdie.mName = 'Odie';
lOdie.run();

console.log(lOdie.mName+'fait'+lOdie.bark());
