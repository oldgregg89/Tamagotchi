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

  let newPet = new Pet(Math.floor((Math.random() * 10) + 7), Math.floor((Math.random() * 10) + 7), Math.floor((Math.random() * 10) + 7));
  newPet.degredation();

  $("#feedPet").click(function() {
    newPet.feedPet();
    setInterval(() => {
      $("#sleeping").hide()
      $("#dancing").hide()
      $("#havingfun").hide()
      $("#eating").show()
    },2000);
  });

  $("#playWithPet").click(function() {
    newPet.playWithPet();
    setInterval(() => {
      $("#sleeping").hide()
      $("#dancing").hide()
      $("#havingfun").show()
      $("#eating").hide()
    },2000);
  });

  $("#restPet").click(function() {
    newPet.restPet();
    setInterval(() => {
      $("#sleeping").show()
      $("#dancing").hide()
      $("#havingfun").hide()
      $("#eating").hide()
    },2000);
  });

  let reduce = setInterval(function() {
    $("#foodBar").html(newPet.food);
    $("#playBar").html(newPet.happiness);
    $("#napBar").html(newPet.sleep);
    $("#foodBar").css("width", newPet.food + "%");
    $("#playBar").css("width", newPet.happiness + "%");
    $("#nap").css("width", newPet.sleep + "%");
  })

  $("#tryAgain").click(function() {
    location.reload();
  });
});