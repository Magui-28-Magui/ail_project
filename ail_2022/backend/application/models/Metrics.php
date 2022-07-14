<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Metrics extends CI_Model{
    public function getmetricsdata(){
        $query = "SELECT * FROM metrics";
        echo $this->db->query($query)->result("json");
    }
}
