import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Pet } from '/src/tamagotchi.js';

$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    $("#showName").show($("#petName").val());
  });

  let newPet = new Pet(10, 10, 10);
  newPet.degredation();

  $("#feedPet").click(function() {
    newPet.feedPet();
    $("#foodBar").css("width", newPet.food)
  });

  $("#playWithPet").click(function() {
    newPet.playWithPet();
  });

  $("#restPet").click(function() {
    newPet.restPet();
  });
});