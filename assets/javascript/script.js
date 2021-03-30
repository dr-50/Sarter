var output = document.getElementById('output');



// Admin functions
// NavBar
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
// End NavBar

// start of image loader

console.log(output);
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function(){
        if (this.files && this.files[0]){           
            var img = document.querySelector('img'); 
            img.src=URL.createObjectURL(this.files[0]); // set src to file url
            img.height=150;
            img.width=150;
            
            var importBtn = document.createElement("button");
            importBtn.id="importBtn";
            importBtn.textContent="Submit"
            output.appendChild(importBtn);
            importBtn.onclick=function(){alert("image would have been loaded if the creater wasn't so slow at building out the functionality")}
            
            var importCancelBtn = document.createElement("button");
            importCancelBtn.id="importCancelBtn";
            importCancelBtn.textContent="Cancel"
            output.appendChild(importCancelBtn);
            importCancelBtn.onclick=function(){
                location.reload();}

        }
    })
})
// end of image loader

//start of image arranger
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// End of Admin functions