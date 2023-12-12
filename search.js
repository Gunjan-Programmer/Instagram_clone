//var randomPics = ["https://images.unsplash.com/photo-1682685797365-6f57bbebffed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1701369290924-475bd6169621?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1702138062308-fc6beed165d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1659039590369-c66ee1d43c83?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1701781741588-3efd30679cb7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1682687218904-de46ed992b58?q=80&w=1543&auto=form,at&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1702109598756-77c29d04ac22?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1701192455496-a095e6e5f792?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]


//var clutter = "";
   
// // const idx = 0;
// function loadReels(){
//     // alert("hello");
//     document.querySelector("#load").style.display = "none";
//     document.querySelector('.block').style.display = "grid";
    




//     for(var i=0;i<=20;i++){
//         console.log(randomPics[i]);
//         createDiv(randomPics[i]);
        
//         // alert("Hello")
//         // const img = 
        
//     }
//     appearLoad();
//     // document.querySelector("#load").style.display = "block";
    
// }
// function createDiv(elem, idx){
//     var block = document.querySelector('.block');
//     var div = document.createElement('div');
//     console.log(idx)
// //    const img = div.createElement('img');
// //    img.src=`"${randomPics[i]}"`;
// block +=  block.appendChild(div);
// //    block.classList.add("block")
// //    insertImg();
// //    div.appendChild(img);


    
    
// }
// function appearLoad(){
//     // const span  = document.createElement('img');

// //    document.querySelector("#load").style.display = "block";
   

   

// }
// taking elements of array using for each method
// var clutter = "";
// function loadReels(){
//     // alert("hello");
//     document.querySelector("#load").style.display = "none";
//     document.querySelector('.block').style.display = "grid";

//     randomPics.forEach(function(elem,idx){
//     clutter += `<div id="${idx}"><img src="${elem}" alt=""></div>`;
//     // console.log(elem);
// })
// console.log(clutter)
// document.querySelector('.block').innerHTML = clutter
//     // document.querySelector("#load").style.display = "block";   
// }

// https://picsum.photos/200/300?random=1"


var clutter = "";
function loadReels(){
    // alert("hello");
    document.querySelector("#load").style.display = "none";
    document.querySelector('.block').style.display = "grid";
    for(var i=1;i<=1000;i++){
        clutter += generate_img(i);
    }
    document.querySelector('.block').innerHTML = clutter;
}

function generate_img(idx){
    var img =   `<div><img src="https://picsum.photos/200/300?random=${idx}" alt=""></div>`;
    return img;
}