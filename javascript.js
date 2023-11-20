
// info = document.getElementsByClassName('fas fa-info-circle');
// info.forEach(icon => {
//     icon.addEventListener('focus', function(event) {
//         icon.nextElementSibling.style.display = 'block'
//     })
// })
/*
function expandIcon(element) {
    alert(element.nextElementSibling.innerHTML);
    }
    */
images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', function(event) {
        if (event.target.id == 'largeImage') {
            event.target.removeAttribute('id', 'largeImage');
        }
        else {
       image.setAttribute('id', 'largeImage');
       console.log(image.style.width)
        }
});
});