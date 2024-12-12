// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

//! Answer :
const [o, [t, th], [f, fi]] = moreStudents;
console.log(o, t, th, f, fi);
