<template>
  <div class="form-ctrl">
    <input type="file" accept="images/*" ref="file" @change="change" class="loadImg"/>
  </div>
</template>

<script>
export default {
    name: "LoadImage",
  data() {
    return {
      file: ""
    }
  },
  methods: {
    change() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>