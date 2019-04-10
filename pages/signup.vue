<template>
  <div class="page-container">
    <v-form v-model="valid">
      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        :counter="10"
        label="First name"
        required
      ></v-text-field>

      <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="showPass ? 'visibility' : 'visibility_off'"
        :rules="passwordRules"
        :type="showPass ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="showPass = !showPass"
      ></v-text-field>
      <p>
        <a class="button--green">Create User</a>
      </p>
    </v-form>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: "User",
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      showPass: false,
      password: "",
      passwordRules: [
        v => !!v || "Passwaord is required.",
        v => v.length >= 8 || "Min 8 characters"
      ]
    };
  }
};
</script>

<style scoped>
form {
  grid-column: 3;
  grid-row: 2;
}
</style>