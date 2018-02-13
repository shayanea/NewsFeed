<template>
    <a :href="url" target="_blank" class="cards">
        <figure class="card-thumbnail">
            <img v-lazy="image" :alt="title" width="100%">
        </figure>
        <div class="card-detail">
            <span class="card-source">{{source.name}}</span>
            <h2 class="card-title">{{title}}</h2>
            <p class="card-description">{{description}}</p>
            <span class="card-date">{{publishDate}}</span>
        </div>
    </a>
</template>

<script>
export default {
  name: "card",
  props: ["author", "title", "description", "url", "image", "source", "date"],
  data() {
    return {};
  },
  computed: {
    publishDate: function() {
      return new Date(this.date)
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "/");
    }
  }
};
</script>

<style>
.cards {
  width: 29%;
  background-color: #fff;
  margin: 0 10px;
  margin-bottom: 35px;
  padding: 15px;
  border-radius: 6px;
  line-height: normal;
  display: block;
  text-decoration: none;
  box-shadow: 0 5px 20px 0 rgba(92, 92, 92, 0);
  transform: translate(0, 0);
  transition: all 0.3s ease-in;
}

@media (max-width: 1024px) {
  .cards {
    width: 43%;
  }
}

@media (max-width: 768px) {
  .cards {
    width: 41%;
  }
}

@media (max-width: 550px) {
  .cards {
    width: 100%;
  }
}

.cards:hover {
  transform: translate(0, -5px);
  box-shadow: 0 5px 20px 0 rgba(134, 134, 134, 0.3);
  transition: all 0.3s ease-in;
}

.cards .card-thumbnail {
  margin: -30px 0 0 0;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 5px 20px 0 rgba(92, 92, 92, 0.7);
  background-color: #263343;
}

.cards .card-thumbnail img {
  display: block;
  height: 220px;
  object-fit: cover;
}

.cards .card-title {
  font-size: 1em;
  color: #263343;
  font-weight: 900;
}

.cards .card-source {
  color: #c0392b;
  font-size: 12px;
  margin-top: 20px;
  display: block;
  font-family: "Bree Serif";
}

.cards .card-description {
  color: #bfbfbf;
  font-size: 13px;
}

.cards .card-date {
  position: absolute;
  top: 0px;
  left: 25px;
  color: #000;
  background-color: #fff;
  padding: 5px;
  border-radius: 6px;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
}
</style>
