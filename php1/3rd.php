<?php
$arr=array("haseeb","dani","samar");
// array_push($arr,"A","b","v");
// array_pop($arr);
// array_shift($arr);
// array_reverse($arr);
$ar=array_search("haseeb",$arr);
if($ar !== false)
{
    echo "present  ".$ar;

}
else
{
    echo "not present".$ar;
}
?>