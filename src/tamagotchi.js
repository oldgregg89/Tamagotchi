export class Pet {
  constructor(food, sleep, happiness) {
    this.food = food;
    this.sleep = sleep;
    this.happiness = happiness;
  }
  
  feedPet() {
    this.food += 1
    return this.food;
  }
}