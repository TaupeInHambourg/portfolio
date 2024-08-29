<?php
require '../app/Utility/DataBase.php';
require '../app/Models/ProjectsModel.php';  
require '../app/Controllers/MainController.php';
require '../app/Controllers/HomeController.php';
require '../app/Controllers/ProjectsController.php';
require '../app/Controllers/ProjectController.php';
require '../app/Controllers/ErrorController.php';


const AVAILABLE_ROUTES=[
    'home'=>[
        'action'=>'renderHome',
        'controller'=>'HomeController',
    ],
    'projects'=>[
        'action'=>'renderProjects',
        'controller'=>'ProjectsController'
    ],
    'project'=>[
        'action'=>'render',
        'controller'=>'ProjectController'
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
    $header = 'header';
    // if(isset($_GET['p']) && !empty($_GET['p'])){
    //     $page = 'project';
    // }
}else{
    $page = 'home';
    $header = 'none';
}

if(array_key_exists($page,AVAILABLE_ROUTES)){
    $controller = AVAILABLE_ROUTES[$page]['controller'];
    $action = AVAILABLE_ROUTES[$page]['action'];
}else if ($page !== '404'){
    $controller = 'ErrorController';
    $action = 'render';
    $header = 'header';
}

$controllerInstance = new $controller();
$controllerInstance -> setView($page);
$controllerInstance -> setHeader($header);
$controllerInstance -> $action();