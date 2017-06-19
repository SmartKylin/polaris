<div>
  <SearchBar @search-focus="tosearch()"></SearchBar>
  <LevelOverview/>

  <div class="tentacleSearch--tab mt10">
    <div class="tentacleSearch--tabItem">
      <p class="tentacleSearch--tabItem--name">高产</p>
    </div>
    <div class="tentacleSearch--tabItem active">
      <p class="tentacleSearch--tabItem--name">中产</p>
    </div>
    <div class="tentacleSearch--tabItem">
      <p class="tentacleSearch--tabItem--name">低产</p>
    </div>
    <div class="tentacleSearch--tabItem">
      <p class="tentacleSearch--tabItem--name">全部</p>
    </div>
  </div>
  <div class="tentacleSearch--tab mt10">
    <div class="tentacleSearch--tabItem">
      <p class="tentacleSearch--tabItem--name">A类</p>
    </div>
    <div class="tentacleSearch--tabItem active">
      <p class="tentacleSearch--tabItem--name">B类</p>
    </div>
    <div class="tentacleSearch--tabItem">
      <p class="tentacleSearch--tabItem--name">C类</p>
    </div>
    <div class="tentacleSearch--tabItem">
      <p class="tentacleSearch--tabItem--name">D类</p>
    </div>
    <div class="tentacleSearch--tabItem">
      <p class="tentacleSearch--tabItem--name">E类</p>
    </div>
  </div>
  <TentacleBar v-for="i in [1, 2, 3, 4]"/>
</div>
