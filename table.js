const btn=document.getElementById("btn")


btn.addEventListener("click",displaytable)

function displaytable(){
    let x=document.getElementById("button")
    if (x.style.display === 'none') {
        x.style.display = 'block';
      } else {
        x.style.display = 'none';
      }

}