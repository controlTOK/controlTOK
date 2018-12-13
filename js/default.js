var remote, current, ref, song1, song2, song3, song4
control = $('#control')
receiver = $('#receiver')
ref = firebase.database().ref("song");
song1 = new Audio("./css/song1.mp3");
song2 = new Audio("./css/song2.mp3");
song3 = new Audio("./css/song3.mp3");
song4 = new Audio("./css/song4.mp3");
ref.remove();

function updatesong(number) {
  ref.set(number)
}

control.click(function(e){
  remote = true
  $('#control').css("background-color", "green")
  $('#receiver').css("background-color", "red")
});

receiver.click(function(e){
  receiver = true
  $('#control').css("background-color", "red")
  $('#receiver').css("background-color", "green")
});

$('#song1').click(function(e){
  if (remote) {
    updatesong("1")
  }
});
$('#song2').click(function(e){
  if (remote) {
    updatesong("2")
  }
});
$('#song3').click(function(e){
  if (remote) {
    updatesong("3")
  }
});
$('#song4').click(function(e){
  if (remote) {
    updatesong("4")
  }
});

ref.on('value', function(snapshot) {
  if (receiver && !remote) {
    console.log(snapshot.val())
    eval("song" + snapshot.val() + ".play()")
    // current.play()
  }
});

// setInterval(function(){
//   if (!remote) {
//     song = new Audio("./css/song" + current + ".mp3");
//     song.play()
//   }
// }, 1000);
