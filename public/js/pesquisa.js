var btn = document.querySelector('#show-or-hide')
var search = document.querySelector('.search')

btn.addEventListener('click', () =>{
    pesquisaToggle()  
})

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  pesquisaToggle = () => {
    if(search.style.display === 'flex'){
        search.style.display = 'none';
        off()
    } else {
        search.style.display = 'flex';
        on();
    }
  } 

  function modifyImg(img, id){
    let imgInstr = document.getElementById("imgInstr" + id);
    imgInstr.src = img
  
}
