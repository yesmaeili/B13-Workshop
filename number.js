      let num1 = 10;
      let num2 = -20;
      
      let sum = num1 + num2;
      
      if (sum < -1000) {
        console.log(sum + " is less than -1000");
      } else if (sum < 0) {
        console.log(sum + " is a negative number");
      } else if (sum === 0) {
        console.log(sum + " is equal to 0");
      } else if (sum > 0 && sum < 100) {
        console.log(sum + " is larger than 0");
      } else if (sum > 100) {
        console.log(sum + " is greater than 100");
      }
