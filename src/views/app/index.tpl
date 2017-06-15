<div>
  <div>
    <router-view></router-view>
  </div>
  <TabBar :visible="visible" bgcolor="rgba(255, 255, 255, 0.7)">
    <TabBarItem :selected="route === '/tentacle'" title="触点" to="/tentacle">
      <img slot="icon" src="../../images/home.svg" />
      <img slot="icon-selected" src="../../images/home-active.svg" />
    </TabBarItem>
    <TabBarItem :selected="route === '/clue'" title="线索" to="/clue">
      <img slot="icon" src="../../images/clue.svg" />
      <img slot="icon-selected" src="../../images/clue-active.svg" />
    </TabBarItem>
    <TabBarItem :selected="route === '/user'" title="我的" to="/user">
      <img slot="icon" src="../../images/user.svg" />
      <img slot="icon-selected" src="../../images/user-active.svg" />
    </TabBarItem>
  </TabBar>
</div>
