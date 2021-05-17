sumarUno = (numero) => {
    console.log('Waiting..');
    let promes = new Promise((resolve, reject) => {
        if (numero >= 7) {
            reject('El numero es muy alto')
        }
        setTimeout(() => {
            resolve(numero + 1)
        }, 1000);
    });
    return promes;
}

sumarUno(7)
    .then(nuevoValor => {
        console.log(nuevoValor);
    })
    .catch((err) => {
        console.log('Error', err);
    });