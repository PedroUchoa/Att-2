function desenhandoTriangulo(valor) {
    let aux = 0

    while (aux <= valor) {
        let triangulo = ''
        for (let index = 0; index < aux; index++) {
            triangulo += "*"
            
        }
        console.log(triangulo)
        aux++
    }
}

desenhandoTriangulo(7)