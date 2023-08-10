document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector("button");
    button.onclick = function(){
        if (document.body.classList.contains("temanoite")){
            document.body.classList.remove("temanoite");
        }else{
            document.body.classList.add("temanoite");
        }
    
    };
}
);