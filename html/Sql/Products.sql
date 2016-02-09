DROP   TABLE IF     EXISTS Products;
CREATE TABLE IF NOT EXISTS Products
( id				BIGINT				NOT NULL AUTO_INCREMENT
, updated_by		BIGINT				DEFAULT NULL
, updated_at		DATETIME			DEFAULT NULL
, status			VARCHAR(32)			DEFAULT 'Active'

, product_group		VARCHAR(255)		DEFAULT NULL	#
, product_code		VARCHAR(255)		DEFAULT NULL	#
, product_name 		VARCHAR(255)		DEFAULT NULL	#
, price				DECIMAL(10,2)		DEFAULT NULL	#
, stock				INT(11)				DEFAULT NULL	#

, PRIMARY KEY	(id)
, KEY parent_id		(parent_name, parent_id)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1
;

INSERT NextIds	SET table_name='Products', next_id=1, id_size=9;
INSERT Controls SET group_set='User Resources'		, status='Active', sequence=50, name='Products', updated_by=1, updated_at=NOW();
INSERT Controls SET group_set='Ticket Categories'	, status='Active', sequence=50, name='Products', updated_by=1, updated_at=NOW();