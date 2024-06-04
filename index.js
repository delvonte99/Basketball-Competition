  let homeScore=document.getElementById("homes")
  let awayScore=document.getElementById("away")
  let homepoints=0
    let awaypoints=0

  
  function dunk(){
    homepoints=homepoints+1
      homeScore.textContent =homepoints
     

  }
  
   function layup(){
     homepoints+=2
      homeScore.textContent =homepoints
      
  }

 function three(){
 homepoints=homepoints+3
      homeScore.textContent =homepoints
  }
function dunks(){
    
      awaypoints=awaypoints+1
       awayScore.textContent=awaypoints

  }
  
   function layups(){
     awaypoints=awaypoints+2
       awayScore.textContent=awaypoints
      
  }

 function threes(){
  awaypoints=awaypoints+3
       awayScore.textContent=awaypoints
  }

function reset(){
    homepoints=0
    awaypoints=0
    homeScore.textContent= 0
           awayScore.textContent=0

    
}