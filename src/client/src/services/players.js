export class Players {
  url = ""
  new = (name) => {
    console.log(name);
    return {name}
  }
  get = (playerId) => {}
  rename = (playerId) => {}
}
