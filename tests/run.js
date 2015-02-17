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