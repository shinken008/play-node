<?php

$url = '阿甘';
echo urlencode(mb_convert_encoding($url, 'utf-8', 'gb2312'))."\n";
echo rawurlencode(mb_convert_encoding($url, 'utf-8', 'gb2312'))

?>