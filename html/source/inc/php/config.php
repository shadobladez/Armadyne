<?php

//connect to the database
mysql_connect('localhost', 'root', 'gundam8942') or die("I couldn't connect to your database, please make sure your info is correct!");
mysql_select_db('test') or die("I couldn't find the database table ($table) make sure it's spelt right!");
