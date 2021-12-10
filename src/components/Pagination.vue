<template>
  <div class="search_content_result">
    <div>No of search: <strong>{{filteredGamesLen}}</strong></div>
    <div class="pagination_content">
      <div class="pagination_content_buttons">
        <button @click="paginateVal('prev')" :disabled="paginateValOf <= 1" class="paginate_button">
          <img src="../assets/images/arrow-left-solid.svg" />
        </button>
        <button @click="paginateVal('next')" :disabled="paginateValOf >= paginateValTot" class="paginate_button">
            <img src="../assets/images/arrow-right-solid.svg" />
        </button>
      </div>
      <div>{{paginateValOf}} of {{paginateValTot}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    filteredGamesLen: Number,
    paginateValOf: Number,
    paginateValTot: Number,
    paginateVal: Function,
  }

}
</script>

<style>
.search_content_result {
  background-color: #0d1a2b;
  margin-bottom: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.paginate_button {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #5692e8;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
}
.paginate_button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.pagination_content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination_content_buttons {
    display: flex;
    margin: 0 10px;
}
@media (max-width: 576px) {
  .pagination_content {
    flex-direction: column;
  }
}
</style>