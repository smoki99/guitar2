<template>
  <Panel title="Lyrics">
    <v-layout>
      <textarea v-model="song.lyrics"/>
    </v-layout>
  </Panel>
</template>
<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>
<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 10px;
  white-space: nowrap;
}
</style>
