<template>
<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-12">
        <div class="form-group">
            <textarea rows="10" v-model="text" class="form-control box-reader"></textarea>
        </div>
      
            <app-reader @load="text = $event"></app-reader>
        
    </div>
    <div class="col-md-2"></div>
</div>
</template>
 
<script>
import FileReader from "./FileReader";
 
export default {
  name: "app",
  data: () => ({ text: "" }),
  components: {
    appReader:FileReader
  }
};
</script>

<style scoped>
    .box-reader{
        width: em;
    }
</style>