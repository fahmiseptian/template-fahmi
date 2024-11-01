import { createApp } from "vue"; // Ensure you're importing createApp
import ExampleComponent from "./components/ExampleComponent.vue";

// Styles
import "../css/app.css"; // CSS Sendiri

// Create the Vue app
const app = createApp({});

// Register the component
app.component("example-component", ExampleComponent);

// Mount the app to the main div
app.mount("#app"); // Mounting to a single root element
