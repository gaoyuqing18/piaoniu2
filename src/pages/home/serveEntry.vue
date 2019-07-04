<template>
  <div>
    <div data class="service-entry">
      <div class="title">服务保障</div>
      <div class="services">
        <div class="service-item" v-for="item in items" :key="item.id">
          <span>{{item.detail}}</span>
          <span class="line" style="display:;"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{detail: "无票赔付"}, {detail: "出票保真"}, {detail: "配送保障"} ]
    };
  }
};
</script>

<style lang="stylus" scoped >
.service-entry {
  margin: 20px 16px;
  margin-bottom: 0;
  padding: 0 8px;
  height: 32px;
  line-height: 32px;
  background: #f5f5f5;
  background: hsla(0, 0%, 96%, 0.53);
  border-radius: 2px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.service-item {
  display: flex;
  color: #999;
  font-size: 12px;
  line-height 32px
}

.service-entry .service-item .line {
  height: 12px;
  width: 1px;
  background-color: #e6e6e6;
  margin: 10px 12px;
  display: inline-block;
}
.service-entry .service-item, .service-entry .services {
    display: -ms-flexbox;
    display: flex;
}
</style>
