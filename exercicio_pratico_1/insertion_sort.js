function pega_numeros(){
    numeros = document.getElementById("numeros").value;
    console.log(numeros);
    contador=0;
    var conjunto_numeros = new Array();
    numeros.split(",").forEach(numero => {
        conjunto_numeros[contador] = parseInt(numero, 10);
        contador++;
    });
    insertion_sort(conjunto_numeros);
}

function numeros_aleatorios(){
    quantidade_numeros = document.getElementById("quantidade_numeros").value;
    conjunto_numeros = new Array();

    for (z=0; z<quantidade_numeros; z++){
        conjunto_numeros[z] = Math.floor(Math.random()*200);
    }
    insertion_sort(conjunto_numeros);
}

function melhor_caso(){
    quantidade_numeros = document.getElementById("quantidade_numeros").value;
    conjunto_numeros = new Array();
    for (z=0; z<quantidade_numeros; z++){
        conjunto_numeros[z] = z;
    }
    insertion_sort(conjunto_numeros);
}

function pior_caso(){
    quantidade_numeros = document.getElementById("quantidade_numeros").value;
    conjunto_numeros = new Array();
    z = quantidade_numeros;
    contador_pior_caso = 0;
    while (z > -1){
        conjunto_numeros[contador_pior_caso] = z;
        contador_pior_caso++;
        z--;
    }
    insertion_sort(conjunto_numeros);
}

function insertion_sort(IS_conjunto_numero){
    //var IS_conjunto_numero= new Array();
    //IS_conjunto_numero = [15,3,10,24,35,1,12,11,45,34,6];
    contador_comandos=0;
    document.getElementById("entrada").innerHTML = IS_conjunto_numero;
    contador_comandos++;
    var IS_conjunto_ordenado = new Array();
    IS_limite = IS_conjunto_numero.length;
    contador_comandos++
    for (i=0; i<IS_limite; i++){
        IS_conjunto_ordenado[i] = IS_conjunto_numero[i];
        contador_comandos++;
        j = i;
        contador_comandos++;
        //console.log("Ondem de "+j+" numero adicionado a j é "+IS_conjunto_ordenado[i]);
        while((IS_conjunto_ordenado[j-1] > IS_conjunto_ordenado[j]) && (j > -1)){
            console.log("j = "+j);
            contador_comandos++;
            IS_temporario = IS_conjunto_ordenado[j-1];
            contador_comandos++;
            IS_conjunto_ordenado[j-1] = IS_conjunto_ordenado[j];
            contador_comandos++;
            IS_conjunto_ordenado[j] = IS_temporario;
            contador_comandos++;
            //console.log(IS_conjunto_ordenado+" j = "+j+" ordem[j] = "+IS_conjunto_ordenado[j]+" j-1 é "+IS_conjunto_ordenado[j-1]);
            if (j>0){
                j=j-1;
                contador_comandos++;
                //console.log("j subtraido em 1, j = "+j);
            }
        }
    }

    console.log(IS_conjunto_ordenado);
    document.getElementById("resultado").innerHTML = IS_conjunto_ordenado;
    document.getElementById("quantidade_comandos").innerHTML = contador_comandos;
}
