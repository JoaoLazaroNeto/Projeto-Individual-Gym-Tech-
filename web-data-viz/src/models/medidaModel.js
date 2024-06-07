var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT t.nome, COUNT(u.id) AS quantidade
    FROM treino t
    JOIN usuario u ON t.id = u.fk_treino
    GROUP BY t.nome
    ORDER BY quantidade DESC`;

    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas2() {

    var instrucaoSql = 

    ` SELECT idade, COUNT(*) AS quantidade_de_usuarios
FROM usuario
GROUP BY idade
ORDER BY idade DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidas2
    // buscarMedidasEmTempoReal
}
