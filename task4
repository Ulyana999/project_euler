function maxPalindrome(num) {
    let maxPalindrome = 1;

    for (let i = num; i > 0; i--) {
      for (let j = num; j > 0; j--) {
        let result = i * j;

        if (
          result.toString() === result.toString().split("").reverse().join("")
          && result > maxPalindrome
        ) {
          maxPalindrome = result;
        }
      }
    }

    return maxPalindrome;
  }

  console.log(maxPalindrome(999));
