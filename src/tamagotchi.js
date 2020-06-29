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

  degregation(){
    setInterval(() => {
    this.food -= 1;
    this.sleep -= 1;
    this.happiness -= 1;
    return this.food;
    // if (this.food< 0){
      
    // }
  }, 20000);
}
  // setInterval(degregation(){
  // }, 2000);
}