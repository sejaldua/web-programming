<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>PHP demo</title>
	<style type="text/css">
		html,body {font-size: 24px;}
	</style>
</head>

<body>
	<?php
	   $name = $_POST['theName'];

	echo "Good morning, $name!";
	?>
</body>
</html>