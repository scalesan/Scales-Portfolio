  <?php
 	$users = array('Anthony', 'LaTasha', 'Wright');
 	$name = $_POST['username'];
 	$password = $_POST['password'];

 	if($name == "" || $password == ""){
 		echo "Please enter your login credentials";
 	}else{
 	//	echo "Welcome User: " . $name;
 		if(!in_array($name, $users)){
 			echo "Sorry you are not a registered user";
 		}
 			else{
 				echo "Welcome user: " .$name;
 			}
 		}

	// if (isset($_POST['submit'])) 
	// 	$name = $_POST['name'];
	// 	$email = $_POST['email'];

	// 	echo "Hello " . $name;
	// 	echo "<br/>";
	// 	echo "Your email is " . $email;

?>