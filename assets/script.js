var wrong=[]
function validate(){
    console.log("validate")
   // rowsOK();
   // columnsOK();
   groupsOK();

    // if((rowsOK() && columnsOK()&& groupsOK())==true)
    // document.getElementById("won").innerHTML("You won!!")
}
// function rowsOK(){
    
//     for(let i=1;i<=9;i++){
//   //      console.log(i)
//         rowOK(i);
//     }
    
// }
// function rowOK(n){
//     const rowN=[]
//     const first=(n-1)*9+1;
//     const last=n*9;
    
//    // console.log("row");
//     for(let i=first ;i<=last;i++){
        
//         const v=document.querySelector(`#cell-${i} input`).value;
//         if(v!==""){
//          if(rowN.includes(v)){
//             wrong.push(i) 
//             console.log(i)
            
//             const existed=rowN.indexOf(v)
//             console.log(existed)
//             console.log(n)
//             console.log(9*(n-1))
//             console.log(existed+(9*(n-1)+1))
//             wrong.push(existed+(9*(n-1)+1))
//          }
         
//            rowN.push(v);}
//            else rowN.push("-")
//     }
    
//   for(let i in wrong){
    
//        document.getElementById(`cell-${wrong[i]}`).classList.add("wrong")}
//        console.log(wrong)
//      for(let j=0;j<wrong.length;j=j+2){
//            const k=Number(j)+1;
//            console.log(document.querySelector(`#cell-${wrong[j]} input`).value)
//            console.log(document.querySelector(`#cell-${wrong[k]} input`).value)
//            if(document.querySelector(`#cell-${wrong[j]} input`).value!=document.querySelector(`#cell-${wrong[k]} input`).value)
//            {console.log(wrong[j])
//             console.log(wrong[j+1])
//                document.getElementById(`cell-${wrong[j]}`).classList.remove("wrong")
//            document.getElementById(`cell-${wrong[k]}`).classList.remove("wrong")
//            wrong.splice(j,2)
//            console.log(wrong)
//         }
//         }
  
   
// }

// function columnsOK(){
    
//     for(let i=1;i<=9;i++){
//         console.log(i)
//         columnOK(i);
//     }
    
// }
// function columnOK(n){
//     const colN=[]
//     const first=n;
//     const last=n+72;
//    // let j=0;
//    // console.log("row");
//     for(let i=first ;i<=last;i=i+9){
//      // j=j+1;
//         const v=document.querySelector(`#cell-${i} input`).value;
//         if(v!==""){
//          if(colN.includes(v)){
//             wrong.push(i) 
//             console.log(i)
            
//             const existed=colN.indexOf(v)
//             console.log(existed*9+n)
//             wrong.push(existed*9+n)
//          }
         
//            colN.push(v);}
//            else colN.push("-")
//     }
    
//   for(let i in wrong){
    
//        document.getElementById(`cell-${wrong[i]}`).classList.add("wrong")}
//        console.log(wrong)
//     //  for(let j=0;j<wrong.length;j=j+2){
//     //        const k=Number(j)+1;
//     //        console.log(document.querySelector(`#cell-${wrong[j]} input`).value)
//     //        console.log(document.querySelector(`#cell-${wrong[k]} input`).value)
//     //        if(document.querySelector(`#cell-${wrong[j]} input`).value!=document.querySelector(`#cell-${wrong[k]} input`).value)
//     //        {console.log(wrong[j])
//     //         console.log(wrong[j+1])
//     //            document.getElementById(`cell-${wrong[j]}`).classList.remove("wrong")
//     //        document.getElementById(`cell-${wrong[k]}`).classList.remove("wrong")
//     //        wrong.splice(j,2)
//     //        console.log(wrong)
//     //     }
//     //     }
  
   
// }

//group

function groupsOK(){
    
  for(let i=1;i<=9;i++){
      console.log(i)
      groupOK(i);
  }
  
}
function groupOK(n){
  const groupN=[]
  const first=3*(n-1)+18*Math.floor(n/4)+1;
  const last=first+20;
  //let j=0;
 // console.log("row");
  for(let i=first ;i<=last;i++){
   // j=j+1;
   if(i==first+3||i==first+12)
   i=i+6;
   console.log(i)
      const v=document.querySelector(`#cell-${i} input`).value;
      if(v!==""){
       if(groupN.includes(v)){
          wrong.push(i) 
          console.log(i)
          
          const existed=groupN.indexOf(v)
          console.log(first+(Math.floor(existed/3))*9+(existed%3))
          wrong.push(first+(Math.floor(existed/3))*9+(existed%3))
       }
       
       groupN.push(v);}
         else groupN.push("-")
  }
  
for(let i in wrong){
  
     document.getElementById(`cell-${wrong[i]}`).classList.add("wrong")}

for(let j=0;j<wrong.length;j=j+2){
             const k=Number(j)+1;
            // console.log(document.querySelector(`#cell-${wrong[j]} input`).value)
            // console.log(document.querySelector(`#cell-${wrong[k]} input`).value)
             if(document.querySelector(`#cell-${wrong[j]} input`).value!=document.querySelector(`#cell-${wrong[k]} input`).value)
             {//console.log(wrong[j])
              //console.log(wrong[j+1])
                 document.getElementById(`cell-${wrong[j]}`).classList.remove("wrong")
             document.getElementById(`cell-${wrong[k]}`).classList.remove("wrong")
             wrong.splice(j,2)
             console.log(wrong)
          }
          }
        }

function setupeasy(){
const easylvl=[
    [0, 3, 0, 6, 7, 8, 9, 0, 2],
    [6, 7, 2, 1, 0, 0, 3, 4, 0],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [0, 5, 9, 7, 0, 1, 0, 2, 0],
    [4, 0, 6, 0, 5, 0, 7, 9, 1],
    [0, 0, 3, 9, 2, 0, 8, 5, 6],
    [9, 0, 1, 5, 0, 0, 2, 0, 4],
    [2, 8, 7, 0, 1, 9, 6, 3, 5],
    [3, 0, 0, 0, 8, 0, 1, 7, 0]
]
var easy=[]
for(i in easylvl){
   // console.log(easylvl[i])
     easy=[...easy,...easylvl[i]]
}

//console.log(easy)
for(let i in easy){
    
   // console.log(i);
    var j=Number(i)+1;
   // console.log(j);
    if(easy[i]=='0')
    {document.querySelector(`#cell-${j} input`).value="";
    
  
  }
    else{
       // console.log(document.querySelector(`#cell-${j} input`))
   document.querySelector(`#cell-${j} input`).value=easy[i];
   document.querySelector(`#cell-${j} input`).setAttribute("name","disable")
   document.querySelector(`#cell-${j}`).classList.add("disabled")
}}}

for(let i=1;i<=81;i++)
{//console.log(i);
document.querySelector(`#cell-${i} input`).addEventListener("change",validate)}