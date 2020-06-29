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

  playWithPet() {
    this.happiness += 1
    return this.happiness;
  }

  restPet() {
    this.sleep += 1
    return this.sleep;
  }

  degredation(){
    setInterval(() => {
    this.food -= 1;
    this.sleep -= 1;
    this.happiness -= 1;
    return this.food;
  }, 20000);
}
}