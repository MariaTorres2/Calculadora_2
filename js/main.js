const buno = document.querySelector("#uno");
const bcero =document.querySelector ("#cero");
const bdos = document.querySelector("#dos");
const btres = document.querySelector("#tres");
const bcuatro = document.querySelector("#cuatro");
const bcinco = document.querySelector("#cinco");
const bseis = document.querySelector("#seis");
const bsiete = document.querySelector("#siete");
const bocho = document.querySelector("#ocho");
const bnueve = document.querySelector("#nueve");
const bsuma = document.querySelector("#suma");
const bresta = document.querySelector("#resta");
const bdivision = document.querySelector("#division");
const bmultiplicacion = document.querySelector("#multiplicacion");
const bpunto = document.querySelector("#punto");
const bigual = document.querySelector("#igualdad");
const botones = document.querySelectorAll(".boton");
const result = document.querySelector("#result");
const ce = document.querySelector("#ce");
const del = document.querySelector("#del");
const cuadrado = document.querySelector("#cuadrado");
const on = document.querySelector("#on");
let numero1 = '';
let numero2 = '';
let bandera = 0;
let operar =0;
let estadoCal =false;
let tipoOperacion=0;

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    botones.forEach(function (cambio) {
      cambio.style.backgroundColor = "";
    });
    this.style.backgroundColor = "gray";
    setTimeout(() => {
      this.style.backgroundColor = "";
    }, 620);
  });
});
bcero.addEventListener("click", () => {
    agregarValor(bcero.value);
   });

buno.addEventListener("click", () => {
  agregarValor(buno.value);
});

bdos.addEventListener("click", () => {
  agregarValor(bdos.value);
});

btres.addEventListener("click", () => {
  agregarValor(btres.value);
});

bcuatro.addEventListener("click", () => {
  agregarValor(bcuatro.value);
});
bcinco.addEventListener("click", () => {
  agregarValor(bcinco.value);
});
bseis.addEventListener("click", () => {
  agregarValor(bseis.value);
});
bsiete.addEventListener("click", () => {
  agregarValor(bsiete.value);
});

bocho.addEventListener("click", () => {
  agregarValor(bocho.value);
});
bnueve.addEventListener("click", () => {
  agregarValor(bnueve.value);
});
bpunto.addEventListener("click", () => {
  agregarValor(bpunto.value);
});

bsuma.addEventListener("click", () => {
  bandera = 1;
  tipoOperacion=1;
});

bresta.addEventListener("click", () => {
  bandera = 1;
  tipoOperacion=2;
});
bmultiplicacion.addEventListener("click", () => {
  bandera = 1;
  tipoOperacion=3;
});
bdivision.addEventListener("click", () => {
  bandera = 1;
  tipoOperacion=4;
});

bigual.addEventListener("click", () => {
    operaciones(numero1, numero2)
});


ce.addEventListener ("click", ()=>{
    result.value=" ";
    numero1='';
    numero2='';
    bandera=0;
    tipoOperacion=0;
});

del.addEventListener ("click", ()=>{
  eliminar();
});

cuadrado.addEventListener ("click", ()=>{
    result.value+="²";
    bandera = 1;
  tipoOperacion=5;
});

on.addEventListener ("click", ()=>{
estadoCalculadora();
result.value=" ";
numero1='';
numero2='';
bandera=0;
tipoOperacion=0;
});

function estadoCalculadora (){
    if(estadoCal==true){
        botones.forEach((boton) => {
            if (boton.id != "on") { 
                boton.disabled = false; 
            }
        });
        on.textContent="OFF";
        estadoCal=false;
    }else{
            botones.forEach((boton) => {
                if (boton.id != "on") { 
                    boton.disabled = true; 
                }
            });
            on.textContent = "ON";
            estadoCal=true;
    }
}

function agregarValor(a) {
  if (bandera === 0 && tipoOperacion === 0) {
    numero1+=a;
    console.log(numero1)
    result.value=numero1
  }else if(numero1 !== 0 && tipoOperacion !== 0){
    numero2+=a;
    console.log(numero2)
    result.value=numero2;
  }else {
    seleccionOpe();
  }
}

function seleccionOpe (){
  if (numero1!==""){
    operaciones(numero1,numero2);
    operar=1;
  }
}

function eliminar() {
    let actual = result.value;
    if (actual.length > 0) {
        result.value = actual.slice(0, -1); 
        if (bandera===0){
          numero1= actual.slice(0,-1);
        }else{
          numero2=actual.slice(0,-1);
        }
    }
}




function operaciones(a = 0, b = 0) {
  if (a !== null && b !== null) {
    let num1 = +(a);
    let num2 = +(b);
      switch (tipoOperacion) {
        case 1:
          result.value = num1 + num2;
          console.log('entre +')
          break;
        case 2:
          result.value = num1 - num2;
          break;
        case 3:
          result.value = num1 * num2;
          console.log('entre *')
          break;
        case 4:
            if (num2 !== 0) {
                result.value = num1 / num2; 
              } else {
                result.value = "Error"; 
              }
          break;
        case 5:
        result.value=Math.pow(num1, 2);;
        break;
      }
    }
    numero1 = result.value;
    numero2= "";
    tipoOperacion=0;
    operar=0;
}
