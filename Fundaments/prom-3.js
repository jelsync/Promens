const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(numero + 1)
            reject('Sumar lento fallo')
        }, 1000);
    })
}

const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 300);
    })
}

Promise.all([sumarLento(5), sumarRapido(10)])
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });