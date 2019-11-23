<template>
  <div id="app">
    <nav class="navbar navbar-light bg-dark my-nav">
      <a class="navbar-brand" href="#">
        <div class="logo">MiniMips</div>
      </a>
    </nav>
    <div class="ctrl-btns container">
      <Step class="ctrl-btn"/>
      <ViewPath class="ctrl-btn"/>
      <Abort class="ctrl-btn"/>
    </div>
    
    <div class="main-section container">
      <mipsComponents/>
      <router-view class="text-content"/>
      <RegisterFile/>
    </div>
  </div>
</template>

<script>
import mipsComponents from './components/mipsComponents'
import ViewPath from './components/ViewPath'
import Step from './components/Step'
import Abort from './components/Abort'
import RegisterFile from './components/RegisterFile'
export default {
  name: 'App',
  components:{
    mipsComponents,
    ViewPath,
    Step,
    Abort,
    RegisterFile
  }
}
</script>

<style>
.logo{
  color: #ffffff;
}
.my-nav{
  margin-bottom: 3em;
}
.main-section{
  display: flex;
}
.ctrl-btns{
  display: flex;
  margin-bottom: 3em;
}
.ctrl-btn{
  margin-right: 2em;
}
.text-content{
  margin-right: 3em; 
}
</style>
