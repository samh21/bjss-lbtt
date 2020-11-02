const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let result;

const BANDS = [
    {
        DESCRIPTION: 'Above £145,000 to £250,000',
        AMOUNT: 145000,
        RATE: 0.02
    },
    {
        DESCRIPTION: 'Above £250,000 to £325,000',
        AMOUNT: 250000,
        RATE: 0.05
    },
    {
        DESCRIPTION: 'Above £325,000 to £750,000',
        AMOUNT: 325000,
        RATE: 0.1
    },
    {
        DESCRIPTION: 'Over £750,000',
        AMOUNT: 750000,
        RATE: 0.12
    }
]


function calculateLbtt(purchasePrice) {
    let lbttPayable = 0;

    for (let i = 0; i < BANDS.length; i++) {

        if (purchasePrice > BANDS[i].AMOUNT) {

            let amountTaxable

            if (i === BANDS.length - 1) {
                // Highest tax bracket
                amountTaxable = purchasePrice - BANDS[i].AMOUNT
            } else {
                // All other tax brackets
                amountTaxable = Math.min(purchasePrice, BANDS[i + 1].AMOUNT) - BANDS[i].AMOUNT
            }

            lbttPayable += amountTaxable * BANDS[i].RATE
        }
    }
    return lbttPayable
}

function getInput() {
    rl.question('Enter property value: ', (res) => {
        result = Number(res);
        console.log(calculateLbtt(result));
        rl.close()
    })
}

getInput()

module.exports.calculateLbtt = calculateLbtt;