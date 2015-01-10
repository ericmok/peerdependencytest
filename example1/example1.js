// Nested dependencies
// `b` depends on `a`
// `a` depends on nothing

// Question: Does this `a` refer to the `a` required in `b`?
var a = require('a');
var b = require('b');

a.print();
// Output: 0

b.print();
// Output: 0

// Let's find out by mutating `a`!
a.value(1);
a.print();
// Output: 1

// `b` also requires('a') and we have a reference to it. 
b.a.value(2);

b.print();
// Output: 2

a.print()
// Output: 1 (Not expected, we wanted to see 2)
// Conclusion: b.a !== a
// We require('a') in different contexts and they indeed refer to different things

