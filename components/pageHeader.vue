<template>
  <div class="header-container">
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" nuxt flat>Home</v-btn>
        <v-btn to="/about" nuxt flat>About</v-btn>
        <v-btn to="/signup" nuxt flat>Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>



<style scoped>
.header-container {
  grid-column: 2;
  grid-row: 1;
}
.v-btn--active {
  color: seagreen;
}
</style>