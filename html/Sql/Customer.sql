DROP   TABLE IF     EXISTS Customer;
CREATE TABLE IF NOT EXISTS Customer
( id				BIGINT				NOT NULL AUTO_INCREMENT
, updated_by		BIGINT				DEFAULT NULL
, updated_at		DATETIME			DEFAULT NULL
, status			VARCHAR(32)			DEFAULT 'Active'

, user_name			VARCHAR(255)        DEFAULT NULL	#
, password			VARCHAR(255)   		DEFAULT NULL	#
, first_name		VARCHAR(255)        DEFAULT NULL	#
, middle_initial	VARCHAR(255)   		DEFAULT NULL	#
, last_name			VARCHAR(255)        DEFAULT NULL	#
, email				VARCHAR(255)        DEFAULT NULL	#
, phone				VARCHAR(255)        DEFAULT NULL	#
, street			VARCHAR(255)        DEFAULT NULL	#
, city				VARCHAR(255)        DEFAULT NULL	#
, state				VARCHAR(255)        DEFAULT NULL	#
, zip				VARCHAR(255)        DEFAULT NULL	#
, country			VARCHAR(255)        DEFAULT NULL	#
, date_created		DATETIME    	    DEFAULT NULL	#
, date_ended		DATETIME	        DEFAULT NULL	#

, PRIMARY KEY	(id)
, KEY parent_id		(parent_name, parent_id)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1
;

INSERT NextIds	SET table_name='Customer', next_id=1, id_size=9;
INSERT Controls SET group_set='User Resources'		, status='Active', sequence=50, name='Customer', updated_by=1, updated_at=NOW();
INSERT Controls SET group_set='Ticket Categories'	, status='Active', sequence=50, name='Customer', updated_by=1, updated_at=NOW();