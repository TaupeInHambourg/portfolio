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

    public function getProjects($limit):array{
        $dbh = DataBase::connectPDO();
        if (!empty($limit)){
            $query = $dbh->prepare('SELECT * FROM projets LIMIT '.$limit);
        } else {
            $query = $dbh->prepare('SELECT * FROM projets');
        }
        $query->execute();
        $projects = $query->fetchAll(PDO::FETCH_ASSOC);
        return $projects;
    }

    public function getProjectById(int $id):array{
        $dbh = DataBase::connectPDO();
        $query = $dbh->prepare('SELECT * FROM projects WHERE id= :id');
        $query->bindParam('id',$id);
        $query->execute();
        $project = $query->fetchAll(PDO::FETCH_ASSOC);
        return $project;
    }

    public function getProjectByTag($tag):array{
        $dbh = DataBase::connectPDO();
        $query = $dbh->prepare('SELECT * FROM projects WHERE tag_first= :tag OR tag_second= :tag OR tag_third= :tag');
        $query->bindParam('tag',$tag);
        $query->execute();
        $projects = $query->fetchAll(PDO::FETCH_ASSOC);
        return $projects;
    }

}