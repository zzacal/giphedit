import { HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";

export class GameHub {
  url = process.env.REACT_APP_BACKEND_HOST;

  connect = async (setGame) => {
    if(this.connection?.state === HubConnectionState.Connected) {
      return false;
    }
    try {
      this.connection = new HubConnectionBuilder().withUrl(this.url + "/play").build();
      this.connection.on("ReceiveGame", (data) => {
        setGame(data);
      });

      await this.connection.start()
      this.started = true;
    } catch (error) {
      console.error(error);
    }
  }

  ensureGameConnected = async (gameId, playerId, setGame) => {
    if(this.connection?.state !== HubConnectionState.Connected) {
      await this.join(gameId, playerId, setGame);
    }
  }

  join = async (gameId, playerId, setGame) => {
    await this.connect(setGame);
    await this.connection.send("join", gameId, playerId);
  }
  
  start = async (gameId, turns, handSize, rating) => {
    await this.connection.send("start", gameId, turns, handSize, rating);
  }

  play = async (gameId, playerId, cardId) => {
    await this.connection.send("play", gameId, playerId, cardId);
  }

  judge = async (gameId, playerId, cardId) => {
    await this.connection.send("judge", gameId, playerId, cardId)
  }

  disconnect = async () => {
    if(this.connection.state === HubConnectionState.Connected) {
      await this.connection.stop();
    }
  }
}
