let textArea = document.getElementById("textarea");
textArea.addEventListener("input", function(){
    let text = this.value;
    let char = document.getElementById("char");
    char.innerHTML = text.length;

    let Word = document.getElementById("word");
    let wordLength = text.split(" ");
     let filterValue = wordLength.filter(function(e){
        return e != "";
    });
    Word.innerHTML = filterValue.length;
})