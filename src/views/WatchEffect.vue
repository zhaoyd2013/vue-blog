<template>
  <h2>WatchEffect</h2>
  <button @click="str = 'watchEffect11'">更新str</button>
  <div id="post">{{ str }}</div>
</template>
<script lang="ts" setup>
const str = ref<string>('watchEffect')
const newStr = ref<string>('')
watchEffect(
  () => {
    newStr.value = 'new-' + str.value
    console.log('===', newStr.value)
    console.log('===', document.getElementById('post'))
  },
  {
    flush: 'post'
  }
)
</script>
