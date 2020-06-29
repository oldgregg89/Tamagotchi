import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function() {
  ("#name").submit(function() {
    event.preventDefault();
    
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
});