<?php

class ProjectsController extends MainController{

  public function renderProjects(){
    $dataInstance = new ProjectsModel();
    $this->data = $dataInstance->getProjects(NULL);
    $this->render();
  }

  public function __construct(){
    $this->view = 'projects';
  }
}