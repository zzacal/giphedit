import { HubConnectionBuilder } from "@microsoft/signalr";

export class GameHub {
  started = false;

  url = process.env.REACT_APP_BACKEND_HOST;
  constructor(setGame) {
    this.connection = new HubConnectionBuilder().withUrl(this.url + "/play").build();

    this.connection.on("ReceiveGame", (data) => {
      setGame(data);
    });
  }

  connect = async () => {
    if(this.started) {
      return false;
    }
    try {
      await this.connection.start()
      this.started = true;
    } catch (error) {
      console.error(error);
    }
  }

  join = async (gameId, playerId) => {
    await this.connect();
    this.connection.send("join", gameId, playerId);
  }
  
  start = async (gameId, turns, handSize, rating) => {
    this.connection.send("start", gameId, turns, handSize, rating);
  }

  play = async (gameId, playerId, cardId) => {
    this.connection.send("play", gameId, playerId, cardId);
  }

  judge = async (gameId, playerId, cardId) => {
    this.connection.send("judge", gameId, playerId, cardId)
  }
}
