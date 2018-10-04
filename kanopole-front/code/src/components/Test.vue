<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Proof of Concept</h2>

    <p>
        <ul>
            <li v-for="item in items" :key="item.value">
                <b>{{ item.value }}</b> => <i>{{ item.label }}</i>
            </li>
        </ul>
    </p>

    <hr>

    <div class="btn btn-default" @click="loadItemsFromApi">API call</div>
 
  </div>
</template>

<script>
import axios from "axios";
import options from "../config/axios-opt";

export default {
  name: "Test",
  data() {
    return {
      msg: "Random Msg",
      items: []
    };
  },
  methods: {
    loadItems() {
      return [
        {
          value: 10,
          label: "yolo"
        },
        {
          value: 17,
          label: "yoli"
        }
      ];
    },
    loadItemsFromApi() {

      axios(options)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    this.items = this.loadItems();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
