const d = document;
const w = window;

const btnNota = d.getElementById('btnCalcularNota');
const btnDefinitiva = d.getElementById('btnCalcularDefinitiva');
const btnReset = d.getElementById('btnReset');

const nota1 = d.getElementById('Nota1');
const nota2 = d.getElementById('Nota2');
const nota3 = d.getElementById('Nota3');
const notaDefinitiva = d.getElementById('NotaDefinitiva');
let resultado3Corte = 0, resultadoFinal = 0, resultadoFinal3Corte = 0;

btnNota.addEventListener('click', ()=>{
  resultado3Corte = ((nota1.value*1.75)/5.0)+((nota2.value*1.75)/5.0);
  resultadoFinal3Corte = ((3.0-resultado3Corte)*5.0)/1.5;
  nota3.value = resultadoFinal3Corte;
})

btnDefinitiva.addEventListener('click', ()=>{
  resultadoFinal = ((nota1.value*1.75)/5.0)+((nota2.value*1.75)/5.0)+((nota3.value*1.5)/5.0);
  notaDefinitiva.value = resultadoFinal;
})

btnReset.addEventListener('click', ()=>{
  nota1.value = "";
  nota2.value = "";
  nota3.value = "";
  notaDefinitiva.value = "";
})
