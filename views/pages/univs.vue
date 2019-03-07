<template>
  <v-card>
    <v-card-title> Universities
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :search="search" :headers="headers" :items="univs" class="elevation-1">
      <template slot="items" scope="props">
        <td>{{ props.item.rank }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.address }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { http } from "../config/http.js";

export default {
  //Variables
  data: () => ({
    search: "",
    headers: [
      {
        text: "Rank",
        align: "left",
        value: "rank"
      },
      { text: "University", value: "name" },
      { text: "Address", value: "address" }
    ],
    errors: [],
    univs: []
  }),

  //The methods we will need
  methods: {
    //load all univs from DB, we call this often to make sure the data is up to date
    load() {
      http
        .get("univs")
        .then(response => {
          this.univs = response.data.univs;
          console.log(this.univs);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },

    //opens delete dialog
    setupDelete(user) {
      this.userToDelete = user;
      this.deleteDialog = true;
    },

    //opens edit dialog
    setupEdit(user) {
      Object.keys(user).forEach(key => {
        this.userToEdit[key] = user[key];
      });
      this.editName = user.name;
      this.editDialog = true;
    },

    //build the alert info for us
    //Will emit an alert, followed by a boolean for success, the type of call made, and the name of the
    //resource we are working on
    alert(success, callName, resource) {
      console.log("Page Alerting");
      this.$emit("alert", success, callName, resource);
      this.load();
    }
  },

  //get those univs
  mounted() {
    this.load();
  }
};
</script>