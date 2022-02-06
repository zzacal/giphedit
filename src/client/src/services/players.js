export class Players {
  url = "https://localhost:7145"
  new = async (name) => {
    const path = `/player/${name}`;
    var result = await fetch(this.url+path, {
      method: "POST"
    });
    var json = await result.json();
    return json;
  }
  get = async (playerId) => {
   const path = `/player/${playerId}`;
   var result = await fetch(this.url+path);
   var json = await result.json();
   return json;
  }
  rename = async (playerId, name) => {
    const path = `/player/${playerId}/rename/${name}`;
    var result = await fetch(this.url+path, {
      method: "PUT"
    });
    var json = await result.json();
    return json;
  }
}
