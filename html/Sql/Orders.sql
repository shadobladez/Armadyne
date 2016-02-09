DROP   TABLE IF     EXISTS Orders;
CREATE TABLE IF NOT EXISTS Orders
( id				BIGINT				NOT NULL AUTO_INCREMENT
, updated_by		BIGINT				DEFAULT NULL
, updated_at		DATETIME			DEFAULT NULL
, status			VARCHAR(32)			DEFAULT 'Active'

, customer_id		INT(11)         	DEFAULT NULL	#
, total_price 		INT(11)       		DEFAULT NULL	#
, discount_id		VARCHAR(255)       	DEFAULT NULL	#
, adjustments		VARCHAR(255)       	DEFAULT NULL	#
, payment			VARCHAR(255)       	DEFAULT NULL	#
, document_file		VARCHAR(255)       	DEFAULT NULL	#
, pay_pal_id		VARCHAR(255)       	DEFAULT NULL	#

, PRIMARY KEY	(id)
, KEY parent_id		(parent_name, parent_id)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1
;

INSERT NextIds	SET table_name='Orders', next_id=1, id_size=9;
INSERT Controls SET group_set='User Resources'		, status='Active', sequence=50, name='Orders', updated_by=1, updated_at=NOW();
INSERT Controls SET group_set='Ticket Categories'	, status='Active', sequence=50, name='Orders', updated_by=1, updated_at=NOW();