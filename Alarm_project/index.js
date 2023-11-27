var time;
var tune;
let time_dd = document.querySelector('#times');
time_dd.addEventListener('onchange',()=>{
  console.log(time_dd);
})

function submitTime() {
  let selectedDD = document.querySelector('#slcAudios');
  // let time_dd = document.querySelector('#times');
  console.log(time_dd);
  var timeInput = document.getElementById("timeInput").value;
  if (timeInput == "") {
    alert("Please select time");
  } else {
    alert("Time Selected 🌤️ " + time_dd.options[time_dd.innerText]);
  }
  time = time_dd.options[time_dd.selectedIndex];
  tune = selectedDD.options[selectedDD.selectedIndex].innerText;
  console.log(selectedDD.options[selectedDD.selectedIndex].innerText);
  alert(selectedDD.options[selectedDD.selectedIndex].innerText + " is selected as a tune");
  createAlarmStickyNotes();
}

let add_btn = document.querySelector('button');
let crtNotes = document.querySelector('.left');
// add_btn.addEventListener('click', () => {
console.log(add_btn);
let createAlarmStickyNotes = function () {
  let note = document.createElement('div');
  note.classList.add('container-inner');
  // note.style.color = color;
  note.innerHTML = `
    <div class="sticky-container">
      <div class="sticky-outer">
        <div class="sticky">
          <svg width="0" height="0">
            <defs>
              <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                <path
                      d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                      stroke-linejoin="round"
                      stroke-linecap="square"
                      />  
              </clipPath>
            </defs>
          </svg>
          <div class="sticky-content">
          <p class="pin"><span class="material-symbols-outlined">
           Alarm 
          </span>
          <audio controls>
          <source src="./assets/Audios/over-the-horizon-41499.mp3" type="audio/mpeg">
          Your browser does not support the audio tag.
        </audio>   
          </p>
          <p>Time:-${time}</p>

          </div>
        </div>
      </div>
  </div>`;
  crtNotes.appendChild(note);
}

// });

