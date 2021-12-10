<template>
  <section class="main_section">
    <div class="content">
      <div v-if="filteredGamesLen">
        <Pagination
          :filteredGamesLen="filteredGamesLen"
          :paginateValOf="paginateValOf"
          :paginateValTot="paginateValTot"
          :paginateVal="paginateVal"
        />
        <transition-group name="games" tag="ul">
          <li v-for="game in filteredPaginateGames" :key="game.id">
            <GameContent :game="game" />
          </li>
        </transition-group>
      </div>
      <div v-else>
        <div class="no_search">
          No Search Found
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import GameContent from './Game.vue';
import Pagination from './Pagination.vue';
import Game from '../types/Game';
import FilterTerm from '../types/FilterTerm';

export default defineComponent({
  name: 'Games',
  components: {
    GameContent,
    Pagination,
  },
  props: {
    games: {
      required: true,
      type: Array as PropType<Game[]>,
    },
    filterName: {
      required: true,
      type: String,
    },
    filterScore: {
      required: true,
      type: Number,
    },
    filterOrderBy: {
      required: true,
      type: String as PropType<FilterTerm>,
    }
  },
  setup(props) {
    let paginate = ref<number>(5);

    const filteredGames = computed(() => {
      let filtered = [...props.games];
      filtered = props.games.filter((g: Game) => {
        const nameF = g.name.toLowerCase().includes(props.filterName.toLowerCase());
        const scoreF = !props.filterScore ? 10 : Math.round((g.rating / 100) * 10) === Number(props.filterScore);
        return nameF && scoreF;
      });
      if (props.filterOrderBy) {
        filtered = filtered
        .sort((a: Game, b: Game) => {
          return a[props.filterOrderBy] > b[props.filterOrderBy] ? 1 : -1
        })
      }
      resetPaginate();
      return filtered;
    });

    const resetPaginate = () => paginate.value = 5;

    const filteredPaginateGames = computed(() => {
      return filteredGames.value.slice(paginate.value - 5, paginate.value);
    });

    const filteredGamesLen = computed(() => filteredGames.value?.length);

    const paginateVal = (type: string) => {
      paginate.value = paginate.value + (type === 'next' ? 5 : -5);
    }

    const paginateValOf = computed(() => paginate.value / 5);

    const paginateValTot = computed(() => Math.ceil(filteredGamesLen.value / 5));

    return {
      filteredPaginateGames,
      paginate,
      filteredGamesLen,
      paginateValOf,
      paginateValTot,
      paginateVal,
      }
  },
});
</script>

<style scoped>
.main_section {
  margin: 0 10px;
}
.no_search {
  padding: 20px;
  background: #0d1a2b;
  font-size: 0.9rem;
}
.games-move {
  transition: all 1s;
}
.games-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
</style>
