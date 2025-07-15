const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];



const button=document.getElementsByClassName("button");
const colortext=document.querySelector(".color");

button.addEventListener("click",()=>{//=> function for the "change" button action(click) 

  const hexcolor="#";
  for(let i=0;i<6;i++){
    const randomIndex=Math.ceil(math.random()*hexChars.lenght());

    hexcolor +=hexChars[randomIndex];  // this will concatenate the randomized member picked from the hexchars to the hexcolor //
  }


  document.style.body.backgroundColor = hexcolor;
  color.textContent=hexcolor;
});