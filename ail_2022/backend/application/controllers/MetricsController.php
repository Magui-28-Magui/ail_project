<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Metricscontroller extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model("metrics");
    }

	public function index()
	{
		//$this->load->view('welcome_message');
	}
	public function getmetrics()
	{
		$this->metrics->getmetricsdata();
	}
}
