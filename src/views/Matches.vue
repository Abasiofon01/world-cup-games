<template>
  <Layout
    @create-new="$router.push({ name: 'new_match' })"
    wrapperClass="matches-container"
    :showBackBtn="false"
  >
    <template #title> Matches and results </template>

    <div class="matches">
      <div
        class="group-match-summary"
        v-for="group in groupedResults"
        :key="`group_${group.name}`"
      >
        <p class="group-heading">Group {{ group.name }}</p>
        <div class="matches-wrapper">
          <p class="group-subheading">Matches</p>

          <div
            class="result-wrapper"
            v-for="result in group.results"
            :key="`match_${result.match_id}`"
          >
            <div class="team-and-score-wrapper">
              <div class="img-and-country">
                <img :src="result.team1_flag" :alt="`${team1_flag} flag`" />

                <p class="country">{{ result.team1 }}</p>
              </div>
              <span class="score">{{ result.team1_score }}</span>
            </div>

            <div class="team-and-score-wrapper team-two-score-wrapper">
              <span class="score">{{ result.team2_score }}</span>
              <div class="img-and-country">
                <img :src="result.team2_flag" :alt="`${team2_flag} flag`" />
                <p class="country">{{ result.team2 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Layout from "../Layout/Layout.vue";
import { mapActions } from "vuex";

export default {
  names: "Matches",

  components: {
    Layout,
  },

  data() {
    return {
      allResults: {},
      groupedResults: [],
      matchById: {},
    };
  },

  methods: {
    ...mapActions(["fetchAllResults"]),
  },

  async created() {
    await this.fetchAllResults().then((allResultsData) => {
      this.allResults = allResultsData.data;
    });

    this.groupedResults = Object.entries(
      this.allResults.reduce(
        (
          acc,
          {
            group_name,
            match_id,
            match_date,
            start_time,
            team1,
            team1_score,
            team1_flag,
            team2,
            team2_score,
            team2_flag,
          }
        ) => {
          if (!acc[group_name]) {
            acc[group_name] = [];
          }
          acc[group_name].push({
            match_id,
            match_date,
            start_time,
            team1,
            team1_score,
            team1_flag,
            team2,
            team2_score,
            team2_flag,
          });

          return acc;
        },
        {}
      )
    ).map(([name, results]) => ({ name, results }));
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
  text-transform: capitalize;
  font-weight: bold;
}

.matches-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.matches-wrapper div {
  display: flex;
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
  background-color: gainsboro;
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
