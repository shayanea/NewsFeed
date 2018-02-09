<template>
    <div class="container">
        <card v-for="(item, index) of items" :key="index" :author="item.author" :description="item.description"
        :title="item.title" :url="item.url" :image="item.urlToImage" :source="item.source" :date="item.publishedAt"></card>
    </div>
</template>

<script>
import Card from "./Card";

export default {
    name: "Main",
    data() {
        return {
            items: []
        };
    },
    components: {
        card: Card
    },
    created() {
        return this.getAllFeed();
    },
    methods: {
        requestAsync: function(url) {
            return new Promise((resolve, reject) => {
                fetch(url)
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        return resolve(res.articles);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
        },
        getAllFeed: function() {
            let self = this;
            Promise.all([
                this.requestAsync(
                    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${
                        this.key
                    }`
                ),
                this.requestAsync(
                    `https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=${
                        this.key
                    }`
                ),
                this.requestAsync(
                    `https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=${
                        this.key
                    }`
                )
            ]).then(function(allData) {
                self.items = [...allData[0],...allData[1],...allData[2]];
                return self.items.sort((a,b) => {
                    return new Date(a.publishedAt) - new Date(b.publishedAt)
                })
            });
        }
    }
};
</script>

<style>
.container {
    display: flex;
    justify-content: left;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 30px;
}
</style>
