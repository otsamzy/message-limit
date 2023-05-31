let input = document.querySelector(".input"),
messageSpace = document.querySelector(".message-space"),
textLimit =document.querySelector(".text-limit");

messageSpace.addEventListener("keyup", () => {
   let valueLenght = messageSpace.value.length;

  valueLenght = (valueLenght < 10) ? "0" + valueLenght : valueLenght;
   textLimit.innerHTML = valueLenght;

   ( valueLenght > 0)? input.classList.add("active") : input.classList.remove("active");
   
   (valueLenght > 100) ? input.classList.add("error") : input.classList.remove("error")
  

})