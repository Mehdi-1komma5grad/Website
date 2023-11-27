<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline text-center">Profilseite</v-card-title>
          <v-card-text>
            <v-avatar size="100">
              <v-img :src="userData.profileImage" alt="Profilbild"></v-img>
            </v-avatar>
            <v-divider class="my-4"></v-divider>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h5">Nutzername</v-list-item-title>
                  <v-list-item-subtitle>{{ userData.username }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h5">Vorname</v-list-item-title>
                  <v-list-item-subtitle>{{ userData.firstName }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h5">Nachname</v-list-item-title>
                  <v-list-item-subtitle>{{ userData.lastName }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        username: 'Benutzer123',
        firstName: 'Max',
        lastName: 'Mustermann',
        profileImage: 'https://example.com/profile-image.jpg'
      }
    };
  }
};
</script>

<style scoped>
/* Füge benutzerdefinierte Stile hier hinzu */
</style>
