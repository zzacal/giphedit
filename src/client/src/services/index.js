import { GameHub } from "./gameHub";
import { Games } from "./games"
import { Persist } from "./persist";
import { Players } from "./players";

class Services {
  constructor(){
    console.log("Services instantiated")
  }
  getGameService = () => {
    if(this.game) {
      return this.game
    }
    this.game = new Games();
    console.log("Game service created");
    return this.getGameService();
  } 
  getPlayerService = () => {
    if(this.players) {
      return this.players;
    }
    this.players = new Players();
    console.log("Player service created");
    return this.getPlayerService();
  }
  getGameHub = (setGame) => {
    if(this.gameHub) {
      return this.gameHub;
    }
    this.gameHub = new GameHub(setGame);
    console.log(`game hub created`);
    return this.getGameHub(setGame);
  }
  getPersistence = () => {
    if(this.persistence) {
      return this.persistence;
    }
    this.persistence = new Persist();
    console.log("Persist service created");
    return this.getPersistence();
  }
}

const services = new Services();
export default services;
