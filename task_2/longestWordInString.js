function longestWordInString(str){
    
    var reci=str.split(' ');

    var najduzaRec=0;

    for (var i = 0; i < reci.length; i++) {
        if(reci[i].length>najduzaRec){
            najduzaRec=reci[i].length;
        }   
    }
    return najduzaRec;
}

export default longestWordInString