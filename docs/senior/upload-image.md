# 上传本地图片

原理：上传图片至文件服务器，上传成功后将返回的图片相关信息插入编辑区域。

<ClientOnly>
  <upload-image />
</ClientOnly>

示例代码：

```vue
<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | uploadImage"
    :upload-image-config="uploadImageConfig"
    @upload-image="handleUploadImage"
    height="500px"
  />
</template>

<script>
export default {
  data() {
    this.uploadImageConfig = { accept: 'image/jpeg' };

    return {
      text: '',
    };
  },
  methods: {
    handleUploadImage(event, insertImage) {
      const { files } = event.target;
      // 拿到 File 对象之后上传到文件服务器，然后向编辑框中插入对应的内容

      // 此处只做示例
      insertImage({
        url:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
        desc: '七龙珠',
      });
    },
  },
};
</script>
```