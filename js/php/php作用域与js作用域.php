<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<?php 
		function f1(){
			echo "f1";
			function f2(){
				echo "f2";
			}
		}
		f1();
		f2();
	 ?>
</body>
</html>