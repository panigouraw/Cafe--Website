let PopupLayer = document.getElementById("popupLayer");
let PopupMessage = document.getElementById("popupMessage");
let ClosePopup = document.getElementById("closePopup");

let buttons = document.querySelectorAll(".buyBtn");

buttons.forEach(function(button){

    button.onclick = function(){

        PopupLayer.style.display = "flex";

        let productName=this.parentElement.querySelector("h3").innerHTML;

        PopupMessage.innerHTML=
        productName + "Added Successfully";

    }

});

ClosePopup.onclick = function(){

    PopupLayer.style.display = "none";

}
