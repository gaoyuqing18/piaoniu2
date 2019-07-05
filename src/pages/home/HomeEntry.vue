<template>
  <div>
    <div class="home-entries">
      <div class="main-categories">
        <a href="/bj-concerts" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-live-large.png" class="icon" />
          <div class="title">演唱会</div>
        </a>
        <a href="/bj-dramas" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-drama-large.png" class="icon" />
          <div class="title">话剧歌剧</div>
        </a>
        <a href="/bj-exhibits" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-exibition-large.png" class="icon" />
          <div class="title">休闲展览</div>
        </a>
        <a href="/bj-sports" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-sports-large.png" class="icon" />
          <div class="title">体育赛事</div>
        </a>
        <a href="/bj-musicale" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-concert-large.png" class="icon" />
          <div class="title">音乐会</div>
        </a>
        
      </div>
      <div class="sub-categories">
        <a href="/bj-family" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-child-small-v2.png" class="icon" />
          <div class="title">儿童亲子</div>
        </a>
        <a href="/bj-shows" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-xiqu-small-v2.png" class="icon" />
          <div class="title">戏曲综艺</div>
        </a>
        <a href="/bj-dance" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-dance-small.png" class="icon" />
          <div class="title">舞蹈芭蕾</div>
        </a>
        <a href="/bj-travel" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-travel-small.png" class="icon" />
          <div class="title">旅游玩乐</div>
        </a>
        <a href="/bj-all" class="entry" >
          <img src="http://assets.piaoniu.com/home/icons/category-play-small-v2.png" class="icon" />
          <div class="title">更多精彩</div>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scope>
.home-entries {
    background-color: #fff;
    padding: .02rem .16rem 0;
    box-sizing: border-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.home-entries a{
  font-size .12rem
  width .686rem
  flex 1
}
.home-entries .main-categories, .home-entries .sub-categories {
    display: flex;
    width 100%
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.home-entries .entry {
    display: inline-block;
    width: .52rem;
    margin-top: .22rem;
}
.home-entries .entry .icon {
    display: block;
    width: .42rem;
    height: .42rem;
    margin: 0 auto;
    margin-bottom: .10rem;
}
.home-entries .entry .title {
    text-align: center;
    font-size: .13rem;
    line-height: .16rem;
    color: #444;
}
</style>
