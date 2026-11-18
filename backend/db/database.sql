create database if not exists control_gastos;
use control_gastos;
create table usuarios (
    id_usuario int auto_increment primary key,
    nombre varchar(50) not null,
    correo varchar(100) not null);
create table categorias (
    id_categoria int auto_increment primary key,
    nombre_categoria varchar(50) not null,
    tipo varchar(20) not null);
create table registros (
    id_registro int auto_increment primary key,
    id_usuario int not null,
    id_categoria int not null,
    monto decimal(12,2) not null,
    fecha date not null,
    foreign key (id_usuario)
        references usuarios(id_usuario),
    foreign key (id_categoria)
        references categorias(id_categoria));
show tables;
insert into usuarios (nombre, correo) values ('Juan', 'juan@correo.com');

insert into categorias (nombre_categoria, tipo) values
('Alimentación', 'gasto'),
('Transporte', 'gasto'),
('Salario', 'ingreso');

insert into registros (id_usuario, id_categoria, monto, fecha) values
(1, 1, 25000.00, '2026-11-01'),
(1, 2, 8000.00, '2026-11-02'),
(1, 3, 1500000.00, '2026-11-05');

