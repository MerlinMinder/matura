<template>
  <div id="imgtitle">
    <img src="../assets/coding_background.jpeg" />
    <div id="title">
      <div id="main-title">
        <p id="progress">PROGRESS</p>
        <p id="progressbehind">PROGRESS</p>
        <p id="fit">FIT</p>
      </div>
      <p id="app">Workout Progression App</p>
      <p id="work">Matura Work 2022</p>
      <p id="name">By Merlin Minder 3eW</p>
    </div>
  </div>
  <div class="container">
    <div id="about">
      <p id="about-title" class="title">About</p>
      <p id="about-text">
        This Matura Work is a combination of a project and the correlating
        documentation thereof. As seen in the title the project consists of a
        fitness app which will be programmed from scratch. The resulting app and
        code is open-sourced and available on Github. The documentation includes
        the process from designing to programming, debugging and testing. It,
        combined with further parts of the Matura Work are all on this website.
        Disclaimer: Everything on this website is still subject to change untill
        the final Deadline.
      </p>
      <p id="about-ques">The main question I will aim to answer is:</p>
      <p id="about-objective">
        How does the process of programming a fitness app look like?
      </p>
    </div>
    <div id="timeline">
      <p id="timeline-title" class="title">Project Timeline as of 26.07.2022</p>
      <div id="calendar">
        <p id="july">July</p>
        <p id="august">August</p>
        <p id="september">September</p>
        <p id="october">October</p>
        <p id="november">November</p>
        <p id="december">December</p>
        <div id="month" v-for="month in calendar">
          <div id="day-container" v-for="day in month">
            <div
              id="day"
              :style="{ 'background-color': day.type, color: day.holiday }"
            >
              {{ day.day }}
            </div>
          </div>
        </div>
      </div>
      <div id="timeline-parts">
        <div id="part" v-for="part in parts">
          <div id="part-color" :style="{ 'background-color': part[0] }"></div>
          <div>{{ part[1] }}</div>
        </div>
      </div>
    </div>
    <div id="utensils">
      <p class="title">The technologies used in the project:</p>
      <div id="logos">
        <a
          class="logo"
          target="_blank"
          href="https://www.figma.com/file/5ppSR97yM4pK5sLy3rH1S8/Untitled?node-id=0%3A1"
        >
          <img src="../assets/figma-logo.png" alt="logo" />
        </a>
        <a class="logo" target="_blank" :href="logo[1]" v-for="logo in logos">
          <img :src="logo[0]" alt="logo" />
        </a>
      </div>
    </div>
    <div id="worktime">
      <p class="title" id="worktime-title">Total Worktime</p>
      <p id="total-worktime">
        {{
          ~~(worktime.map((part) => part[0]).reduce((a, b) => a + b, 0) / 60) +
          "h  " +
          (worktime.map((part) => part[0]).reduce((a, b) => a + b, 0) % 60) +
          "m"
        }}
      </p>
      <div id="times">
        <div id="time" v-for="time in worktime">
          <div id="time-part">{{ time[1].toUpperCase() }}</div>
          <div
            :style="{
              width: String(time[0]) + 'px',
              'background-color': '#' + time[0].toString(16).padStart(3, '0'),
            }"
            id="time-block"
          >
            {{ ~~(time[0] / 60) + "h  " + (time[0] % 60) + "m" }}
          </div>
        </div>
      </div>
    </div>
    <div id="posts">
      <p id="post-title" class="title">Posts</p>
      <div v-for="post in posts">
        <div id="post">
          <div id="post-time">
            {{ String(new Date(post.submittime)).slice(0, 15) }}
          </div>
          <div id="post-body" v-html="post.data"></div>
          <p id="post-worktext">Worktime</p>
          <p id="post-worktime">
            {{
              post.worktime[0][1].toUpperCase() +
              ": " +
              post.worktime[0][0] +
              "\n" +
              post.worktime[1][1].toUpperCase() +
              ": " +
              post.worktime[1][0]
            }}
          </p>
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
const worktime = ref([]);
const workingtime = ref({
  website: 0,
  design: 0,
  programming: 0,
  debugging: 0,
  posts: 0,
});

const types = {
  none: "gray",
  kickoff: "#ff0000",
  website: "#ffaa00",
  idea: "#00ff00",
  design: "#00aaff",
  ui: "#0000ff",
  func: "#aa00ff",
  debug: "#ff00aa",
  finalasiation: "#ff0000",
  deadline: "#000000",
};

const holidays = {
  normal: "white",
  holiday: "black",
  trip: "red",
};

const calendar = [
  [
    { day: 1, type: types.none, holiday: holidays.normal },
    { day: 2, type: types.none, holiday: holidays.normal },
    { day: 3, type: types.none, holiday: holidays.normal },
    { day: 4, type: types.none, holiday: holidays.normal },
    { day: 5, type: types.none, holiday: holidays.normal },
    { day: 6, type: types.none, holiday: holidays.normal },
    { day: 7, type: types.none, holiday: holidays.normal },
    { day: 8, type: types.kickoff, holiday: holidays.normal },
    { day: 9, type: types.website, holiday: holidays.normal },
    { day: 10, type: types.website, holiday: holidays.normal },
    { day: 11, type: types.website, holiday: holidays.normal },
    { day: 12, type: types.website, holiday: holidays.normal },
    { day: 13, type: types.website, holiday: holidays.normal },
    { day: 14, type: types.website, holiday: holidays.normal },
    { day: 15, type: types.website, holiday: holidays.normal },
    { day: 16, type: types.website, holiday: holidays.holiday },
    { day: 17, type: types.website, holiday: holidays.holiday },
    { day: 18, type: types.website, holiday: holidays.holiday },
    { day: 19, type: types.idea, holiday: holidays.holiday },
    { day: 20, type: types.idea, holiday: holidays.holiday },
    { day: 21, type: types.idea, holiday: holidays.holiday },
    { day: 22, type: types.idea, holiday: holidays.holiday },
    { day: 23, type: types.idea, holiday: holidays.holiday },
    { day: 24, type: types.idea, holiday: holidays.holiday },
    { day: 25, type: types.idea, holiday: holidays.holiday },
    { day: 26, type: types.idea, holiday: holidays.holiday },
    { day: 27, type: types.idea, holiday: holidays.holiday },
    { day: 28, type: types.idea, holiday: holidays.holiday },
    { day: 29, type: types.idea, holiday: holidays.holiday },
    { day: 30, type: types.idea, holiday: holidays.holiday },
    { day: 31, type: types.idea, holiday: holidays.holiday },
  ],
  [
    { day: 1, type: types.idea, holiday: holidays.holiday },
    { day: 2, type: types.idea, holiday: holidays.holiday },
    { day: 3, type: types.idea, holiday: holidays.holiday },
    { day: 4, type: types.idea, holiday: holidays.holiday },
    { day: 5, type: types.idea, holiday: holidays.holiday },
    { day: 6, type: types.idea, holiday: holidays.holiday },
    { day: 7, type: types.idea, holiday: holidays.holiday },
    { day: 8, type: types.idea, holiday: holidays.holiday },
    { day: 9, type: types.idea, holiday: holidays.holiday },
    { day: 10, type: types.idea, holiday: holidays.holiday },
    { day: 11, type: types.idea, holiday: holidays.holiday },
    { day: 12, type: types.idea, holiday: holidays.holiday },
    { day: 13, type: types.idea, holiday: holidays.holiday },
    { day: 14, type: types.idea, holiday: holidays.holiday },
    { day: 15, type: types.idea, holiday: holidays.holiday },
    { day: 16, type: types.idea, holiday: holidays.holiday },
    { day: 17, type: types.idea, holiday: holidays.holiday },
    { day: 18, type: types.idea, holiday: holidays.holiday },
    { day: 19, type: types.idea, holiday: holidays.holiday },
    { day: 20, type: types.idea, holiday: holidays.holiday },
    { day: 21, type: types.idea, holiday: holidays.holiday },
    { day: 22, type: types.design, holiday: holidays.normal },
    { day: 23, type: types.design, holiday: holidays.normal },
    { day: 24, type: types.design, holiday: holidays.normal },
    { day: 25, type: types.design, holiday: holidays.normal },
    { day: 26, type: types.design, holiday: holidays.normal },
    { day: 27, type: types.design, holiday: holidays.normal },
    { day: 28, type: types.design, holiday: holidays.normal },
    { day: 29, type: types.design, holiday: holidays.normal },
    { day: 30, type: types.design, holiday: holidays.normal },
    { day: 31, type: types.design, holiday: holidays.normal },
  ],
  [
    { day: 1, type: types.design, holiday: holidays.normal },
    { day: 2, type: types.design, holiday: holidays.normal },
    { day: 3, type: types.design, holiday: holidays.normal },
    { day: 4, type: types.design, holiday: holidays.normal },
    { day: 5, type: types.design, holiday: holidays.normal },
    { day: 6, type: types.design, holiday: holidays.normal },
    { day: 7, type: types.design, holiday: holidays.normal },
    { day: 8, type: types.design, holiday: holidays.normal },
    { day: 9, type: types.design, holiday: holidays.normal },
    { day: 10, type: types.design, holiday: holidays.normal },
    { day: 11, type: types.design, holiday: holidays.normal },
    { day: 12, type: types.ui, holiday: holidays.normal },
    { day: 13, type: types.ui, holiday: holidays.normal },
    { day: 14, type: types.ui, holiday: holidays.normal },
    { day: 15, type: types.ui, holiday: holidays.normal },
    { day: 16, type: types.ui, holiday: holidays.normal },
    { day: 17, type: types.ui, holiday: holidays.normal },
    { day: 18, type: types.ui, holiday: holidays.normal },
    { day: 19, type: types.ui, holiday: holidays.normal },
    { day: 20, type: types.ui, holiday: holidays.normal },
    { day: 21, type: types.ui, holiday: holidays.normal },
    { day: 22, type: types.ui, holiday: holidays.normal },
    { day: 23, type: types.ui, holiday: holidays.normal },
    { day: 24, type: types.ui, holiday: holidays.normal },
    { day: 25, type: types.ui, holiday: holidays.normal },
    { day: 26, type: types.ui, holiday: holidays.trip },
    { day: 27, type: types.ui, holiday: holidays.trip },
    { day: 28, type: types.ui, holiday: holidays.trip },
    { day: 29, type: types.ui, holiday: holidays.trip },
    { day: 30, type: types.ui, holiday: holidays.trip },
  ],
  [
    { day: 1, type: types.ui, holiday: holidays.trip },
    { day: 2, type: types.ui, holiday: holidays.trip },
    { day: 3, type: types.ui, holiday: holidays.trip },
    { day: 4, type: types.ui, holiday: holidays.trip },
    { day: 5, type: types.ui, holiday: holidays.trip },
    { day: 6, type: types.ui, holiday: holidays.trip },
    { day: 7, type: types.ui, holiday: holidays.trip },
    { day: 8, type: types.ui, holiday: holidays.holiday },
    { day: 9, type: types.ui, holiday: holidays.holiday },
    { day: 10, type: types.ui, holiday: holidays.holiday },
    { day: 11, type: types.ui, holiday: holidays.holiday },
    { day: 12, type: types.ui, holiday: holidays.holiday },
    { day: 13, type: types.ui, holiday: holidays.holiday },
    { day: 14, type: types.ui, holiday: holidays.holiday },
    { day: 15, type: types.ui, holiday: holidays.holiday },
    { day: 16, type: types.ui, holiday: holidays.holiday },
    { day: 17, type: types.func, holiday: holidays.holiday },
    { day: 18, type: types.func, holiday: holidays.holiday },
    { day: 19, type: types.func, holiday: holidays.holiday },
    { day: 20, type: types.func, holiday: holidays.holiday },
    { day: 21, type: types.func, holiday: holidays.holiday },
    { day: 22, type: types.func, holiday: holidays.holiday },
    { day: 23, type: types.func, holiday: holidays.holiday },
    { day: 24, type: types.func, holiday: holidays.normal },
    { day: 25, type: types.func, holiday: holidays.normal },
    { day: 26, type: types.func, holiday: holidays.normal },
    { day: 27, type: types.func, holiday: holidays.normal },
    { day: 28, type: types.func, holiday: holidays.normal },
    { day: 29, type: types.func, holiday: holidays.normal },
    { day: 30, type: types.func, holiday: holidays.normal },
    { day: 31, type: types.func, holiday: holidays.normal },
  ],
  [
    { day: 1, type: types.func, holiday: holidays.normal },
    { day: 2, type: types.func, holiday: holidays.normal },
    { day: 3, type: types.func, holiday: holidays.normal },
    { day: 4, type: types.func, holiday: holidays.normal },
    { day: 5, type: types.func, holiday: holidays.normal },
    { day: 6, type: types.func, holiday: holidays.normal },
    { day: 7, type: types.func, holiday: holidays.normal },
    { day: 8, type: types.func, holiday: holidays.normal },
    { day: 9, type: types.func, holiday: holidays.normal },
    { day: 10, type: types.func, holiday: holidays.normal },
    { day: 11, type: types.func, holiday: holidays.normal },
    { day: 12, type: types.func, holiday: holidays.normal },
    { day: 13, type: types.func, holiday: holidays.normal },
    { day: 14, type: types.debug, holiday: holidays.normal },
    { day: 15, type: types.debug, holiday: holidays.normal },
    { day: 16, type: types.debug, holiday: holidays.normal },
    { day: 17, type: types.debug, holiday: holidays.normal },
    { day: 18, type: types.debug, holiday: holidays.normal },
    { day: 19, type: types.debug, holiday: holidays.normal },
    { day: 20, type: types.debug, holiday: holidays.normal },
    { day: 21, type: types.debug, holiday: holidays.normal },
    { day: 22, type: types.debug, holiday: holidays.normal },
    { day: 23, type: types.debug, holiday: holidays.normal },
    { day: 24, type: types.debug, holiday: holidays.normal },
    { day: 25, type: types.debug, holiday: holidays.normal },
    { day: 26, type: types.debug, holiday: holidays.normal },
    { day: 27, type: types.debug, holiday: holidays.normal },
    { day: 28, type: types.finalasiation, holiday: holidays.normal },
    { day: 29, type: types.none, holiday: holidays.normal },
    { day: 30, type: types.none, holiday: holidays.normal },
  ],
  [
    { day: 1, type: types.none, holiday: holidays.normal },
    { day: 2, type: types.none, holiday: holidays.normal },
    { day: 3, type: types.none, holiday: holidays.normal },
    { day: 4, type: types.none, holiday: holidays.normal },
    { day: 5, type: types.deadline, holiday: holidays.normal },
    { day: 6, type: types.none, holiday: holidays.normal },
    { day: 7, type: types.none, holiday: holidays.normal },
    { day: 8, type: types.none, holiday: holidays.normal },
    { day: 9, type: types.none, holiday: holidays.normal },
    { day: 10, type: types.none, holiday: holidays.normal },
    { day: 11, type: types.none, holiday: holidays.normal },
    { day: 12, type: types.none, holiday: holidays.normal },
    { day: 13, type: types.none, holiday: holidays.normal },
    { day: 14, type: types.none, holiday: holidays.normal },
    { day: 15, type: types.none, holiday: holidays.normal },
    { day: 16, type: types.none, holiday: holidays.normal },
    { day: 17, type: types.none, holiday: holidays.normal },
    { day: 18, type: types.none, holiday: holidays.normal },
    { day: 19, type: types.none, holiday: holidays.normal },
    { day: 20, type: types.none, holiday: holidays.normal },
    { day: 21, type: types.none, holiday: holidays.normal },
    { day: 22, type: types.none, holiday: holidays.normal },
    { day: 23, type: types.none, holiday: holidays.normal },
    { day: 24, type: types.none, holiday: holidays.holiday },
    { day: 25, type: types.none, holiday: holidays.holiday },
    { day: 26, type: types.none, holiday: holidays.holiday },
    { day: 27, type: types.none, holiday: holidays.holiday },
    { day: 28, type: types.none, holiday: holidays.holiday },
    { day: 29, type: types.none, holiday: holidays.holiday },
    { day: 30, type: types.none, holiday: holidays.holiday },
    { day: 31, type: types.none, holiday: holidays.holiday },
  ],
];

const parts = [
  ["#ff0000", "Kickoff / Finalization"],
  ["#ffaa00", "Website Creation"],
  ["#00ff00", "Design Ideas, Website Styling"],
  ["#00aaff", "Figma App Design"],
  ["#0000ff", "Programming the UI"],
  ["#aa00ff", "Programming Functionalities"],
  ["#ff00aa", "Debugging and Testing"],
  ["#000000", "Matura Deadline"],
];

const logos = [
  [
    "https://freelance-france.com/wp-content/uploads/2021/10/Image1-1.png",
    "https://code.visualstudio.com/",
  ],
  [
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png",
    "https://firebase.google.com/",
  ],
  [
    "https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png",
    "https://vuejs.org/",
  ],
  [
    "https://developers.pendo.io/wp-content/uploads/2020/11/react-native.png",
    "https://reactnative.dev/",
  ],
  [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    "https://google.com",
  ],
  [
    "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png",
    "https://github.com/MerlinMinder/matura",
  ],
  [
    "https://res.cloudinary.com/practicaldev/image/fetch/s--5N472VlU--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a",
    "https://docs.expo.dev/",
  ],
];

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
  for (let key in workingtime.value) {
    worktime.value.push([workingtime.value[key], key]);
  }
  worktime.value.sort().reverse();
  posts.value.forEach((post) => {
    const work = [];
    for (let key in post.worktime) {
      if (post.worktime[key] > 0) {
        work.push([post.worktime[key], key]);
      }
    }
    work.sort().reverse();
    post.worktime = work;
  });
});
</script>

<style lang="scss" scoped>
#imgtitle {
  display: flex;
  justify-content: center;
  height: 100vh;

  img {
    object-fit: cover;
    width: 100vw;
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
      margin-bottom: 10px;
      margin-top: 30vh;
      background-color: transparent;

      #progress {
        font-size: calc(30px + 6vw);
        font-weight: 400;
        background: linear-gradient(
          90deg,
          rgb(66, 255, 255) 0%,
          rgb(255, 192, 66) 95.24%
        );
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
        text-shadow: -3px -3px 8px rgba(66, 255, 255, 0.6),
          3px 3px 8px rgba(255, 192, 66, 0.8);
      }

      #fit {
        font-size: calc(30px + 6vw);
        font-weight: 700;
        background: linear-gradient(90deg, #42ffff 0%, #ffc042 95.24%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    #app {
      font-size: 50px;
      margin-bottom: 22vh;
    }
    #work {
      font-size: 35px;
    }
    #name {
      font-size: 25px;
    }
  }
}

.container {
  overflow-x: hidden;
  padding: 0px 10vw;

  .title {
    font-size: 38px;
    background: linear-gradient(90deg, #42ffff 0%, #ffc042 95.24%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    width: fit-content;
    margin-bottom: 10vh;
  }

  #about {
    padding: 10vw 10vw;
    display: flex;
    align-items: center;
    flex-direction: column;

    #about-text {
      margin: 0 8vw;
      padding: 2vw;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.5;
      border-radius: 15px;
      box-shadow: inset -8px -8px 12px rgba(151, 151, 151, 0.5),
        inset 8px 8px 12px rgba(0, 0, 0, 0.5);
    }

    #about-ques {
      text-align: center;
      font-size: 20px;
      margin: 10vh 0px;
    }

    #about-objective {
      text-align: center;
      font-size: 30px;
      font-weight: 1000;
      background: linear-gradient(90deg, #42ffff 0%, #ffc042 95.24%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 5vh 0px;
      padding: 10px;
      box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.5),
        -5px -5px 7px rgba(150, 150, 150, 0.5);
      border-radius: 12px;
    }
  }

  #timeline {
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      margin: 10px;
    }

    #timeline-title {
      margin-bottom: 50px;
    }

    #calendar {
      display: flex;
      flex-direction: row;
      margin: 8vh 0;
      flex-wrap: wrap;
      width: 60vw;
      justify-content: space-evenly;

      p {
        position: absolute;
        font-size: 20px;
        font-weight: 600;
      }

      #july {
        margin-top: 0;
        left: 28vw;
      }

      #august {
        margin-top: 0;
      }

      #september {
        margin-top: 0;
        right: 26vw;
      }

      #october {
        margin-top: 35vh;
        left: 27vw;
      }

      #november {
        margin-top: 35vh;
      }

      #december {
        margin-top: 35vh;
        right: 26.5vw;
      }

      #month {
        border-radius: 10px;
        padding: 20px;
        margin: 30px 0;
        width: 235px;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;

        justify-content: flex-start;
        box-shadow: inset 6px 6px 8px rgba(153, 153, 153, 0.5),
          inset -6px -6px 8px rgba(0, 0, 0, 0.5);

        #day {
          height: 30px;
          width: 30px;
          margin: 1.5px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          border-radius: 5px;
          box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.5),
            inset -2px -2px 3px rgba(230, 230, 230, 0.5);
        }
      }
    }

    #timeline-parts {
      #part {
        margin: 15px;
        display: flex;
        align-items: center;

        #part-color {
          height: 20px;
          width: 30px;
          border-radius: 10px;
          margin-right: 20px;
        }
      }
    }
  }

  #utensils {
    margin: 10vh 0;
    align-items: center;
    display: flex;
    flex-direction: column;

    #logos {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 770px;

      .logo {
        margin: 10px;
        display: flex;
        align-items: center;
        background-color: #666666;

        a {
          width: fit-content;
          height: fit-content;
        }

        img {
          width: 150px;
          padding: 0 10px;
          background-color: #666666;
        }
      }
    }
  }

  #worktime {
    margin-top: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    #worktime-title {
      margin-top: 5vh;
      margin-bottom: 10vh;
    }

    #total-worktime {
      margin-bottom: 5vh;
      font-size: 30px;
      font-weight: 600;
    }

    #times {
      #time {
        #time-part {
          margin: 10px 0;
          font-weight: 600;
        }

        #time-block {
          height: 30px;
          padding: 5px;
          padding-left: 10px;
          display: flex;
          align-items: center;
          font-weight: 600;
          border-radius: 10px;
          box-shadow: inset 4px 4px 6px rgba(153, 153, 153, 0.5),
            inset -4px -4px 6px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  #posts {
    display: flex;
    align-items: center;
    flex-direction: column;

    #post-title {
      margin-top: 10vh;
      margin-bottom: 5vh;
    }

    #post {
      padding: 30px;
      border-radius: 10px;
      margin: 10vh 2vw;
      box-shadow: inset -5px -5px 8px rgba(0, 0, 0, 0.5),
        inset 5px 5px 8px rgba(150, 150, 150, 0.5),
        5px 5px 8px rgba(0, 0, 0, 0.5), -5px -5px 8px rgba(150, 150, 150, 0.5);

      #post-time {
        margin-bottom: 30px;
        font-size: 22px;
      }

      #post-worktext {
        width: fit-content;
        font-weight: 800;
        margin: 20px 0px;
        background: linear-gradient(90deg, #42ffff 0%, #ffc042 95.24%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      #post-worktime {
        margin-bottom: 10px;
        white-space: pre-wrap;
      }
    }
  }
}
</style>
