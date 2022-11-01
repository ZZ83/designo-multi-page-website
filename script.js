document.querySelector(".icon").addEventListener("click", () => {
   const nav =  document.querySelector("nav")
   if(nav.style.display === "block") {
        nav.style.display = "none";
   } else {
        nav.style.display = "block";
   }
})