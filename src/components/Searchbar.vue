<template>
    <nav>
        <div class="logo-container">
            <img src="../assets/logo.png" alt="postIt">
        </div>
        <div class="search-container">
            <input type="text" name="search"><button type="button">Search</button>
        </div>
        <div class="avatar-container">
            <img class="avatar" @click.stop="toggleshow()">
            <div v-show="show" @click.stop="" ref="dropdown" class="drop-down-container" style="display: block">
                <span id="user-name">John Doe</span>
                <span id="user-email"></span>
                <span class="separator"></span>
                <span>
                    <router-link to="/browse">Browse</router-link>
            </span>
                <span class="separator"></span>
                <span>
                    <router-link to="/">Log Out</router-link>
            </span>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        computed: {
            show: function () {
                return this.$store.getters.getshow()
            }
        },
        methods: {
            toggleshow() {
                this.$store.commit("toggleshow", !this.show)
            }
        }
    }
</script>