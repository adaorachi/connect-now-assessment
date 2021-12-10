<template>
  <div class="filter_section">
    <div class="section_title">
      <h6>Filter Results</h6>
    </div>
    <div class="filter_options">
      <div class="name_filter filter_content">
        <label for="name" class="filter_label">Name (contains)</label>
        <input v-model="nameFilter" id="name" type="text" placeholder="Text string" class="filter_input" @keyup="handleNameFilter(nameFilter)" autocomplete="off">
      </div>

      <div class="filter_options_lower">
        <div class="score_filter filter_content">
          <label for="name" class="filter_label">Minimum Score</label>
          <input v-model="scoreFilter" id="score" type="number" placeholder="1 - 10" class="filter_input" @keyup="handleScoreFilter(scoreFilter)">
        </div>
        <div class="order_filter filter_content">
          <label for="name" class="filter_label">Order By</label>
          <div class="select_filter_content">
            <div class="select_filter_icon">
              <img src="../assets/images/arrow-up-solid.svg" />
            </div>
            <select v-model="orderByFilter" class="filter_select" @change="handleOrderByFilter(orderByFilter)">
              <option disabled value="">Select...</option>
              <option value="first_release_date">Release Date</option>
              <option value="name">Name</option>
              <option value="rating">Score</option>
            </select>
          </div>
        </div>
        <Button label="Clear" :handleClick="clearAllFilter" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  name: 'Filters',
  components: {
    Button,
  },
  data() {
    return {
      nameFilter: '',
      scoreFilter: undefined,
      orderByFilter: undefined,
    }
  },
  methods: {
    clearAllFilter () {
      this.nameFilter = '';
      this.scoreFilter = undefined;
      this.orderByFilter = undefined;
      if ( this.$props.clearAll) this.$props.clearAll();
    }
  },
  props: {
    handleNameFilter: Function,
    handleScoreFilter: Function,
    handleOrderByFilter: Function,
    clearAll: Function,
  }
});
</script>

<style>
.filter_section {
  background-color: #0e1a2b;
  padding: 20px;
  margin: 0 10px;
}
.section_title {
  font-size: 1rem;
  margin-bottom: 30px
}
.filter_content {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
.filter_label {
  font-size: 0.8rem;
  margin-bottom: 5px;
}
.filter_input,
.filter_select {
  outline: none;
  border: none;
  background-color: #182c47;
  color: #fff;
  padding: 5px 10px;
}
.filter_input {
  height: 30px;
}
.filter_select {
  width: 100%;
  height: 40px;
}
.filter_input::placeholder {
  color: #c1d1e8;
}
.select_filter_content {
  display: flex;
}
.select_filter_icon {
  width: 50px;
  background: #5692e8;
  color: #fff;
  display: flex;
  justify-content: center;
}
.select_filter_icon img {
  width: 30%;
}
.clear_button_content {
  text-align: right;
}
.clear_button {
  outline: none;
  border: none;
  background: #5692e8;
  width: 80px;
  height: 40px;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
}

@media (min-width: 576px) and (max-width: 992px) {
  .filter_options_lower {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .order_filter {
    flex: 1;
    padding: 0 20px;
  }
  .order_filter,
  .score_filter {
    margin-bottom: 0;
  }
}

</style>