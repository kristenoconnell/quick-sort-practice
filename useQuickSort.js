const sort = require("./quickSort");

function compare(left, right) {
    console.log("compare", left, "to", right);
    return left-right;
}

const elements = [50, 23, 9, 18, 61, 32];

console.log(sort(compare, elements));
