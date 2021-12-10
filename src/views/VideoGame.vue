<template>
  <div class="page-container">
    <div class="game-page-content">
      <div v-if="loading">
        <Loader type="loading" />
      </div>
      <div v-else-if="error">
        <Loader type="error" />
      </div>
      <div v-else>
        <div class="page-content">
          <aside class="aside-content">
            <Filters
              :handleNameFilter="handleNameFilter"
              :handleScoreFilter="handleScoreFilter"
              :handleOrderByFilter="handleOrderByFilter"
              :filterName="filterName"
              :clearAll="clearAll"
            />
          </aside>
          <main class="main-content">
            <Games
              :games="games"
              :filterName="filterName"
              :filterScore="filterScore"
              :filterOrderBy="filterOrderBy"
            />
          </main>
        </div>
      </div>
    </div>
  </div>
  <router-view user="mememe" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Games from '../components/Games.vue';
import Filters from '../components/Filters.vue';
import Loader from '../components/Loader.vue';
import Game from '../types/Game';
import FilterTerm from '../types/FilterTerm';

export default defineComponent({
  name: 'VideoGame',
  components: {
    Games,
    Filters,
    Loader,
  },
  setup () {
    const filterName = ref('');
    const filterScore = ref();
    const filterOrderBy = ref<FilterTerm>();

    const handleNameFilter = (filterText: string) => {
      filterName.value = filterText;
    }
    const handleScoreFilter = (score: number) => {
      filterScore.value = score;
    }
    const handleOrderByFilter = (orderBy: FilterTerm) => {
      filterOrderBy.value = orderBy;
    }
    const clearAll = () => {
      filterName.value = '';
      filterScore.value = null;
      filterOrderBy.value = undefined;
    }

    return {
      handleNameFilter,
      handleScoreFilter,
      handleOrderByFilter,
      clearAll,
      filterName,
      filterScore,
      filterOrderBy,
      }
  },
  data () {
    return {
      loading: false,
      error: false,
      games: [] as Game[],
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      fetch('https://public.connectnow.org.uk/applicant-test/')
      .then(res => res.json())
      .then(data => {
        this.loading = false;
        this.error = false,
        this.games = data;
      })
      .catch((err) => {
        this.error = true;
        this.loading = false;
      })
    }
  }

});
</script>

<style scoped>
.page-content {
  width: 100%;
  display: flex;
}
.aside-content {
  width: 25%;
}
.main-content {
  width: 75%;
}
@media (max-width: 992px) {
  .page-content {
    flex-direction: column;
  }
  .aside-content,
  .main-content {
    width: 100%;
  }
  .aside-content {
    margin-bottom: 40px;
  }
}
</style>
