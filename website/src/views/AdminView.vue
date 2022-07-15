<template>
  <ul v-if="currentuid != adminuid">
    <input type="email" v-model="email" placeholder="E-Mail" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </ul>
  <div id="editor" v-if="currentuid == adminuid">
    <input type="number" v-model="worktime" placeholder="120 (2h)" />
    <editor
      api-key="jsvlfar0ke1dnz3qs8fab25fyog6zo4vrwgfc5hwidmle72z"
      :init="{
        height: height * 0.9,
        width: width * 0.7,
        menubar: true,
        plugins: ['image', 'code', 'link'],
        skin: 'oxide-dark',
        statusbar: false,
      }"
      v-model="content"
    />
    <button @click="post">Post</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";
import { db } from "../firebase/firebaseinit";
import { auth } from "../firebase/firebaseinit";
import { getDoc, doc, setDoc } from "@firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import router from "../router";

const email = ref("");
const password = ref("");
const adminuid = ref("");
const currentuid = ref("");
const worktime = ref("");
const content = ref("");

const height = window.innerHeight;
const width = window.innerWidth;

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

const post = async () => {
  await setDoc(
    doc(db, "posts", String(Date.now())),
    { data: content.value, worktime: worktime.value, submittime: Date.now() },
    { merge: true }
  );
  content.value = "";
  worktime.value = "";
  router.push("/");
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

#editor {
  display: flex;
  justify-content: center;
}
</style>
