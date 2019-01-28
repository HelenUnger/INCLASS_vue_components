<?php 

    include 'functions.php';

    //remember to sanitize input 
    //mysqli_stmt_prepare() and HTML_ENTITIES

    if (isset($_GET['user'])){
        $data = get_single_user($conn, $_GET['user']);
        echo json_encode($data);
    }else{
        $data = get_all_users($conn);
        echo json_encode($data);
    }

    ?>