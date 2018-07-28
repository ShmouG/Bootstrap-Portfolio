<?php

 $name = $_POST ['name'];
 $request = $_POST ['request'];
 
 $to = "shmuligross@shmuligross.com";
 $subject = "Form";
 $body = "This is an automated message";

 mail ($to,$subject,$body);

 echo "Message sent!"

?>
<?php
function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}
?>