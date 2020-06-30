export class Pet {
  constructor(food, sleep, happiness) {
    this.food = food;
    this.sleep = sleep;
    this.happiness = happiness;
  }
  
  feedPet() {
    if (this.food < 100) {
      this.food += Math.floor((Math.random() * (15 - 5)) + 5);
      return this.food;
    }
  }

  playWithPet() {
    if (this.happiness < 100) {
      this.happiness += Math.floor((Math.random() * (15 - 5)) + 5);
      return this.happiness;
    }
  }

  restPet() {
    if (this.sleep < 100) {
      this.sleep += Math.floor((Math.random() * (15 - 5)) + 5);
      return this.sleep;
    }
  }

  degredation() {
    setInterval(() => {
    this.food -= Math.floor((Math.random() * (15 - 5)) + 5);
    this.sleep -= Math.floor((Math.random() * (15 - 5)) + 5);
    this.happiness -= Math.floor((Math.random() * (15 - 5)) + 5);
    this.petStatus();
    return this.food;
    }, 5000);
  }

  petStatus() {
    if ((this.food <= 0) || (this.sleep <= 0) || (this. happiness <= 0)) {
      $("#game").hide();
      $("#gameOverMessage").show();
    } else if ((this.food <= 30) || (this.sleep <= 30) || (this. happiness <= 30)) {
      alert("Your pet needs some attention!");
    }
  }
}