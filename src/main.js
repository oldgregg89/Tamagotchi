import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Pet } from '../src/tamagotchi.js';

$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    $("#showName").text($("#petName").val());
    $("#game").show();
    $("form").hide();
    $("#foodBar").text(newPet.food);
    $("#playBar").text(newPet.happiness);
    $("#napBar").text(newPet.sleep);
  });

  let newPet = new Pet(10, 10, 10);
  newPet.degredation();

  $("#feedPet").click(function() {
    newPet.feedPet();
  });

  $("#playWithPet").click(function() {
    newPet.playWithPet();
  });

  $("#restPet").click(function() {
    newPet.restPet();
  });

  let reduce = setInterval(function() {
    $("#foodBar").css("width", newPet.food + "10%");
  })
});