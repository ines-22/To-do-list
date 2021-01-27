function add(){
               
               
                
    let ch = document.getElementById("msg").value;
    if(ch != ""){
    let check =document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class","checkbox");
    let ch1 = document.createTextNode(ch);
    
    let li = document.createElement("LI");
 
    li.setAttribute("class","li")
    li.appendChild(check);
    li.appendChild(ch1);
    
    document.getElementById("Go").appendChild(li);
    document.getElementById("msg").value="";
   }



}

function clear(){
   let elems = document.getElementsByClassName("checkbox");
   for(let i = 0; i < elems.length; i++) {
     if(elems[i].checked == true){
       
         document.getElementsByClassName("li")[i].style.display = "none";
         
     }
     }
}
document.getElementById("clear").addEventListener("click",clear);

