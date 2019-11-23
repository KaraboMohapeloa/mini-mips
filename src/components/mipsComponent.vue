<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary comp-btn" data-toggle="modal" v-bind:data-target='"#"+mipsComp.name'>
    {{mipsComp.name}}
    </button>

    <!-- Modal -->
    <div class="modal fade" v-bind:id="mipsComp.name" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{mipsComp.name}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p class="list-group-item">Inputs</p>
            <ul class="list-group" v-for="input in mipsComp.inputs" :key="input">
                <li class="list-group-item">{{input.label}}: {{input.value}}</li>
            </ul>
        </div>
        <div class="border-top my-3"></div>
        <div class="modal-body">
            <p class="list-group-item">Outputs</p>
            <ul class="list-group" v-for="output in mipsComp.outputs" :key="output">
                <li class="list-group-item">{{output.label}}: {{output.value}}</li>
            </ul>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mipsComponent',
  props: ["mipsComp"]
}
</script>

<style scoped>
    .comp-btn{
        width: 18em;
        margin-bottom: 2px;
    }
</style>
