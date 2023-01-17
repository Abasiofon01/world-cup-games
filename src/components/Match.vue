<template>
  <div class="group-match-summary">
    <p class="group-heading">Group A</p>
    <div class="matches-wrapper">
      <p class="group-subheading">Matches</p>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team1" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team2" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team1" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team2" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="group-match-summary">
    <p class="group-heading">Group B</p>
    <div class="matches-wrapper">
      <p class="group-subheading">Matches</p>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team3" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team4" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team3" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team4" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="group-match-summary">
    <p class="group-heading">Group C</p>
    <div class="matches-wrapper">
      <p class="group-subheading">Matches</p>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team5" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team6" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team5" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team6" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="group-match-summary">
    <p class="group-heading">Group D</p>
    <div class="matches-wrapper">
      <p class="group-subheading">Matches</p>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team7" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team8" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team7" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team8" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="group-match-summary">
    <p class="group-heading">Group E</p>
    <div class="matches-wrapper">
      <p class="group-subheading">Matches</p>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team9" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team10" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team9" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team10" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="group-match-summary">
    <p class="group-heading">Group F</p>
    <div class="matches-wrapper">
      <p class="group-subheading">Matches</p>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team11" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team12" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team11" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team12" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="group-match-summary">
    <p class="group-heading">Group G</p>
    <div class="matches-wrapper">
      <p class="group-subheading">Matches</p>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team13" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team14" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team13" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team14" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="group-match-summary">
    <p class="group-heading">Group H</p>
    <div class="matches-wrapper">
      <p class="group-subheading">Matches</p>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team15" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team16" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <div class="team-and-score-wrapper">
          <div v-for="team in team15" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
          <span class="score">-</span>
        </div>

        <div class="team-and-score-wrapper team-two-score-wrapper">
          <span class="score">-</span>
          <div v-for="team in team16" class="img-and-country">
            <img :src="team.flag" :alt="team.country" />
            <p class="country">{{ team.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { teams } from "../utils";
export default {
  name: "Match",
  data() {
    return { teams };
  },

  computed: {
    team1() {
      return this.teams.slice(0, 1);
    },
    team2() {
      return this.teams.slice(1, 2);
    },
    team3() {
      return this.teams.slice(2, 3);
    },
    team4() {
      return this.teams.slice(3, 4);
    },
    team5() {
      return this.teams.slice(4, 5);
    },
    team6() {
      return this.teams.slice(5, 6);
    },
    team7() {
      return this.teams.slice(6, 7);
    },
    team8() {
      return this.teams.slice(7, 8);
    },
    team9() {
      return this.teams.slice(8, 9);
    },
    team10() {
      return this.teams.slice(10, 11);
    },
    team11() {
      return this.teams.slice(11, 12);
    },
    team12() {
      return this.teams.slice(12, 13);
    },
    team13() {
      return this.teams.slice(13, 14);
    },
    team14() {
      return this.teams.slice(14, 15);
    },
    team15() {
      return this.teams.slice(15, 16);
    },
    team16() {
      return this.teams.slice(16, 17);
    },
  },
};
</script>
<style lang="css" scoped>
.group-match-summary {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.group-heading {
  font-size: clamp(1.125rem, 0.9437rem + 1.1605vw, 1.5rem);
  font-weight: bold;
}

.matches-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.group-subheading {
  font-size: clamp(0.75rem, 0.5687rem + 1.1605vw, 1.125rem);
  font-weight: bold;
}
.result-wrapper {
  font-weight: bold;
  color: #830542;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
}

.team-and-score-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 35px;
  width: 100%;
}

.img-and-country {
  display: flex;
  align-items: center;
  background-color: white;
  gap: 7px;
  border-radius: 1.92px;
  padding: 8px 8px 8px 8px;
  width: 100%;
  height: 100%;
}
.img-and-country img {
  width: 20px;
  height: 15px;
}
.country {
  font-size: clamp(0.75rem, 0.6291rem + 0.7737vw, 1rem);
}

.score {
  background-color: #edc1d5;
  width: 35px;
  border-radius: 1.92px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 12px;
  padding: 4px;
}

@media (max-width: 320px) {
  .group-match-summary {
    gap: 10px;
  }
}

@media (max-width: 320px) {
  .team-and-score-wrapper {
    height: 25px;
  }

  .score {
    width: 20px;
  }
  .img-and-country {
    gap: 4px;
    padding: 0px 4px;
  }
  .img-and-country img {
    width: 18px;
    height: 12px;
  }
  .matches-wrapper {
    gap: 4px;
  }
  .result-wrapper {
    gap: 2px;
  }

  .team-and-score-wrapper {
    gap: 4px;
  }
}

@media (max-width: 290px) {
  .result-wrapper {
    flex-direction: column;
  }

  .team-two-score-wrapper {
    display: flex;
  }

  .team-two-score-wrapper .img-and-country {
    order: 1;
  }

  .team-two-score-wrapper .score {
    order: 2;
  }
}
</style>
