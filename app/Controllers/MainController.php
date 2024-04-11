<?php

class MainController{
    protected $view;
    protected $data;

    public function render(){
        $data=$this->data;
        require '../app/views/layouts/header.phtml';
        require '../app/views/partials/'.$this->view.'.phtml';
        require '../app/views/layouts/footer.phtml';
    }
    
    /**
     * Set the value of view
     *
     * @return  self
     */ 
    public function setView($view)
    {
    $this->view = $view;
    
    return $this;
    }
}