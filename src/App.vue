<template>
    <div id="app">
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

    header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1;
    }

    header:hover {
        box-shadow: 0 -20px 30px #4d4d4d;
    }

    nav {
        display: flex;
        background-color: #ffffff;
        align-items: center;
    }

    nav div {
        height: 30px;
        flex-grow: 4;
        padding: 10px;
    }

    nav div img {
        height: 100%;
        width: 30px;
        margin-left: 15px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top center;
    }

    nav div.search-container > input {
        box-sizing: border-box;
        height: 30px;
        width: 80%;
        margin: 0;
        padding: 5px;
        border: 1px solid #e0e0e0;
    }

    nav div.search-container > button {
        height: 30px;
        width: 20%;
        margin: 0;
        padding: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    nav div.avatar-container {
        margin-right: 15px;
        text-align: right;
    }

    
    .drop-down-container {
        position: absolute;
        min-width: 150px;
        height: auto;
        background-color: #ffffff;
        padding: 10px;
        right: 0;
        top: 50px;
        text-align: left;
        display: none;
    }
    .drop-down-container span{
        display: block;
    }
    .drop-down-container span.separator{
        border-bottom: 1px solid #d7d7d7;
        margin: 10px -10px;
    }

    .profile {
        width: 45%;
        display: inline-block;
        border: 1px solid #dedede;
        border-radius: 5px;
        text-align: center;
        margin: 1%;
    }
    .profile img{
        width: 75px;
        height: 75px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
        margin: 5px;
    }

    .profile h2{
        font-size: 16px;
    }

    .follow-button{
        background-color: #82008f;
    }

    .follow-button.followed{
        background-color: #ffffff;
        border: 1px solid #82008f;
        color: #82008f;
    }

</style>
<script>
    import Searchbar from "./components/Searchbar";
    export default {
        name: "app",
        components: {
            Searchbar
        }
    };
</script>