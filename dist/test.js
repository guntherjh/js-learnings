"use strict";

exports.test = test;
exports.pause = pause;
exports.resume = resume;
exports.assert = assert;
var queue = [];
var paused = false;
var results;
function runTest() {
    if (!paused && queue.length) {
        queue.shift()();
        if (!paused) {
            resume();
        }
    }
}

function test(name, fn) {
    queue.push(function () {
        results = document.getElementById("results");
        results = assert(true, name).appendChild(document.createElement("ul"));
        fn();
    });
    runTest();
}
function pause() {
    paused = true;
}
function resume() {
    paused = false;
    setTimeout(runTest, 1);
}

function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    results.appendChild(li);
    if (!value) {
        li.parentNode.parentNode.className = "fail";
    }
    return li;
}
Object.defineProperty(exports, "__esModule", {
    value: true
});