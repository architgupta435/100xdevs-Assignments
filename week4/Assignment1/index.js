const fs = require("fs");

function getwords(filename) {
    let cnt = 0; // use let, not const

    fs.readFile(filename, "utf-8", function (err, data) {
        if (err) {
            console.log("❌ Error reading file:", err.message);
        } else {
            for (let i = 0; i < data.length; i++) {
                if (data[i] === " ") {
                    cnt++;
                }
            }
            console.log("Word count (approx):", cnt +1);
        }
    });
}

getwords("a.txt");
