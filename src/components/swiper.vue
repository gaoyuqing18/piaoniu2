<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="banner-img" src="../assets/styles/banner1.png" alt />
        </div>
        <div class="swiper-slide">
          <img class="banner-img" src="../assets/styles/banner2.png" alt />
        </div>
        <div class="swiper-slide">
          <img class="banner-img" src="../assets/styles/banner3.png" alt />
        </div>
        <div class="swiper-slide">
          <img class="banner-img" src="../assets/styles/banner4.jpg" alt />
        </div>
      </div>
      <div class="swiper-pagination"> </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../node_modules/swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      select: 0,
      list: ["", "", "", "", "", ""]
    };
  },
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      autoplay: 4000,
      loop: true,
      pagination: {
		el: '.swiper-pagination',
		bulletClass : 'my-bullet',
	  bulletActiveClass: 'my-bullet-active',
	},
	  
    });
  }
};
</script>

<style lang="stylus" scoped>
.swiper-container {
  width: 6rem;
  height: 1.04rem;
  //background-color pink
}

.banner {
  position: relative;
  margin: .16rem .16rem 0 !important ;
  overflow: hidden;
}
.swiper-slide{
	  width: 6rem;
	}
.banner-img {
  // height: 1.04rem;
  //width: 6rem;
  height: 100%
  display: block;
  border-radius: .05vm;
}
.swiper-container .swiper-pagination{
	height: .14vm;
	width: 100%
	//background-color: pink;
  position absolute
	bottom .07vm
}
.swiper-pagination >>> .my-bullet {
  width: .1vm;
  height: .02vm;
  opacity: 0.4;
  border-radius: .015vm;
  background-color: #fff;
  margin-right: .1vm;
  display: inline-block;
}

// .banner .indicator {
//   position: absolute;
//   width: 100%;
//   bottom: 5px;
//   z-index: 9;
// }

.swiper-pagination >>> .my-bullet-active{
  opacity: 1;
}

</style>















