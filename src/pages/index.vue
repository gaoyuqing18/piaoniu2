<template>
  <div id="home" >
    <div class="scroll-container">
           <headerbar></headerbar>
          <swiper> </swiper>
          <HomeEntry></HomeEntry>
          <opera></opera> 
          <serveEntry></serveEntry>
          <active-floor></active-floor>
    </div>
  </div>
</template>

<script>
 import headerbar  from '../pages/home/headerbar'
 import HomeEntry  from '../pages/home/HomeEntry'
 import opera from '../pages/home/opera'
  import serveEntry from '../pages/home/serveEntry'

  import ActiveFloor from '@/components/ActiveFloor'
 import swiper from '../components/swiper'

export default {
  components: {
      headerbar,
     swiper,
     HomeEntry,
     opera,
     serveEntry,
     ActiveFloor

  }
}
</script>
<style lang="stylus">
@import '~@/assets/styles/border.styl';

#home .scroll-container {
  width: 100%;
  overflow-x: hidden;
  position: relative;
   
  z-index: 1;
}
html{
  background-color  #fff !important
}

</style>

   