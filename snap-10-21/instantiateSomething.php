<?php
require_once(__DIR__ . "/Something.php");
	
	$thing = new Something("123123",
	"thatOneThing"
	);
	echo($thing->exposeSomething($thing->getSomethingName()));