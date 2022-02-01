import { HubConnectionBuilder } from "@microsoft/signalr";

export class GameHub {
  constructor(setGame) {
    this.connection = new HubConnectionBuilder().withUrl("play").build();

    this.connection.on("ReceiveGame", (data) => {
      console.log(data);
      setGame(data);
    });
    this.start();
  }

  start = () => {
    this.connection.start()
      .then(() => {console.log("SignalR started")})
      .catch(console.error);
  }

  join = async (gameId, playerId) => {
    await this.start();
    this.connection.send("join", gameId, playerId);
  }
}
