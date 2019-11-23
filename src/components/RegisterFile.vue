<template>
    <div>
        <ul class="list-group reg-comp">
            <div>
                <li class="list-group-item">$zero: 0</li>

                <li class="list-group-item">$at: 0</li>

                <li class="list-group-item">$v0: 0</li>
                <li class="list-group-item">$v1: 0</li>

                <li class="list-group-item">$a0: 0</li>
                <li class="list-group-item">$a1: 0</li>
                <li class="list-group-item">$a2: 0</li>
                <li class="list-group-item">$a3: 0</li>
            </div>
            <div>
                <li class="list-group-item">$t0: 0</li>
                <li class="list-group-item">$t1: 0</li>
                <li class="list-group-item">$t2: 0</li>
                <li class="list-group-item">$t3: 0</li>
                <li class="list-group-item">$t4: 0</li>
                <li class="list-group-item">$t5: 0</li>
                <li class="list-group-item">$t6: 0</li>
                <li class="list-group-item">$t7: 0</li>
            </div>
            <div>
                <li class="list-group-item">$s0: 0</li>
                <li class="list-group-item">$s1: 0</li>
                <li class="list-group-item">$s2: 0</li>
                <li class="list-group-item">$s3: 0</li>
                <li class="list-group-item">$s4: 0</li>
                <li class="list-group-item">$s5: 0</li>
                <li class="list-group-item">$s6: 0</li>
                <li class="list-group-item">$s7: 0</li>
            </div>
            <div>
                <li class="list-group-item">$t8: 0</li>
                <li class="list-group-item">$t9: 0</li>

                <li class="list-group-item">$k0: 0</li>
                <li class="list-group-item">$k1: 0</li>

                <li class="list-group-item">$gp: 0</li>
                <li class="list-group-item">$sp: 0</li>
                <li class="list-group-item">$fp: 0</li>
                <li class="list-group-item">$ra: 0</li>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'RegisterFile',
}
</script>

<style scoped>
    .reg-comp{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        width: 30em;
    }
    .reg-comp div{
        border:1px solid #000;
    }
</style>
