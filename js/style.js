let mode_button = document.querySelector("#mode");
let mode_body = document.querySelector("body");
let mode_main = document.querySelector("main#skip.about");
let img_focus = document.querySelector("div img:focus");
let img_hover = document.querySelector("div img:hover");
let button_text = document.querySelector("#input_text");

//how do i retain night mode as i load other pages on this site
//how do i get the submit button working?

mode_button.addEventListener("click", function() {
	console.log('mode button clicked');
	if (mode_button.innerHTML == "night mode") {
            mode_body.classList.add("night_mode_background");
            mode_main.classList.add("night_mode_text");
            mode_button.innerHTML = "day mode";
            img_focus.classList.add("night_mode_img_focus");
            img_hover.classList.add("night_mode_img_focus");
            button_text.classList.add("night_mode_text");
      }
      else {
            mode_body.classList.remove("night_mode_background");
            mode_main.classList.remove("night_mode_text");
            mode_button.innerHTML = "night mode";
            img_focus.classList.remove("night_mode_img_focus");
            img_hover.classList.remove("night_mode_img_focus");
            button_text.classList.remove("night_mode_text");
      }
});

