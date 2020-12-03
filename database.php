<?php
define('PG_HOST','ec2-75-101-212-64.compute-1.amazonaws.com');
define('PG_PORT',5432);
define('PG_DBNAME','dgo08io30ema4');
define('PG_USER','taiejqcttupqsf');
define('PG_PASSWORD','1300b99dc5437157377baa4aff393485f1df1bec6ce83c9a7683e528d020aced');
define('CN_ERROR','CONNECTION FAILED!');

function getDB()
{
    return pg_connect(' host='. PG_HOST . ' port='. PG_PORT . ' dbname='. PG_DBNAME . ' user='. PG_USER . ' password='. PG_PASSWORD) or die(CN_ERROR); 
}

?>