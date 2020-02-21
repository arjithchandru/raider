<?php
$connection=mysqli_connect("localhost","root","");
mysqli_select_db($connection,'blog_data');
$name2=$_POST['name1'];
$email2=$_POST['mail1'];
$pass2=$_POST['pwd1'];
 
	$s="insert into users(Name,Mail,password) values('$name2','$email2','$pass2')";
	$result=mysqli_query($connection,$s);
	echo"Form Submitted Successfully";
	 
mysqli_close($connection);
?>
