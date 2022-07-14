<template>
  <ul>
    <input type="email" v-model="email" placeholder="E-Mail" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </ul>
  <div v-if="currentuid == adminuid">
    <editor
      api-key="jsvlfar0ke1dnz3qs8fab25fyog6zo4vrwgfc5hwidmle72z"
      :init="{
        height: 200,
        width: 200,
        menubar: true,
        plugins: ['image', 'code', 'link'],
        skin: 'oxide-dark',
        statusbar: false,
      }"
      v-model="content"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";
import { db } from "../firebase/firebaseinit";
import { auth } from "../firebase/firebaseinit";
import { getDoc, doc } from "@firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const adminuid = ref("");
const currentuid = ref("");
const content = ref("");

onMounted(async () => {
  console.log(auth.currentUser);
  const datadoc = await getDoc(doc(db, "admin", "user"));
  adminuid.value = datadoc.data().uid;
});

const login = async () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log(auth.currentUser);
      currentuid.value = auth.currentUser.uid;
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
