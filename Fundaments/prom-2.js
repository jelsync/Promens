sumarUno = (numero) => {
    console.log('Waiting..');
    let promes = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve(numero + 1)
        }, 1000);
    });
    return promes;
}

sumarUno(0).then(nuevoValor => {
    console.log(nuevoValor);
});