<?php

class HomeController extends MainController{
    
    public function renderHome(){
        $dataInstance = new ProjectsModel();
        $this->data = $dataInstance->getProjects(8);
        $this->render();
    }
}