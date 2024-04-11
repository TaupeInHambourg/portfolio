<?php

// class JourneyModel{
//   private $id;
//   private $date;
//   private $title;
//   private $school;
//   private $work;
//   private $skills;

//   public function getJourneyByDate(int $date):array{
//     $dbh = DataBase::connectPDO();
//     $query = $dbh->prepare(
//       "SELECT * FROM parcours WHERE date=:id"
//     );
//     $query->bindParam('id',$date);
//     $query->execute();
//     $data = $query->fetch();
//     return $data;
//   }
// }