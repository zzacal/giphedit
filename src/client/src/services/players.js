export class Players {
  url = process.env.REACT_APP_BACKEND_HOST;
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
