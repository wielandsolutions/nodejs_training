console.log('Starting async app');
 
setTimeout(() => {
    console.log('Inside Timeout function');
 }, 2000);

 setTimeout(() => {
    console.log('Inside 2nd Timeout function');

 }, 0);

console.log('Finishing up');