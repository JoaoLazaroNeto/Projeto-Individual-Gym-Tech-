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
    idade varchar(50),
	fk_treino INT,
	FOREIGN KEY (fk_treino) REFERENCES treino(id)
);


insert into treino (descricao, nome) values
 ('Ênfase na parte do peitoral', 'Treino de peito'),
 ('Ênfase na parte de trás do tronco', 'Treino de costas'),
 ('Ênfase no bíceps', 'Treino de bíceps'),
 ('Ênfase no bíceps', 'Treino de tríceps'),
 ('Ênfase nos membros inferiores, completo', 'Treino de pernas'),
 ('Ênfase nos ombros ', 'Treino de ombro'),
 ('Ênfase nos músculos abdominais', 'Treino de abdominal');
 
 select * from usuario;	
 
 select * from treino;
 
 


