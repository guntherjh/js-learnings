(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var testHelper = require('../dist/test.js');
window.onload =  function() {
    testHelper.test("A test", function() {
        testHelper.assert(true, "First assertion completed");
        testHelper.assert(true, "Second assertion completed");
        testHelper.assert(true, "Third assertion completed");
    });
    testHelper.test("Another test", function() {
        testHelper.assert(true, "First assertion completed");
        testHelper.assert(false, "Second assertion Fails!");
        testHelper.assert(true, "Third assertion completed");
    });
    testHelper.test("Last test", function() {
        testHelper.assert(true, "First assertion completed");
        testHelper.assert(false, "Second assertion Fails!");
        testHelper.assert(false, "Third assertion FAILS!");
    });
    testHelper.test('Async test #1', function() {
        testHelper.pause();
        setTimeout(function() {
            testHelper.assert(true, "First async test completed");
            testHelper.resume();
        }, 1000);
    });
    testHelper.test('Async test #2', function() {
        testHelper.pause();
        setTimeout(function() {
            testHelper.assert(true, "Second async test completed");
            testHelper.resume();
        }, 1000);
    });
};
},{"../dist/test.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
