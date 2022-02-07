export class Games {
  url = process.env.REACT_APP_BACKEND_HOST;
  find = async (name) => {
    const path = `/game/find/${name}`;
    var result = await fetch(this.url+path);
    var json = await result.json();
    return json;
  };
  get = async (gameId) => {
    const path = `/game/${gameId??""}`;
    var result = await fetch(this.url+path);
    var json = await result.json();
    return json;
  };
}
