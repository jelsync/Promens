const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1)
            // reject('Sumar lento fallo')
        }, 1000);
    })
}

const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
            // reject('Fallo sumar rapido')

        }, 300);
    })
}

Promise.race([sumarLento(5), sumarRapido(10)])
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });