CREATE DATABASE commerce;

use commerce;

CREATE TABLE user (
	id int PRIMARY KEY auto_increment,
    nama VARCHAR(50),
    alamat VARCHAR (50),
    kodepos int
);

INSERT INTO user (nama,alamat,kodepos) VALUES 
('Fay','Bogor',16240),
('Ken','BSD',10056),
('Nur','Purbalingga',16660),
('Kia','Jakarta',16110),
('Cio','Bandung',15524)
;


CREATE TABLE product (
	id int PRIMARY KEY auto_increment,
    nama VARCHAR(50),
    deskripsi VARCHAR (50),
    harga int 
);

INSERT INTO product (nama,deskripsi,harga) VALUES 
('Handphone','New Model',5000000),
('Keyboard','Mechanical',2000000),
('Mouse','Macro',500000),
('Speaker','Noise Cancelling',500000),
('Monitor','Curved',400000)
;

CREATE TABLE pesanan (
	id int PRIMARY KEY auto_increment,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES user(id),
    product_id int,
    FOREIGN KEY (product_id) REFERENCES product(id),
    tanggal date,
    total_harga int
);

INSERT INTO pesanan (user_id,product_id,tanggal,total_harga) VALUES 
(1,5,'2021-03-18',400000),
(2,4,'2021-02-17',500000),
(3,3,'2021-01-20',500000),
(4,2,'2021-03-10',2000000),
(5,1,'2021-02-25',5000000)
	