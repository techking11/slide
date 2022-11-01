'use strict';
let imgs = document.querySelectorAll('.slider ul li img');
let rgtPointer = document.querySelector('.rgtPointer li');
let ltPointer = document.querySelector('.ltPointer');

let i = 0;

rgtPointer.addEventListener('click', function() {
    imgs.forEach(function() {
        if(i < imgs.length - 2) {
            imgs[i].style.display = 'none';
        }
    });
    i++;
});

ltPointer.addEventListener('click', function() {
    i--;
    imgs.forEach(function() {
        if(i >= 0) {
            imgs[i].style.display = 'block';
        }
    });
});