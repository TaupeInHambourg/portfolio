<?php

class MainController{
    protected $view;
    protected $data;
    protected $header;

    public function render(){
        $data=$this->data;
        require '../app/views/layouts/head.phtml';
        if ($this->header == 'header'){
            require '../app/views/layouts/header.phtml';
        }
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

    /**
     * Set the value of header
     *
     * @return  self
     */ 
    public function setHeader($header)
    {
        $this->header = $header;

        return $this;
    }
}