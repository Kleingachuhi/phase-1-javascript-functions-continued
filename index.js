// code your solution here
function saturdayFun(activity = 'roller-skate') {
   return `This Saturday, I want to ${activity}!`;
 };

 function mondayWork(activity = 'go to the office') {
   return `This Monday, I will ${activity}.`;
 };

 function wrapAdjective(highlight = '*') {
   return function(adjective = 'special') {
     return `You are ${highlight}${adjective}${highlight}!`;
   };
 }
 
 const result1 = wrapAdjective('*')('a hard worker');
 const result2 = wrapAdjective('||')('a dedicated programmer');
 console.log(result1); 
 console.log(result2); 