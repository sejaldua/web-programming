<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>PHP DB demo</title>
	<style type="text/css">
		html,body {font-size: 24px;}
	</style>
</head>

<body>
	<h1>  DB Demo </h1>
	   <?php
			$id = "id12207148_test1";
			$pw = 'hq$U<Fe2PeH7qh6v';
			$db = "id12207148_testdb1";

// Create connection
$cn = new mysqli("localhost", $id, $pw, $db);

// Check connection
if ($cn->connect_error) {
    die("Connection failed: " . $cn->connect_error);
}
//echo "Success!";
//$q = "SELECT name, pet_type from pets";
$q = "SELECT name, pet_type from pets where name like 'f%'";
	
	$result = $cn->query($q);
//	echo $result;
	while($row = $result->fetch_assoc()) 
	{
		$name = $row["name"];
		$ptype = $row["pet_type"];
      	echo "$name is a $ptype<br>";
    }
	
	$cn->close();
?>

</body>
</html>