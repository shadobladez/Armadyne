DROP   TABLE IF     EXISTS Products;
 CREATE TABLE IF NOT EXISTS Products
 ( id				BIGINT				NOT NULL AUTO_INCREMENT
 , updated_by		BIGINT				DEFAULT NULL
 , updated_at		DATETIME			DEFAULT NULL
 , status			VARCHAR(32)			DEFAULT 'Active'

 , product_code		VARCHAR(255)		DEFAULT NULL	#
 , product_name 	VARCHAR(255)		DEFAULT NULL	#
 , product_group	VARCHAR(255)		DEFAULT NULL	#
 , price			DECIMAL(10,2)		DEFAULT NULL	#
 , stock			INT(11)				DEFAULT 0		#

 , PRIMARY KEY	(id)
 , KEY product_code		(product_code)
 , KEY product_name		(product_name)
 ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1
 ;

INSERT INTO Products (product_code, product_name, product_group, price)
	VALUES
		('L6052'	, 'L6052'	, 'L6052'	, 50.00),
	 	('L6052W'	, 'L6052W'	, 'L6052'	, 90.00),
	 	('L6055'	, 'L6055'	, 'L6055'	, 50.00),
	 	('L6055W'	, 'L6055W'	, 'L6055'	, 90.00),
	 	('JXD509W'	, 'JXD509W'	, 'JXD509'	, 90.00),
	 	('JXD509G'	, 'JXD509G'	, 'JXD509'	, 90.00),
	 	('MJX101'	, 'MJX101'	, 'MXJ'		, 90.00),
	 	('CX-20'	, 'CX-20'	, 'CX'		, 90.00);