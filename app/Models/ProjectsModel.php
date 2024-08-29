<?php
class ProjectsModel{
    private $ID;
    private $name;
    private $description;
    private $short_description;
    private $primary_color;
    private $secondary_color;
    private $logo;
    private $thumbnail;
    private $url;
    private $tag_first;
    private $tag_second;
    private $tag_third;

    public function getProjects():array{
        $dbh = DataBase::connectPDO();
        $query = $dbh->prepare('SELECT * FROM projets');
        $query->execute();
        $projects = $query->fetchAll(PDO::FETCH_ASSOC);
        return $projects;
    }

    public function getProjectById(int $id):array{
        $dbh = DataBase::connectPDO();
        $query = $dbh->prepare('SELECT * FROM prjects WHERE id= :id');
        $query->bindParam('id',$id);
        $query->execute();
        $project = $query->fetchAll(PDO::FETCH_ASSOC);
        return $project;
    }

}