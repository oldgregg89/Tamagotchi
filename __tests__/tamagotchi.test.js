import { Pet } from './../src/tamagotchi.js'

describe('Pet', () => {
  let newPet;
  jest.useFakeTimers();
  
  beforeEach(function () {
  newPet = new Pet (9, 9, 9);
  newPet.degredation();
  });

  test('should verify that the Pet constructor with the properties of food, sleep, and happiness', () => {
    expect(newPet.food).toEqual(9);
    expect(newPet.sleep).toEqual(9);
    expect(newPet.happiness).toEqual(9);
  });

  test('Should show the feed property works with raising the lvl of the tamagotchi', () => {
    expect(newPet.feedPet()).toEqual(10);
  });

  test('Should verify they are losing sleep, happiness, food in intervals', () => {
    jest.advanceTimersByTime(20000);
    expect(newPet.food).toEqual(8);
    expect(newPet.happiness).toEqual(8);
    expect(newPet.sleep).toEqual(8);
  });

  test('Should verify that the pet is gaining sleep', () => {
    expect(newPet.restPet()).toEqual(10);
  });

  test('Should verify that the pet is gaining happiness', () => {
    expect(newPet.playWithPet()).toEqual(10);
  });
});