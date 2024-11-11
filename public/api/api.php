<?php
require_once("lib.inc.php");
cors();
$lista = [
  ["titulo" => "Interferencia: La madre de todos los males",        "id" => "123456"],
  ["titulo" => "Interferencia: No es tan cierto como crees",        "id" => "234567"],
  ["titulo" => "Interferencia: Déjate llevar por las apariencias",  "id" => "345678"],
  ["titulo" => "Interferencia: Mejor mal acompañado",               "id" => "456789"],
  ["titulo" => "Interferencia: A la final, todos moriremos",        "id" => "567890"],
  ["titulo" => "Interferencia: Una sola vez lo intenté",            "id" => "678909"],
  ["titulo" => "Interferencia: Desaparece de una buena vez",        "id" => "789098"],
];

print json_encode($lista, JSON_PRETTY_PRINT);
