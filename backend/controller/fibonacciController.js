const asyncHandler = require("express-async-handler");

const generateSequence = asyncHandler(async (req, res) => {
    const { num1, num2 } = req.body;
    if (num1 && num2) {
        let n1 = Number(num1);
        let n2 = Number(num2);
        let result = [];
        for (let i = 1; i <= 7; i++) {
            result.push(n1);
            let temp = n1 + n2;
            n1 = n2;
            n2 = temp;
        }
        res.status(200).json({ sequence: result });
    } else {
        res.status(400);
        throw new Error("Please fill in all the numbers");
    }
});

module.exports = { generateSequence };