DROP   TABLE IF     EXISTS OverView;
CREATE TABLE IF NOT EXISTS OverView
( id				BIGINT				NOT NULL AUTO_INCREMENT
, updated_by		BIGINT				DEFAULT NULL
, updated_at		DATETIME			DEFAULT NULL
, status			VARCHAR(32)			DEFAULT 'Active'

, sequence       	INT(11)         	DEFAULT NULL	#
, product_id		VARCHAR(255)       	DEFAULT NULL	#
, information		VARCHAR(255)       	DEFAULT NULL	#

, PRIMARY KEY	(id)
, KEY parent_id		(parent_name, parent_id)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1
;

INSERT NextIds	SET table_name='OverView', next_id=1, id_size=9;
INSERT Controls SET group_set='User Resources'		, status='Active', sequence=50, name='OverView', updated_by=1, updated_at=NOW();
INSERT Controls SET group_set='Ticket Categories'	, status='Active', sequence=50, name='OverView', updated_by=1, updated_at=NOW();