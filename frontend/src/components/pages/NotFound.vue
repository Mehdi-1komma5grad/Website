<template>
  <div>
    <v-row class="px-8 my-40">
      <v-col>
        <h1>Seite nicht gefunden</h1>
        <p>Überprüfe die URL</p>
        <v-btn to="/home" class="mt-4">kehre zur Startseite zurück </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          src="/images/not-found.gif"
          width="400"
          height="400"
          alt="not found"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Add any custom styles here */
</style>
