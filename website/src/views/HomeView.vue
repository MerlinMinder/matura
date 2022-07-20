<template>
  <div id="imgtitle">
    <img
      src="https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/blog/wp-content/uploads/2021/03/Create-Software_BG.jpg"
    />
    <div id="title">
      <div id="main-title">
        <p id="progress">PROGRESS</p>
        <p id="progressbehind">PROGRESS</p>
        <p id="fit">FIT</p>
      </div>
      <p>Workout Progression App</p>
      <p>Matura Work 2022</p>
      <p>By Merlin Minder 3eW</p>
    </div>
  </div>
  <div class="container">
    <div id="disposition">
      <p>Disposition:</p>
      <p>
        This Matura Work is a combination of a project and the correlating
        documentation thereof. As seen in the title the project consists of a
        fitness app which will be programmed from scratch. The resulting app and
        code is open-sourced and available on Github. The documentation includes
        the process from designing to programming, debugging and testing. It,
        combined with further parts of the Matura Work are all on this website.
        Disclaimer: Everything on this website is still subject to change untill
        the final Deadline.
      </p>
      <p>The main question I will aim to answer is:</p>
      <p>How does the process of programming a fitness app look like?</p>
    </div>
    <div id="timeline">
      <p>Project timeline as of 08.07.2022:</p>
      <p>
        11.07.2022 - 21.08.2022 Idea gathering focused on design + website
        creation
      </p>
      <p>22.08.2022 - 11.09.2022 Designing app on Figma</p>
      <p>12.09.2022 - 23.10.2022 Programming the UI</p>
      <p>24.10.2022 - 13.11.2022 Programming the functionalities</p>
      <p>14.11.2022 - 27.11.2022 Debugging and testing</p>
      <p>28.11.2022 Finalisation of the project</p>
    </div>
    <div id="utensils">
      <p>The technologies used in the project:</p>
      <p>Figma (Design)</p>
      <p>VS Code (Code Editor)</p>
      <p>Firebase (Website Hosting)</p>
      <p>Vue.js (Website Framework)</p>
      <p>React Native (App Framework)</p>
      <p>Google (Research)</p>
      <p>Github (Code Sharing)</p>
    </div>
    <div>
      Total workingtime:
      {{ workingtime }}
    </div>
    <div id="posts">
      <p>Posts</p>
      <div v-for="post in posts">
        <div id="post">
          <div>{{ String(new Date(post.submittime)).slice(0, 15) }}</div>
          <div v-html="post.data"></div>
          <p>worktime</p>
          <p>{{ post.worktime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs } from "@firebase/firestore";
import { onMounted, ref } from "vue";
import { db } from "../firebase/firebaseinit";

const posts = ref([]);
const workingtime = ref({
  website: 0,
  design: 0,
  programming: 0,
  debugging: 0,
  posts: 0,
});

onMounted(async () => {
  const postsdata = await getDocs(collection(db, "posts"));
  postsdata.forEach((doc) => {
    posts.value.unshift(doc.data());
  });
  posts.value
    .map((post) => post.worktime)
    .forEach((day) => {
      workingtime.value.website += day.website;
      workingtime.value.design += day.design;
      workingtime.value.programming += day.programming;
      workingtime.value.debugging += day.debugging;
      workingtime.value.posts += day.posts;
    });
});
</script>

<style lang="scss" scoped>
.container {
  overflow-x: hidden;
  padding: 10vw;
}

div {
  margin-bottom: 5vh;
}

#post {
  border: 2px solid black;
}

#imgtitle {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  img {
    width: 100vw;
    height: 100vh;
    opacity: 0.3;
    margin: 0;
  }

  #title {
    position: absolute;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      background-color: transparent;
      font-size: 40px;
      margin-top: 10px;
    }

    #main-title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      background-color: transparent;

      #progress {
        font-size: calc(30px + 6vw);
        font-weight: 400;
        background: linear-gradient(90deg, #74dcff 0%, #ffa811 95.24%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        z-index: 1;
      }

      #progressbehind {
        position: absolute;
        font-size: calc(30px + 6vw);
        font-weight: 400;
        color: transparent;
        left: 0;
        z-index: 0;
        text-shadow: -3px -3px 8px rgba(116, 220, 255, 0.6),
          3px 3px 8px rgba(255, 168, 17, 0.8);
      }

      #fit {
        font-size: calc(30px + 6vw);
        font-weight: 700;
        background: linear-gradient(90deg, #74dcff 0%, #ffa811 95.24%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

p {
  margin-bottom: 10px;
  max-width: 80vw;
}
</style>
