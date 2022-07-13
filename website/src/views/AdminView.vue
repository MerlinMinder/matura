<template>
  <ul>
    <input type="email" v-model="email" placeholder="E-Mail" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase/firebaseinit";
import { auth } from "../firebase/firebaseinit";
import { signInWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");

onMounted(() => {});

const login = async () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log(auth.currentUser);
    })
    .catch((err) => {
      console.log(err);
    });
  email.value = "";
  password.value = "";
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input,
  button {
    margin: 5px;
  }
}
</style>
