<template>
  <div class="card_content">
    <div class="card_image" />
    <div class="card_desc">
      <div class="card_desc_main">
        <h6 class="name">
          <a href="#" class="link">
            {{game.name}}
          </a>
        </h6>
        <div class="date">
          Release Date: {{formatDate(game.first_release_date)}}
        </div>
        <div class="summary">
          <p>
            {{truncateStr(game.summary, 150)}}
          </p>
        </div>
      </div>
      <div class="card_desc_aside">
        <div class="card_rating">
          {{formatRate(game.rating)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Game',
  props: {
    game: Object,
  },
  methods: {
    truncateStr (str: string, len: number) {
      let ellipsis = '';
      if (str.length > len) ellipsis = '...';
      const strTunc = str.substring(0, len);
      return `${strTunc}${ellipsis}`;
    },
    formatDate(date: number) {
      const d = new Date(date);
      return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    },
    formatRate(rate: number) {
      return Math.round((rate / 100) * 10);
    }
  }

})
</script>

<style>
.card_content {
  display: flex;
  margin-bottom: 20px;
  min-height: 150px;
  position: relative;
}
.card_image {
  width: 150px;
  background-color: #000;
}
.card_desc {
  padding: 15px;
  background-color: #0e1a2b;
  flex: 3;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.card_desc .name {
  font-weight: bold;
  margin-bottom: 5px;
}
.card_desc .name .link {
  text-decoration: none;
}
.card_desc .date {
  margin-bottom: 20px;
}
.card_desc .date,
.card_desc .summary {
  font-size: 14px;
}
.card_desc_aside {
  margin: 10px;
  align-self: center;
}
.card_rating {
  width: 18px;
  height: 18px;
  padding: 3px;
  background: #5692e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
}
@media (max-width: 576px) {
  .card_content {
    flex-direction: column;
  }
  .card_content .card_image {
    width: 100%;
    height: 150px;
  }
  .card_desc_aside {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>