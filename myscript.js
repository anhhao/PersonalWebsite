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

//set onclick event to images
arrImg[0].onclick = function () {
    currentIndex = 1;
    myTimer();
    changeBorderColor(0);
};
arrImg[1].onclick = function () {
    currentIndex = 2;
    myTimer();
    changeBorderColor(1);
};
arrImg[2].onclick = function () {
    currentIndex = 3;
    myTimer();
    changeBorderColor(2);
};


// ----- functions  --------
function myTimer() {
    if (currentIndex === 0) {
        imgMain.src = "images/avatar.jpg";
        txtLine.innerHTML = "<p>Hello! a bit about me</p>";
        changeBorderColor(-1);
    } else if (currentIndex === 1) {
        imgMain.src = "images/born.jpg";
        txtLine.innerHTML = "<p>Born in 1983!</p>";
        changeBorderColor(0);
    } else if (currentIndex === 2) {
        imgMain.src = "images/wedding.jpg";
        txtLine.innerHTML = "<p>2011: Wedding with sweet love!</p>";
        changeBorderColor(1);
    } else {
        imgMain.src = "images/father.jpg";
        txtLine.innerHTML = "<p>2012: Became father</p>";
        changeBorderColor(2);
    }
    currentIndex++;
    if (currentIndex > 3) {
        currentIndex = 0;
    }
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

//resume onclick
var menu_edu = document.getElementById("resume-menu-edu");
var menu_exp = document.getElementById("resume-menu-exp");
var menu_ski = document.getElementById("resume-menu-ski");
var edu = document.getElementById("resume-edu");
var exp = document.getElementById("resume-exp");
var ski = document.getElementById("resume-ski");

menu_edu.style.backgroundColor = "#E83556";

menu_edu.onclick = function () {
    menu_edu.style.backgroundColor = "#E83556";
    menu_exp.style.backgroundColor = "#8B8B8B";
    menu_ski.style.backgroundColor = "#8B8B8B";
    edu.style.display = "block";
    exp.style.display = "none";
    ski.style.display = "none";
}
menu_exp.onclick = function () {
    menu_exp.style.backgroundColor = "#E83556";
    menu_edu.style.backgroundColor = "#8B8B8B";
    menu_ski.style.backgroundColor = "#8B8B8B";
    exp.style.display = "block";
    edu.style.display = "none";
    ski.style.display = "none";
}
menu_ski.onclick = function () {
    menu_ski.style.backgroundColor = "#E83556";
    menu_exp.style.backgroundColor = "#8B8B8B";
    menu_edu.style.backgroundColor = "#8B8B8B";
    ski.style.display = "block";
    exp.style.display = "none";
    edu.style.display = "none";
}
