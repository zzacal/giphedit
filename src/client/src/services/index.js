import { GameHub } from "./gameHub";
import { Games } from "./games"
import { Persist } from "./persist";
import { Players } from "./players";

class Services {
  constructor(){
  }
  getGameService = () => {
    if(this.game) {
      return this.game
    }
    this.game = new Games();
    return this.getGameService();
  } 
  getPlayerService = () => {
    if(this.players) {
      return this.players;
    }
    this.players = new Players();
    return this.getPlayerService();
  }
  getGameHub = (setGame) => {
    if(this.gameHub) {
      return this.gameHub;
    }
    this.gameHub = new GameHub(setGame);
    return this.getGameHub(setGame);
  }
  getPersistence = () => {
    if(this.persistence) {
      return this.persistence;
    }
    this.persistence = new Persist();
    return this.getPersistence();
  }
}

const services = new Services();
export default services;
