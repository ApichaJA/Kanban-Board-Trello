<template>
  <div id="app">
    <div class="container">
      <div class="col-12 py-5">
        <h1>Kanban Board</h1>
      </div>
      <div class="py-5">
        <KanbanRow />
      </div>
    </div>
  </div>
</template>

<script>
import KanbanRow from "./components/KanbanRow.vue";

export default {
  name: "App",
  components: {
    KanbanRow
  }
};
</script>

<style>
@import "assets/css/style.css";
</style>
