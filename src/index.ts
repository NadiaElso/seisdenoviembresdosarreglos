let nombres:string[] = new Array(2)

let numeros:number[]= new Array(3)


nombres[0]="";
nombres[1]="";

numeros[0]= 0;
numeros[1]= 0;
numeros[2]= 0;


for (let index = 0; index < nombres.length; index++) {
  nombres[index]=prompt("Ingrese 2 nombres");
  
}



for (let i = 0; i < numeros.length; i++) {
 numeros[i]= prompt("Ingrese 3 números");

}


for (let contador = 0; contador < numeros.length; contador++) {
  console.log( console.log(`El nombre ingresado,${contador},es, ${nombres[contador]} y el numero ingresado es, ${numeros[contador]});}

