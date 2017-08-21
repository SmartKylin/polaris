<div>
  <header class="uploader--header">
    <div>
      <span>上传照片</span>
      <span class="field--tip">(名片照、店面照、头像照)</span>
    </div>
    <div class="btn--add--photo" @click="chooseImage">+</div>
  </header>
  <main>
    <div class="photo--box flex">
      <div v-if="img">
        <img :src="imgreq" alt="" @click="previewImg = imgthum">
        <a href="javascript:;" class="photo--del" @click="$emit('update:img', '')"></a>
      </div>
      <div v-for="img in imgList">
        <img :src="img.localId" alt="" @click="previewImg = img.reqKey">
        <a href="javascript:;" class="photo--del" @click="deleteImg(img)"></a>
      </div>
    </div>
  </main>
  <div class="img--preview" v-show="previewImg" @click="previewImg = ''">
    <img :src="previewImg" alt="previewphoto">
  </div>
</div>
