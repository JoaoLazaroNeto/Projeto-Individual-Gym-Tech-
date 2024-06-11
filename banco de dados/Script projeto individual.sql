CREATE DATABASE gymtech;
USE gymtech;



CREATE TABLE treino (
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(50),
	nome varchar(45)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    idade int,
	fk_treino INT,
	FOREIGN KEY (fk_treino) REFERENCES treino(id)
);



insert into treino (descricao, nome) values
 ('Ênfase na parte do peitoral', 'Peito'),
 ('Ênfase na parte de trás do tronco', 'Costas'),
 ('Ênfase no bíceps', 'Bíceps'),
 ('Ênfase no bíceps', 'Tríceps'),
 ('Ênfase nos membros inferiores, completo', 'Pernas'),
 ('Ênfase nos ombros ', 'Ombro'),
 ('Ênfase nos músculos abdominais', 'Abdominal');
 
 select * from usuario;	
 
 select * from treino;
 use gymtech;
 SELECT idade, COUNT(*) AS quantidade_de_usuarios
FROM usuario
GROUP BY idade ;

SELECT idade, COUNT(*) AS quantidade_de_usuarios
FROM usuario
GROUP BY idade
ORDER BY idade ASC;




