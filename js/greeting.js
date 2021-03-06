'use strict';

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    hello = document.querySelector(".js-hello");


const USER_LS = "currentUser",
    SHOWING_CN = "showing",
    DELETE_CN = "delete";


function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.add(DELETE_CN);
    greeting.classList.add(SHOWING_CN);
    hello.classList.add(DELETE_CN);
    greeting.innerText = `Welcome, ${text}`;
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();