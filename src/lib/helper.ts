export  function formatMoney(number:number) {
    // Define units
    const units = ['', 'thousand', 'million', 'billion', 'trillion'];

    // Function to convert a three-digit number to words
    function convertThreeDigitNumber(num:number) {
        const ones = ['','one','two','three','four','five','six','seven','eight','nine'];
        const teens = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
        const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

        const result = [];

        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;

        if (hundreds > 0) {
            result.push(ones[hundreds] + ' hundred');
        }

        if (remainder > 0) {
            if (remainder < 10) {
                result.push(ones[remainder]);
            } else if (remainder < 20) {
                result.push(teens[remainder - 10]);
            } else {
                result.push(tens[Math.floor(remainder / 10)]);
                if (remainder % 10 > 0) {
                    result.push(ones[remainder % 10]);
                }
            }
        }

        return result.join(' ');
    }

    // Main function to format a number into words
    function convertToWords(num:number) {
        if (num === 0) {
            return 'zero';
        }

        const numString = num.toString();
        const numLength = numString.length;

        let result = [];

        for (let i = 0; i < numLength; i += 3) {
            const chunk = parseInt(numString.slice(-i - 3, -i) || '0', 10);
            if (chunk > 0) {
                result.unshift(convertThreeDigitNumber(chunk) + ' ' + units[i / 3]);
            }
        }

        return result.join(' and ');
    }

    return convertToWords(number);
}

// Test the function


export const formatCurrency = (number:number) =>{

    const stringNumber = number.toString().slice(0,3);
            return stringNumber;
}