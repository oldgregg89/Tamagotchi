import { Pet } from './../src/tamagotchi.js'

describe('Pet', () => {
  let newPet;
  
  beforeEach(function () {
  newPet = new Pet (10, 10, 10);
  });

  test('should verify that the Pet constructor with the properties of food, sleep, and happiness', () => {
    expect(newPet.food).toEqual(10);
    expect(newPet.sleep).toEqual(10);
    expect(newPet.happiness).toEqual(10);
  });
});