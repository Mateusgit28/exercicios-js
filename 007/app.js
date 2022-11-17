function Exibir(){
    let valor1 = document.getElementById('n1'). value
    let valor2 = document.getElementById('n2'). value
    let valor3 = document.getElementById('n3'). value
    document.getElementById('resposta').innerHTML = (parseFloat(valor1)+parseFloat( valor2)+parseFloat(valor3))/3
   }
   