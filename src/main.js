import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Pet } from '../src/tamagotchi.js';

$(document).ready(function() {
  let request = new XMLHttpRequest();
  const url = `api.giphy.com/v1/gifs/{gif_id}`;
  $("form#name").submit(function(event) {
    event.preventDefault();
    $("#showName").text($("#petName").val());
    $("#game").show();
    $("form").hide();

    let newPet = new Pet(Math.floor((Math.random() * (100 - 50)) + 50), Math.floor((Math.random() * (100 - 50)) + 50), Math.floor((Math.random() * (100 - 50)) + 50));
    newPet.degredation();
    $("#foodBar").text(newPet.food);
    $("#playBar").text(newPet.happiness);
    $("#napBar").text(newPet.sleep);

    $("#feedPet").click(function() {
      newPet.feedPet();
      setInterval(() => {
        $("#sleeping").hide();
        $("#dancing").hide();
        $("#havingfun").hide();
        $("#eating").show();
      },2000);
    });

    $("#playWithPet").click(function() {
      newPet.playWithPet();
      setInterval(() => {
        $("#sleeping").hide();
        $("#dancing").hide();
        $("#havingfun").show();
        $("#eating").hide();
      },2000);
    });

    $("#restPet").click(function() {
      newPet.restPet();
      setInterval(() => {
        $("#sleeping").show();
        $("#dancing").hide();
        $("#havingfun").hide();
        $("#eating").hide();
      },2000);
    });

    setInterval(function() {
      $("#foodBar").html(newPet.food);
      $("#playBar").html(newPet.happiness);
      $("#napBar").html(newPet.sleep);
      $("#foodBar").css("width", newPet.food + "%");
      $("#playBar").css("width", newPet.happiness + "%");
      $("#napBar").css("width", newPet.sleep + "%");
    });

    $("#tryAgain").click(function() {
      location.reload();
      return false;
    });
  });
});