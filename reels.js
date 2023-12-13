document.getElementById('heart-icon').addEventListener("click", function(){
    
    document.getElementById('heart-icon').style.display = "none";
    document.querySelector('#red-heart-fill').style.display = "block";
    
});
document.getElementById('red-heart-fill').addEventListener("click", function(){
    
    document.querySelector('#heart-icon').style.display = "block";
    document.querySelector('#red-heart-fill').style.display = "none";
    
});