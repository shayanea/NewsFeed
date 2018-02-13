<template>
    <div class="container">
        <category :id="defaultCategory" @set="getCategory"></category>
        <div class="list">
            <card v-for="(item, index) of items" :key="index" :author="item.author" :description="item.description"
            :title="item.title" :url="item.url" :image="item.urlToImage" :source="item.source" :date="item.publishedAt"></card>
        </div>
    </div>
</template>

<script>
import Card from "./Card";
import Category from "./Category";

export default {
    name: "Main",
    data() {
        return {
            items: [],
            urls: {
                1: `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${
                    this.key
                }`,
                2: `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${
                    this.key
                }`,
                3: `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${
                    this.key
                }`,
                4: `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${
                    this.key
                }`,
                5: `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${
                    this.key
                }`
            },
            defaultCategory: 1
        };
    },
    components: {
        card: Card,
        category: Category
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
            this.requestAsync(this.urls[this.defaultCategory]).then(function(
                res
            ) {
                return (self.items = res.sort((a, b) => {
                    return new Date(a.publishedAt) + new Date(b.publishedAt);
                }));
            });
        },
        getCategory: function(id) {
            return (this.defaultCategory = id), this.getAllFeed();
        }
    }
};
</script>

<style>
.container {
    display: block;
    margin-top: 30px;
}

.list {
    display: flex;
    justify-content: left;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 30px;
}
</style>
