<template>
   <div class="search-header-home light">
        <ul class="scroll-ul">
          <div class="ui-fixed-header full-header">
            <div class="topbar">
              <div class="city-picker">
                北京
                <i class="city-entry-arrow"></i>
              </div>

              <div class="ui-searchbox">
                <div class="ui-inner">
                      <input type="text" value class="search-input" placeholder="搜索明星、演出、场馆" />    
                </div>
              </div>

              <div class="person-wrap">
                <a href="/user/person.html" class="person-icon"></a>
              </div>
            </div>

          </div>
        </ul>
      </div>
</template>

<style lang="stylus">
.ui-fixed-header {
  width: 100%;
  background: #fff;
  height: .44rem;
  line-height: .44rem;
}

.topbar 
  display flex
  height 100%
  align-items center
  .city-picker 
    color #262626
    height 100%
    font-weight 500
    font-size .14rem
    padding 0 .1rem 0 .1rem
    
  .ui-searchbox
    background #f5f5f5
    height 80%
    border 1px solid #f5f5f5
    border-radius .17rem
    overflow hidden
    flex 2
   .ui-inner
     height 100%
     display flex
     align-items center
     .search-input
        background #f5f5f5
        border 0
        height 100%      
  .person-wrap
    flex 1
    height 100%

.city-entry-arrow {
  margin-right: .05rem;
  width: 0;
  height: 0;
  border: 4px solid #b0b0b0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  display: inline-block;
  margin-left: .04rem;
  margin-top: .05rem;
}

</style>
