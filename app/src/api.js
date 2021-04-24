// src/api.js
import Vue from "vue";
import Auth from "@/services/auth";

// Initialize all or API factories
const factories = {
 auth: Auth(Vue.axios)
};

// Make them available in the app with this.$api
// https://vuejs.org/v2/cookbook/adding-instance-properties.html
Vue.$api = factories;