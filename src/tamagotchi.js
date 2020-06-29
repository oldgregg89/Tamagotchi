export class Pet {
  constructor() {
    this.food = 10;
    this.sleep = 10;
    this.happiness = 10;
  }
  
  feedPet() {
    if (this.food < 10) {
      this.food += 1
      return this.food;
    }
  }

  playWithPet() {
    if (this.happiness < 10) {
      this.happiness += 1
      return this.happiness;
    }
  }

  restPet() {
    if (this.sleep < 10) {
      this.sleep += 1
      return this.sleep;
    }
  }

  degredation() {
    setInterval(() => {
    this.food -= 1;
    this.sleep -= 1;
    this.happiness -= 1;
    this.petStatus();
    return this.food;
    }, 200000);
  }

  petStatus() {
    if ((this.food <= 0) || (this.sleep <= 0) || (this. happiness <= 0)) {
      alert("You suck at taking care of your animal");
    } else if ((this.food <= 3) || (this.sleep <= 3) || (this. happiness <= 3)) {
      alert("Your pet needs some attention!");
    }
  }
}