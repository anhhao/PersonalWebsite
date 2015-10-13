/**
 * Created by Andy Nguyen on 9/24/2015.
 */

//initialize variables
var numOfImage = 3;
var currentIndex = 1;
var imgMain = document.getElementById("img-main");
var txtLine = document.getElementById("line_text");
var arrImg = [];
for (var i = 0; i < numOfImage; i++) {
    arrImg.push(document.getElementById("img" + i));
}

// start timer
window.setInterval(function () {
    myTimer()
}, 2000);

//dynamically set onclick event to images
for(var i = 0; i < arrImg.length; i++) {
    arrImg[i].addEventListener('click', function (index) {
       return function() {
           currentIndex = index + 1;
           myTimer();
           changeBorderColor(index);
       }
    }(i));
}

// ----- functions  --------

var data = {
    '0': {
        img: 'avatar.jpg',
        text: '<p>Hello! a bit about me</p>'
    },
    '1': {
        img: 'born.jpg',
        text: '<p>Born in 1983!</p>'
    },
    '2': {
        img: 'wedding.jpg',
        text: '<p>2011: Wedding with sweet love!</p>'
    },
    '3': {
        img: 'father.jpg',
        text: '<p>2012: Became father</p>'
    }
}

function myTimer(index) {
    imgMain.src = data[index.toString()].img;
    txtLine.innerHTML = data[index.toString()].text;
    changeBorderColor(index - 1);
}

//change border color function
function changeBorderColor(position) {
    if (position === -1) {
        for (var i = 0; i < numOfImage; i++) {
            arrImg[i].style.borderColor = "#eee";
        }
        return;
    }
    arrImg[position].style.borderColor = "#E83556";
    for (var i = 0; i < numOfImage; i++) {
        if (i != position) {
            arrImg[i].style.borderColor = "#eee";
        }
    }
}
