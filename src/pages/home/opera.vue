<template>
  <div class="operating-position">
    <div class="operating-position__item border" v-for="title in titles" :key="title.id">
      <div class="title-wrap">
        <div class="main-title" :style="{'background-image':'url('+ title.url1 +')'}"></div>
        <div class="sub-title">{{title.message}}</div>
      </div>
      <div class="poster-wrap">
        <div class="top-text"></div>
        <div class="poster" :style="{'background-image':'url('+title.url2 + ')'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // el: '#operat',
  data() {
    return {
      titles: [
        {
          message: "0元看张杰",
          url1: "https://assets.piaoniu.com/home/op1-title-v2@3x.png",
          url2:
            "https://img.piaoniu.com/misc/ac724f85fee8b6c2b5c9bf4ee1dce96a7f174234.png"
        },
        {
          message: "限时限量抢",
          url1: "https://assets.piaoniu.com/home/op2-title@3x.png",
          url2:
            "https://img.piaoniu.com/misc/5cb38fda616ebbccc7ef463f58b788d3526b96e7.png"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped >
.operating-position {
  margin: 6.4vw 4.26666667vw 0;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.operating-position__item {
  width: 44vw;
  height: 18.13333333vw;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
  border-radius: 1.6vw;
  overflow: hidden;
  display: flex;
}

.operating-position__item .title-wrap {
  width: 21.33333333vw;
  padding-top: 4.26666667vw;
  padding-left: 3.2vw;
}

.operating-position__item .title-wrap .main-title {
  background-size: contain;
  background-repeat: no-repeat;
  height: 3.73333333vw;
  width: 100%;
  margin-bottom: 1.86666667vw;
}

.operating-position__item .title-wrap .sub-title {
  font-weight: 400;
  color: #666;
  font-size: 3.2vw;
  max-width: 70px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.operating-position__item .poster-wrap {
  width: 22.93333333vw;
}

.operating-position__item .poster-wrap .poster {
  width: 21.33333333vw;
  height: 15.73333333vw;
  flex: 1;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 2.4vw;
}
</style>
