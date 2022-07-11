let j=localStorage.length+1;
let para,x,del,edit,inp;
let storeValue;

//For Add Task from local storage to left pane

for(let k =1;k<j;k++){
 
  para = document.createElement("p");
  x = document.createElement("INPUT");
  del = document.createElement('button');
  edit = document.createElement('button');
  edit.setAttribute('class','fa fa-edit');
  del.setAttribute('class','fa fa-close');
  del.style.color = 'black';
  del.style.backgroundColor = 'rgb(235, 230, 230)';
  del.style.border = 'none';
  del.style.cursor = 'pointer';
  del.style.position = 'absolute';
  del.style.right = '61%';

  edit.style.color = 'black';
  edit.style.backgroundColor = 'rgb(235, 230, 230)';
  edit.style.border = 'none';
  edit.style.cursor = 'pointer';
  edit.style.position = 'absolute';
  edit.style.right = '65%';


  x.style.position = 'absolute';
  x.style.right = '70%';
  x.setAttribute("type", "checkbox");
  storeValue = localStorage.getItem(k)
  if(storeValue){
    para.append(storeValue);
  }
  para.appendChild(x);
  para.appendChild(edit);
  para.appendChild(del);
  let element = document.getElementById("leftpane");
  element.appendChild(para);

  // delete task from left pane after click on cross button

  del.addEventListener('click',function(){
    this.parentElement.style.display = 'none';
  })

  // edit task after click on pencil icon
  edit.addEventListener('click',function(){
    inp = document.createElement("INPUT");
    inp.setAttribute("type", "text");
    inp.style.position = 'absolute';
    inp.style.right = '75%';
    inp.style.top = '22%';
    inp.style.width = '10%';
    
    inp.placeholder = "Update Task Name";
    let inptext = this.parentElement;
    inp.addEventListener("keypress",function(event){
      if(event.key==="Enter"){
        inptext.firstChild.nodeValue = inp.value;
      }
    })

    para.appendChild(inp);
  })


  // after click on checkbox it represent task completed
  x.addEventListener('click',function(){
    
  this.parentElement.style.textDecoration = 'line-through';
})
}






//For Add Task on left pane and in local storage after click on enter key

ta.addEventListener("keypress",function(event){
  if(event.key==="Enter"){
    event.preventDefault();
    let rightValue = document.getElementById('ta').value;
    console.log(rightValue);
    localStorage.setItem(j,rightValue);
    
    let para = document.createElement("p");
    let x = document.createElement("INPUT");
    let del = document.createElement('button');
    edit = document.createElement('button');
    edit.setAttribute('class','fa fa-edit');
    del.setAttribute('class','fa fa-close');
    del.style.color = 'black';
    del.style.backgroundColor = 'rgb(235, 230, 230)';
    del.style.border = 'none';
    del.style.cursor = 'pointer';
    del.style.position = 'absolute';
    del.style.right = '61%';

    edit.style.color = 'black';
    edit.style.backgroundColor = 'rgb(235, 230, 230)';
    edit.style.border = 'none';
    edit.style.cursor = 'pointer';
    edit.style.position = 'absolute';
    edit.style.right = '65%';


    x.style.position = 'absolute';
    x.style.right = '70%';
    x.setAttribute("type", "checkbox");
    let storedValue = localStorage.getItem(j);
      if(storedValue){
        para.append(storedValue);
      }
      para.appendChild(x);
      para.appendChild(edit);
      para.appendChild(del);
      let element = document.getElementById("leftpane");
      element.appendChild(para);
      
       // delete task from left pane after click on cross button

        del.addEventListener('click',function(){
          this.parentElement.style.display = 'none';
        })


        // edit task after click on pencil icon
        edit.addEventListener('click',function(){
          inp = document.createElement("INPUT");
          inp.setAttribute("type", "text");
          inp.style.position = 'absolute';
          inp.style.right = '75%';
          inp.style.top = '22%';
          inp.style.width = '10%';
          
          inp.placeholder = "Update Task Name";
          let inptext = this.parentElement;
          inp.addEventListener("keypress",function(event){
            if(event.key==="Enter"){
              inptext.firstChild.nodeValue = inp.value;
              this.parentElement.style.textDecoration = 'none';
            }
          })
        
          para.appendChild(inp);
        })

        // after click on checkbox it represent task completed
        x.addEventListener('click',function(){
          this.parentElement.style.textDecoration = 'line-through';
})

    j++;
    
  }
})



