import { HubConnectionBuilder } from "@microsoft/signalr";

export class GameHub {
  started = false;
  constructor(setGame) {
    this.connection = new HubConnectionBuilder().withUrl("https://localhost:7145/play").build();

    this.connection.on("ReceiveGame", (data) => {
      console.log("hub received game", data);
      setGame(data);
    });
  }

  connect = async () => {
    if(this.started) {
      console.log("No need to start. it's already started")
      return false;
    }
    console.log("Attempting to connect");
    try {
      await this.connection.start()
      console.log("SignalR started");
      this.started = true;
    } catch (error) {
      console.error(error);
    }
  }

  join = async (gameId, playerId) => {
    await this.connect();
    this.connection.send("join", gameId, playerId);
  }
  
  start = async (gameId) => {
    console.log("hub starting")
    this.connection.send("start", gameId);
  }

  play = async (gameId, playerId, cardId) => {
    console.log("hub playing")
    this.connection.send("play", gameId, playerId, cardId);
  }

  judge = async (gameId, playerId, cardId) => {
    console.log("hub judging")
    this.connection.send("judge", gameId, playerId, cardId)
  }
}
