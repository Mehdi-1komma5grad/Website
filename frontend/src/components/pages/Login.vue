<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-card color="surface" class="pa-6 mx-auto">
        <v-card-item>
          <v-form @submit.prevent>
            <v-text-field v-model="firstName" :rules="rules" label="First name">
            </v-text-field>
            <v-text-field v-model="lastName" :rules="rules" label="Last name">
            </v-text-field>
            <v-text-field
              prepend-inner-icon="mdi-email"
              v-model="email"
              :rules="rules"
              label="Email"
            >
              <!-- to see other icons just https://fonts.google.com/icons -->
            </v-text-field>
            <v-checkbox v-model="checkbox" label="remember me" />

            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-form>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    rules: [
      (value) => {
        if (value) return true;

        return "You must enter a first name.";
      },
    ],
    lastName: "",
    email: "",
    checkbox: false,
  }),
};
</script>

<style>
/* Add your custom styles here */
</style>
