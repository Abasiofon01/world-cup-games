<template>
  <Layout
    @create-new="$router.push({ name: 'new_match' })"
    wrapperClass="matches-container"
    :showBackBtn="false"
  >
    <template #title> Matches and results </template>

    <div class="matches">
      <Match />

      <div class="group-match-summary">
        <p class="group-heading">Group A</p>
        <div class="matches-wrapper">
          <p class="group-subheading">Matches</p>
          <div class="result-wrapper">
            <div class="team-and-score-wrapper">
              <div
                class="img-and-country"
                v-for="match in allMatches"
                :key="`match_${match.id}`"
              >
                <!-- <img :src="match.teamOne.flag" :alt="match.teamOne.name" /> -->
                <!-- <p class="country">{{ match.teamOne.name }}</p> -->
              </div>
              <span class="score">-</span>
            </div>

            <!-- <div class="team-and-score-wrapper team-two-score-wrapper">
              <span class="score">-</span>
              <div v-for="team in team2" class="img-and-country">
                <img :src="team.flag" :alt="team.country" />
                <p class="country">{{ team.country }}</p>
              </div>
            </div> -->

            <div class="btns-wrapper">
              <button
                data-title="Edit"
                id="btn"
                type="button"
                v-for="id in matchById"
                key="id"
                @click="
                  $router.push({
                    name: 'edit_match',
                    params: { id: id.id },
                  })
                "
              >
                <i class="uil uil-edit"></i>
              </button>

              <button
                data-title="Edit"
                id="btn"
                type="button"
                @click="
                  $router.push({
                    name: 'delete_match',
                    params: { id: matchById },
                  })
                "
              >
                <i class="uil uil-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Match from "../components/Match.vue";
import Layout from "../Layout/Layout.vue";
import { mapActions } from "vuex";

export default {
  names: "Matches",

  components: {
    Match,
    Layout,
  },

  data() {
    return {
      allMatches: {
        // type: Array,
        // required: true,
      },

      matchById: {},
    };
  },

  methods: {
    ...mapActions(["fetchAllMatches", "deleteMatch"]),
  },

  async created() {
    await this.fetchAllMatches().then((allMatchesData) => {
      // console.log(allMatchesData);
      this.allMatches = allMatchesData.data;
      console.log(this.allMatches);
      // this.matchById = this.allMatches.map((match) => {
      //   return match;
      // });
      console.log(this.matchById);
    });
  },
};
</script>
<style lang="css" scoped>
.matches-container {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
}
.matches {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 320px) {
  .matches {
    gap: 12px;
  }
}

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

.btns-wrapper {
  background-color: white;
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
