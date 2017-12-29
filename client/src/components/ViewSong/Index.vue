<template>
  <div>
    <v-layout>
      <v-flex xs6>
          <song-metadata :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
          <you-tube :youtubeId="song.youtubeId" player-width="250px"/>
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs6>
        <lyrics :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <tab :song="song"/>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import YouTube from './Youtube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  data () {
    return {
      song: {}
    }
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
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
