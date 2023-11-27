<template>
  <!-- Hier kommt deine Vue.js-Komponenten-Vorlage -->
</template>

<script>
// Importiere Axios
import axios from 'axios';

export default {
  mounted() {
    // Definiere die URL deines PHP-Backends
    const backendUrl = 'http://localhost:8080'; // Passe die URL an deine Backend-URL an

    // Beispiel für eine GET-Anfrage an die Datenbank
    axios.get(`${backendUrl}/api/datenbankdaten`)
        .then(response => {
          // Handle die Antwort hier
          console.log(response.data);
        })
        .catch(error => {
          // Handle den Fehler hier
          console.error(error);
        });
  }
}
</script>
