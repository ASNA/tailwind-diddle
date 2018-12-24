

let tas = document.querySelectorAll(".text-area");
for(let i = 0; i < tas.length; i++) {
    tas[i].addEventListener("keyup", function(){
        this.style.height = "5rem";
        this.style.height = (this.scrollHeight)+"px";
    })
}
