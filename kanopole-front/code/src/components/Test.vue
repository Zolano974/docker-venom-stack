<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Proof of Concept</h2>

      <ul>
          <li v-for="item in items" :key="item.value">
              <b>{{ item.value }}</b> => <i>{{ item.label }}</i>
          </li>
      </ul>

    <hr>

    <div class="btn btn-default" @click="loadItemsFromApi">GET API items</div>

    <hr>

    <div class="btn btn-default" @click="createMookItems">CREATE API item</div>

 
  </div>
</template>

<script>
import Api from "@/services/Api";
import axios from 'axios'

export default {
  name: "Test",
  data() {
    return {
      msg: "Random Msg",
      items: []
    };
  },
  methods: {
    generateItems() {
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
    async loadItemsFromApi() {
      
      try {
        //TODO: pourquoi est-ce qu'on doit renseigner ici les coordonées FROM HOST, et pas le nom du service tel que défini dans le docker-compose.yml ???
        // let newItems = await Api.get('http://kanopole-api:3000/')
        let response = await Api.get("/item");

        console.log(response.data)

        this.items = response.data.items

      } catch (err) {
        console.error(err)
      }
    },
    async loadMookItems() {

      try {
        let response = await Api.get("/mook");

        console.log(response.data)

        this.items = response.data

      } catch (err) {
        console.error(err)
      }
    },
    async createMookItems(){

      try{

        let item = this.generateItems()[0]

        let response = await Api.post("/item", {
          value: item.value,
          label: item.label,
        })

        console.log(response.data)

      }catch(err){
        console.error(err)
      }
    }
  },
  mounted() {
    this.items = this.generateItems();
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
