<template>
  <div id="browse">
    <section class="main-container">
      <div class="profile" v-for="profile in profiles" :key="profile.id">
        <img :src="profile.avatar" alt="Profile author avatar"/>
        <h2> {{ profile.firstname | addLastName(profile.lastname) }} </h2>
        <button class="follow-button" @click="handleFollow"> {{ "Follow" }}</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {

  computed: {
    profiles: function () {
      return this.$store.getters.allProfiles
    }
  },

  mounted() {
    this.$store.dispatch("getProfiles");
  },

  methods: {
    handleFollow(event) {
      event.target.classList.toggle("followed");
      if (event.target.textContent === "Followed") {
        event.target.textContent = "Follow";
      } else {
        event.target.textContent = "Followed";
      }
    },
  },

  filters: {
    addLastName: function (value, lastname) {
      if (!lastname) return;
      return value + " " + lastname
    }
  }

}
</script>

<style scoped>

.profile {
  width: 45%;
  display: inline-block;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}

.follow-button {
  background-color: #82008f;
}

.follow-button.followed {
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}
</style>