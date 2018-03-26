const socket = io.connect();
const abutton = document.getElementById("A_Button");
const textfield = document.getElementById("Text_Field");
const chotbax = document.getElementById("Chotbax");
const namefield = document.getElementById("Name_box");

var chotstring = "";

abutton.addEventListener('click',()=>{
  socket.emit("Event",namefield.value + ": " + textfield.value)
});

textfield.addEventListener('keydown',(e)=>{
  if(e.keyCode == 13){
    socket.emit("Event",namefield.value + ": " + textfield.value)
    textfield.value = "";
  }
});

socket.on("Event_2",(data)=>{
  chotstring += data + "<br>";
  Chotbax.innerHTML = chotstring;
})
