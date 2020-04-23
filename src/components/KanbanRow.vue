<template>
  <div class="container">
    <div class="row">
      <div class="col box">
        <h1>To Do</h1>
        <div class="col sec-box">
        </div>
      </div>
      <div class="col box">
        <h1>In Progress</h1>
        <div class=" col sec-box">
        </div>
      </div>
      <div class="col box">
        <h1>Completed</h1>
        <div class="sec-box">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KanbanRow",
  props: {
    msg: String
  }
};
</script>