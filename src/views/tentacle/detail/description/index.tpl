<div>
  <div>
    <div class="descrip--title">评价标签</div>
    <div class="descrip--bd" @click="selectLabel($event)">
      <div class="flex">
        关系标签
        <span class="active">A类</span>
        <span>B类</span>
        <span>C类</span>
        <span>D类</span>
      </div>
      <div class="flex">
        产能标签
        <span class="active">高产</span>
        <span>中产</span>
        <span>低产</span>
      </div>
    <!--  <div>
        其他描述
        <span class="active">递单快</span>
        <span>熟悉行业</span>
      </div>-->
    </div>
  </div>
  <div>
    <div class="descrip--title">兴趣爱好</div>
    <!--<ol>
      <li>喜欢喝酒</li>
      <li>喜欢足球</li>
      <li>对花粉过敏</li>
    </ol>-->
    <div class="text--wrap">
      <textarea name="" id="" cols="43" rows="5" class="text--area">
      喜欢喝酒
      喜欢足球
      对花粉过敏
    </textarea>
    </div>
  </div>
  <div>
    <div class="descrip--title">其他画像备注</div>
    <div class="text--wrap">
      <textarea name="" id="" cols="30" rows="5" class="text--area"></textarea>
    </div>
  </div>
  <div class="button--large">提交</div>
</div>
