//Algoritmo ciclo & condicional

let mensaje = prompt('¿Desea agregar al carrito? (s-si / n-no)');
while(mensaje == 's' || mensaje=='S'){
    let producto = prompt('1-Chaqueta impermeable\n2-Gorro invierno\n3-Vestido flores verano\n4-Sandalias florales\n5-Set otoño');
    if(producto == '1'){
        alert('Chaqueta impermeable ... $ 99.900  AGREGADO AL CARRO!');
    }else if(producto == '2'){
        alert('Gorro invierno ... $ 50.000  AGREGADO AL CARRO!');
    }else if (producto == '3'){
        alert('Vestido flores verano ... $80.000 AGREGADO AL CARRO');
    }else if (producto == '4'){
        alert('Sandalias florales ... $100.000 AGREGADO AL CARRO');
    }else if(producto == '5'){
        alert('Set otoño ... $ 99.900  AGREGADO AL CARRO!');
    }else {
        alert('Codigo de producto inexistente')
    }
    mensaje = prompt('¿Desea comprar otro producto? (s-si / n-no)');
}

//Algoritmo matemático escogiendo todos los productos
let n1=99900;
let n2=50000;
let n3=80000;
let n4=100000;
let n5=99900;

let suma=n1 + n2 + n3 + n4 + n5;

console.log('Valor total: '+suma);

alert('Valor total: '+suma);

