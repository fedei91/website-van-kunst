/* possible fix for erasing the labels

 const labels = document.querySelectorAll('.lb-number');

    labels.forEach(
        label => {
            label.remove();
        }
    )

*/    
const navbar = document.getElementById('navbar_wrapper');
                const popup = document.querySelector('.popup');
                const close = document.querySelector('.close');
                const kunst = document.querySelector('.kunst');
                window.onload = function () {

                        popup.style.display = "block";
                        navbar.style.filter = "blur(5px)";
                        
                        navbar.style.pointerEvents = "none";
                        kunst.style.pointerEvents = "none";
                        // time delay for popup
                }

                close.addEventListener('click', function (e) {
                        popup.style.display = "none";
                        navbar.style.display = "block";
                        navbar.style.filter = "blur(0)";
                        kunst.style.filter = "blur(0)";
                        kunst.style.visibility = "visible"
                        navbar.style.pointerEvents = "auto";
                        kunst.style.pointerEvents = "auto";
                        navbar.style.opacity = "0.9";
                })