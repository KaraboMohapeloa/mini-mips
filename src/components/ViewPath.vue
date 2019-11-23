<template>
    <div>
        <!-- Button trigger modal -->
        <img src="I-type.png" alt="">
        <button type="button" class="btn btn-primary ctrl-btn-in" data-toggle="modal" data-target="#datapathModal">
            Datapath
        </button>

        <!-- Modal -->
        <div class="modal fade" id="datapathModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Datapath</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img src="./I-type.png" id="dataImage" alt="">
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ViewPath',
  props: ["path"]
}
</script>

<style scoped>
    .ctrl-btn-in{
        width: 10em;
        margin-bottom: 2px;
    }
    #dataImage{
        width: 100%;
    }
</style>
