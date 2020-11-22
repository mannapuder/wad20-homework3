<template>
    <div id="app" @click="hideDropdown">
        <searchbar v-if="['login'].indexOf($route.name) === -1"></searchbar>
        <router-view></router-view>
    </div>
</template>
<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab'); 
    * {
        font-family: 'Roboto Slab', serif;
        outline: none;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    body {
        background-color: #0277bd;
        color: #263238;
    }

    a {
        color: #40c4ff;
    }

    button {
        padding: 8px 16px;
        margin: 4px 0;
        color: #ffffff;
        background-color: #01579b;
        border: none;
        border-radius: 4px;
    }

    button:hover {
        box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
        cursor: pointer;
    }

    .main-container {
        width: 50%;
        min-height: 100%;
        margin: auto auto;
        padding: 50px 15px 15px 15px;
        background-color: #ffffff;
    }

</style>
<script>
    import Searchbar from "./components/Searchbar";
    export default {
        name: "app",
        components: {
            Searchbar
        },
        methods: {
            hideDropdown() {
                this.$store.commit("SET_DROPDOWN", false)
            }
        }
    };
</script>