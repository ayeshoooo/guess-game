




let userConsent = confirm('Do you want to play the game?')



if(userConsent){
  
  let computrNumber =3
 while(true){
  let userGuessed=prompt('Please enter a number')

  if(userGuessed == computrNumber){
    alert('Woohoo! you guessed the correct number')
  }
  else{
    alert('Sorry! wrong number')
  }
  break
 }


}
else{

  alert('OK! "May be some other time."')
}