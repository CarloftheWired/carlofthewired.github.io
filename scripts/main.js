let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dark-souls-1.jpg') {
      myImage.setAttribute('src','images/dark-souls-2.jpg');
    } else {
      myImage.setAttribute('src','images/dark-souls-1.jpg');
    }
}
