<?php
	if(isset($_POST['submit'])){
	    $to = "seandarryanto@gmail.com"; // this is your Email address
	    $from = $_POST['sender-email']; // this is the sender's Email address
	    $sender_name = $_POST['sender-name'];
	    $subject = "Question from Online Form -- AGSSMC";
	    $subject2 = "Copy of your submitted form";
	    $message = $sender . " wrote the following:" . "\n\n" . $_POST['message'];
	    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

	    $headers = "From:" . $from;
	    $headers2 = "From:" . $to;

	    if (mail($to,$subject,$message,$headers)) {
       		echo "email sent";
  	  	} else {
      		echo "[B]email could not be sent[/B]";
   		}

   		

	    #mail($to,$subject,$message,$headers);
	    #mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
	    #echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
	    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
