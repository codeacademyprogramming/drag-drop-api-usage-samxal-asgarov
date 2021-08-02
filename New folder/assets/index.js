const drag = document.querySelector('.area');
let button = document.querySelector('.button');
let input = document.querySelector('.input');
let drop=document.querySelector('.droparea')

button.onclick = () => {
    input.click();
}
input.addEventListener('change', function () {
    file = this.files[0];
   show();
   drag.classList.add('active');
})
drag.addEventListener('dragover', (event) => {
    
    event.preventDefault();
       console.log('hello')
    drag.classList.add('active');
});

drop.addEventListener('dragleave', (event) => {
    event.preventDefault();
    
    console.log('goodbye');
    drag.classList.remove('active');
})

drop.addEventListener('drop', (event) => {
    event.preventDefault();
    console.log('dropped')
    file = event.dataTransfer.files[0];
    show();

   
})
function show(){

    let filetype = file.type;
    

    const valid = ["image/jpeg", "image/png", "image/jpg"];
    if (valid.includes(filetype)) {
        let filereader = new FileReader();
        filereader.onload = () => {
            let fileUrl = filereader.result;
            console.log(fileUrl)
            let imgTag = `<img src="${fileUrl}" alt="">`;
            drag.innerHTML = imgTag;
            

     let btn=document.createElement('button');       
    btn.innerHTML='delete'
    document.body.append(btn);
     btn.style='position:absolute;width:100px; top:450px;left:1050px;border:1px  solid #ddd;-moz-box-shadow: 0px 0px 8px  #fff;';
     btn.onclick=()=>{
         const close=document.getElementsByTagName('button');
         for(let i=0;i<close.length;i++){
            
          close[i].parentElement.style.display='none';
         }
     }
        }
        filereader.readAsDataURL(file);
    }
    else {
        alert('dont image')
    }
}

