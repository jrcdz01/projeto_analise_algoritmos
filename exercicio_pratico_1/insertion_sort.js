function insertion_sort(){

    var IS_conjunto_numero = new Array();
    IS_conjunto_numero = [15,3,10,24,35,1,12,11,45,34,6];
    var IS_conjunto_ordenado = new Array();
    IS_limite = IS_conjunto_numero.length;
    for (i=0; i<IS_limite; i++){
        IS_conjunto_ordenado[i] = IS_conjunto_numero[i];
        j = i;
        console.log("Ondem de "+j+" numero adicionado a j é "+IS_conjunto_ordenado[i]);
        while((IS_conjunto_ordenado[j-1] > IS_conjunto_ordenado[j]) && (j > -1)){
            console.log("j = "+j);
            IS_temporario = IS_conjunto_ordenado[j-1];
            IS_conjunto_ordenado[j-1] = IS_conjunto_ordenado[j];
            IS_conjunto_ordenado[j] = IS_temporario;
            console.log(IS_conjunto_ordenado+" j = "+j+" ordem[j] = "+IS_conjunto_ordenado[j]+" j-1 é "+IS_conjunto_ordenado[j-1]);
            if (j>0){
                j=j-1;
                console.log("j subtraido em 1, j = "+j);
            }
        }
    }

    console.log(IS_conjunto_ordenado);
}