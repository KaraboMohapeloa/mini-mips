<template>
  <div>
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Components </div>
      <div v-for="mipsComp in mipsComps" :key="mipsComp">
          <mipsComponent v-bind:mipsComp="mipsComp"/>
      </div>
    </div>
  </div>
</template>

<script>
import mipsComponent from './mipsComponent'
export default {
  name: 'mipsComponents',
  components:{
      mipsComponent
  },
  data(){
      return {
          mipsComps:[
            {
                name: 'PC',
                inputs: [
                    {
                        label: 'nextAddress',
                        value: '0000000000000'
                    }
                ],
                outputs: [
                    {
                        label: 'nextAddress',
                        value: '0000000000000'
                    }
                ]
            },
            {
                name: 'CU',
                inputs: [
                    {
                        label: 'opcode',
                        value: '000000'
                    }
                ],
                outputs: [
                    {
                        label: 'RegDst',
                        value: '0'
                    },
                    {
                        label: 'MemRead',
                        value: '000000'
                    },
                    {
                        label: 'MemtoReg',
                        value: '0'
                    },
                    {
                        label: 'ALUop',
                        value: '0000'
                    },
                    {
                        label: 'MemWrite',
                        value: '0'
                    },
                    {
                        label: 'ALUSrc',
                        value: '0'
                    },
                    {
                        label: 'RegWrite',
                        value: '0'
                    }
                ]
            },
            {
                name: 'ALU',
                inputs: [
                    {
                        label: 'OpCode',
                        value: '0000'
                    },
                    {
                        label: 'Operand1',
                        value: '0'
                    },
                    {
                        label: 'Operand2',
                        value: '0'
                    },
                ],
                outputs: [
                    {
                        label: 'Zero',
                        value: '0'
                    },
                    {
                        label: 'ALU result',
                        value: '0'
                    },
                ]
            },
            {
                name: 'MUX1',
                inputs: [
                    {
                        label: 'Select-0',
                        value: '000000'
                    },
                    {
                        label: 'Select-1',
                        value: '000000'
                    },
                    {
                        label: 'RegDst',
                        value: '000000'
                    },
                ],
                outputs: [
                    {
                        label: 'RegDst',
                        value: '000000'
                    },
                ]
            },
            {
                name: 'MUX2',
                inputs: [
                    {
                        label: 'Select-0',
                        value: '000000'
                    },
                    {
                        label: 'Select-1',
                        value: '000000'
                    },
                    {
                        label: 'ALUsrc',
                        value: '000000'
                    },
                ],
                outputs: [
                    {
                        label: 'ALUsrc',
                        value: '000000'
                    },
                ]
            },
            {
                name: 'MUX3',
                inputs: [
                    {
                        label: 'Select-0',
                        value: '000000'
                    },
                    {
                        label: 'Select-1',
                        value: '000000'
                    },
                    {
                        label: 'RegDst',
                        value: '000000'
                    },
                ],
                outputs: [
                    {
                        label: 'RegDst',
                        value: '000000'
                    },
                ]
            },
            {
                name: 'MUX4',
                inputs: [
                    {
                        label: 'Select-0',
                        value: '000000'
                    },
                    {
                        label: 'Select-1',
                        value: '000000'
                    },
                    {
                        label: 'RegDst',
                        value: '000000'
                    },
                ],
                outputs: [
                    {
                        label: 'RegDst',
                        value: '000000'
                    },
                ]
            },
            {
                name: 'Sign-Extend',
                inputs: [
                    {
                        label: 'Instruction',
                        value: '000000'
                    },
                ],
                outputs: [
                    {
                        label: 'Instruction',
                        value: '000000'
                    },
                ],
            },
            {
                name: 'Shift-left-2',
                inputs: [
                    {
                        label: 'Address',
                        value: '000000'
                    },
                ],
                outputs: [
                    {
                        label: 'Address',
                        value: '000000'
                    },
                ],
            }
        ]
      }
  }
}
</script>

<style scoped>
#sidebar-wrapper{
    width: 18em;
    margin-right: 3em;
}
.sidebar-heading{
    text-align: center;
}
</style>
