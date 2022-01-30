export class Players {
  url = ""
  new = (name) => (Promise.resolve({...player, name}))
  get = (playerId) => (Promise.resolve({...player}))
  rename = (playerId) => (Promise.resolve({...player}))
}

const player = {
  "id": "61f3a133201f4165fa208a49",
  "name": "Steve",
  "hand": []
};