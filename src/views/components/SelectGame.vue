<template>
  <div>
    <canvas ref="game" width="640" height="480"
    style="border: 1px solid white;">
    </canvas>
    <section>
      <p>Create a Game</p>
      <input v-model="gameName" />
      <button v-on:click="$emit('create-game', gameName)">Create Game</button>
    </section>
    <section>
      <p>Join a Game</p>
      <input v-model="gameId" placeholder="Enter an existing game id" />
      <button v-on:click="$emit('join-game', gameId)">Join</button>
    </section>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
   name: "SelectGame",

      data() {
        return {
          gameName: "",
          gameId: "",
          socket: {},
          context:{},
          position:{
              x: 0,
              y: 0
           }
         }
        },
        created() {
          this.socket = io("http://localhost:3000");
        },

      mounted() {
        this.context = this.$refs.game.getContext("2d");
        this.socket.on("position", data => {this.context.fillRect(this.position.x, this.position.y, 0,0);
        });
      },
};
</script>

<style scoped>
div {
  display: flex;
}

p {
  margin: 4px;
}

section {
  padding: 16px;
  background-color: rgb(161, 228, 155);
  margin: 16px;
}
</style>
