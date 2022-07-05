import Character from './character';
export default class Bowerman extends Character {
    constructor(name) {
        super(name);
        this.type = 'Bowman';
        this.attack = 25;
        this.deffence = 25;
    }
  }