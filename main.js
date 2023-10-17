var game_over = false;
var flappy_position = parseInt($("#flappy").css("top"), 10);
var gravity = 5;
var moving_length = 45;

var ppp = ["pipe1", "pipe2", "pipe3"];

//static going down si birdie
function move() {
  if (flappy_position <= 500) {
    flappy_position += gravity;
    $("#flappy").css("top", flappy_position + "px");
  } else {
    alert("Game Over");
    game_over = true;
  }
}

//up birdie up!
function move_up() {
  if (flappy_position >= 35) {
    flappy_position -= moving_length;
    $("#flappy").css("top", flappy_position + "px");
  }
}

//move pipies
function move_pipes() {
  let pipe_position;
  for (i = 0; i < 3; i++) {
    pipe_position = parseInt($(`#${ppp[i]}`).css("left"));
    pipe_position -= 25;
    if (pipe_position >= 410) {
      $(`#${ppp[i]}`).css("left", pipe_position + "px");
    } else {
      $(`#${ppp[i]}`).css("left", 950 + "px");
    }
  }
}

//create a pole
// function create_pole() {
//   let generate = Math.floor(Math.random() * (300 - 20 + 1)) + 20;
//   $("#pole_box").append(
//     `<div id = "all_pole" style="position: absolute; display: flex; align-items:center; width: 40px; height: 550px; background-color: black; left: 0px"><div style="position: absolute;width: 40px; height: 150px; background-color: white; top: ${generate}px"></div></div>`
//   );
// }

const interval = setInterval(function () {
  if (!game_over) {
    move();
  } else {
    clearInterval(interval); // Stop the interval when the game is over
  }
}, 50);

const interval1 = setInterval(function () {
  move_pipes();
}, 150);

$(document).on("keydown", function (event) {
  if (event.key === " " && !game_over) {
    move_up();
  }
});
