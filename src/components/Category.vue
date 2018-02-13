<template>
    <ul class="category">
        <li v-for="(item, index) of list" :key="index" >
            <a @click="setCategory(item.id)" :class="{ active : getActive(item.id)}">{{item.title}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "category",
    props: ["id"],
    data() {
        return {
            list: [
                {
                    title: "Technology",
                    id: 1
                },
                {
                    title: "Sports",
                    id: 2
                },
                {
                    title: "Health",
                    id: 3
                },
                {
                    title: "Entertainment",
                    id: 4
                },
                {
                    title: "Science",
                    id: 5
                }
            ]
        };
    },
    methods: {
        setCategory: function(id) {
            this.$emit("set", id);
        },
        getActive: function(id) {
            return this.id == id ? true : false;
        }
    }
};
</script>

<style>
.category {
    display: block;
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
    width: 100%;
    text-align: center;
}

.category li {
    display: inline-block;
    margin: 0 15px;
}

@media (max-width: 550px) {
    .category li {
        margin: 20px 15px;
        display: block;
    }
}

.category li a {
    cursor: pointer;
    color: #444;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    padding: 10px 5px;
    transition: border-bottom 0.3s ease-in, color 0.3s ease-in;
}

.category li a.active,
.category li a:hover {
    color: #000;
    border-bottom: 2px solid #538AE4;
    transition: border-bottom 0.3s ease-in, color 0.3s ease-in;
}
</style>
