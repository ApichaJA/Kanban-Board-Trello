<template>
  <div class="container">
    <div class="row">
      <div class="col-xl box py-2">
        <h3>To Do</h3>
        <div class="col-xl sec-box">
          <div>Math</div>
        </div>
      </div>



      <div class="col-xl box py-2">
        <h3>In Progress</h3>
        <div class="col-xl sec-box">

        </div>
      </div>


      <div class="col-xl box py-2">
        <h3>Completed</h3>
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