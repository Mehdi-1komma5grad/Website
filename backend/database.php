<?php
// Verbindung zur Datenbank herstellen
$servername = "localhost";
$username = "vwprg23-z1";
$password = "hkwdsqeojjiioR3&";
$database = "wvprg23-z1";

$conn = new mysqli($servername, $username, $password, $database);

// Überprüfen der Verbindung
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

// SQL-Abfrage ausführen
$sql = "SELECT * FROM deine_tabelle";
$result = $conn->query($sql);

// Daten in ein assoziatives Array konvertieren
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Daten als JSON zurücksenden
header('Content-Type: application/json');
echo json_encode($data);

// Verbindung schließen
$conn->close();
?>