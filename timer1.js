const input = process.argv.slice(2)

input.forEach((element,index) => {
  if (element === 0) {
    return;
  } else if (!element>0 ){
    return;
  } else if (NaN){
    return;
  }
  setTimeout(function(){ 
    process.stdout.write('Beep');},element * 1000)
});


