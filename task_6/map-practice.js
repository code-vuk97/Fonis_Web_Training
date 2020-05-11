var mapPractice=function(niz){
    
    for (let i = 0; i < niz.length; i++) {
        niz[i]=niz[i]-i;
    }
    return niz;
}

export default mapPractice