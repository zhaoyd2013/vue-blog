<!-- watchEfect watchPostEffect watchSyncEffect-->
<template>
  <div style="padding: 0 250px">
    <h2>WatchEffect</h2>
    <button @click="count++">add</button>
    <div id="post">{{ count }}</div>
    <!-- <div id="post">{{ newCount }}</div> -->
  </div>
</template>
<script lang="ts" setup>
const count = ref<number>(0);
const newCount = ref<string>("");
watchEffect(
  () => {
    newCount.value = "更新后的count: " + count.value.toString();
    const dom = document.getElementById("post");
    console.log(dom);
    console.log(dom?.innerHTML, "-------");
  },
  {
    flush: "post",
  }
);
</script>
