import { HubConnectionBuilder } from "@microsoft/signalr";

export class GameHub {
  isConnected = false;
  url = process.env.REACT_APP_BACKEND_HOST;

  constructor () {
    this.connection = new HubConnectionBuilder().withUrl(this.url + "/play").build();
  }

  connect = async (setGame) => {
    if(this.isConnected) {
      return false;
    }
    try {  
      this.connection.on("ReceiveGame", (data) => {
        setGame(data);
      });

      await this.connection.start()
      this.started = true;
    } catch (error) {
      console.error(error);
    }
  }

  join = async (gameId, playerId, setGame) => {
    await this.connect(setGame);
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
