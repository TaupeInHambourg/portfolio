<?php
require '../app/Models/JourneyModel.php';  
require '../app/Controllers/MainController.php';
require '../app/Controllers/HomeController.php';
require '../app/Controllers/ProjectsController.php';
require '../app/Controllers/ProjectController.php';
require '../app/Controllers/ErrorController.php';


const AVAILABLE_ROUTES=[
    'home'=>[
        'action'=>'render',
        'controller'=>'HomeController',
    ],
    'projects'=>[
        'action'=>'render',
        'controller'=>'ProjectsController'
    ],
    '404'=>[
        'action'=>'render',
        'controller'=>'ErrorController'
    ]
];

$controller;
$action;

if(isset($_GET['v']) && !empty($_GET['v'])){
    $page = $_GET['v'];
}else{
    $page = 'home';
}

if(array_key_exists($page,AVAILABLE_ROUTES)){
    $controller = AVAILABLE_ROUTES[$page]['controller'];
    $action = AVAILABLE_ROUTES[$page]['action'];
}else{
    $controller = 'ErrorController';
    $action = 'render';
}

$controllerInstance = new $controller();
$controllerInstance -> setView($page);
$controllerInstance -> $action();