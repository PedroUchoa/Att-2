function desenhandoTriangulo(valor) {
    let aux = valor

    while (aux > 0) {
        let triangulo = ''
        for (let index = 0; index < aux; index++) {
            triangulo += "*"
            
        }
        console.log(triangulo)
        aux--
    }
}

desenhandoTriangulo(5)