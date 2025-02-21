//your JS code here. If required.
function daysOfAYear(n) {
	let ans = 0;
	 if (n % 4 == 0) {
     
      // If it's divisible by 100, it should also be 
      // divisible by 400 to be a leap year
      if (n % 100 == 0) {
         ans= n % 400 == 0;
      }
      ans= true;
   }
   ans = false;
	if(ans)return 366;
	return 365;
}