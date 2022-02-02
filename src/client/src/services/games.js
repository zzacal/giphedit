export class Games {
  url = "https://localhost:7145"
  find = async (name) => {
    const path = `/game/find/${name}`;
    var result = await fetch(this.url+path);
    var json = await result.json();
    console.log(json);
    return json;
  };
  get = async (gameId) => {
    const path = `/game/${gameId??""}`;
    var result = await fetch(this.url+path);
    var json = await result.json();
    console.log(json);
    return json;
  };
}
