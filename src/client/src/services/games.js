export class Games {
  url = ""
  find = (name) => Promise.resolve(game);
  get = (gameId) => Promise.resolve(game);
  join = (gameId, playerId) => Promise.resolve(game);
  start = (gameId) => Promise.resolve({...game, isStarted: true});
  play = (gameId) => {}
  judge = (gameId, playerId, cardId) => {}
}

const game = {
  "id": "61f3a14e201f4165fa208a4a",
  "name": "M1tWY",
  "rating": "g",
  "players": [
    {
      "id": "61f3a133201f4165fa208a49",
      "name": "Steve",
      "hand": [
        {
          "id": "https://media1.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media1.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media1.giphy.com/media/3NtY188QaxDdC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media1.giphy.com/media/3NtY188QaxDdC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media1.giphy.com/media/UysNNyjUfIZI5gNRM7/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media1.giphy.com/media/UysNNyjUfIZI5gNRM7/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media3.giphy.com/media/elhmwUMsAUbScKLLzl/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media3.giphy.com/media/elhmwUMsAUbScKLLzl/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media1.giphy.com/media/AGvMZ0tcnkAoiHvKH9/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media1.giphy.com/media/AGvMZ0tcnkAoiHvKH9/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media4.giphy.com/media/VIPdgcooFJHtC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media4.giphy.com/media/VIPdgcooFJHtC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media4.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media4.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        }
      ]
    },
    {
      "id": "61f3975b6f29c7af9a06702c",
      "name": "Jake",
      "hand": [
        {
          "id": "https://media3.giphy.com/media/8H80IVPjAdKY8/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media3.giphy.com/media/8H80IVPjAdKY8/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media2.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media2.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media1.giphy.com/media/kuq7DXNKY1gkGUKSZ4/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media1.giphy.com/media/kuq7DXNKY1gkGUKSZ4/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media0.giphy.com/media/Z21HJj2kz9uBG/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media0.giphy.com/media/Z21HJj2kz9uBG/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media2.giphy.com/media/gj0QdZ9FgqGhOBNlFS/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media2.giphy.com/media/gj0QdZ9FgqGhOBNlFS/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media0.giphy.com/media/HRC3FlKFIj2WAIMDR3/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media0.giphy.com/media/HRC3FlKFIj2WAIMDR3/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        },
        {
          "id": "https://media4.giphy.com/media/rV3zQ64Fh0TpC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
          "imgUrl": "https://media4.giphy.com/media/rV3zQ64Fh0TpC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
        }
      ]
    }
  ],
  "turnCardStack": [
    {
      "id": "https://media4.giphy.com/media/LgFl8pSJr4gMMF0tgU/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
      "imgUrl": "https://media4.giphy.com/media/LgFl8pSJr4gMMF0tgU/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
    },
    {
      "id": "https://media1.giphy.com/media/EZICHGrSD5QEFCxMiC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
      "imgUrl": "https://media1.giphy.com/media/EZICHGrSD5QEFCxMiC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
    },
    {
      "id": "https://media2.giphy.com/media/gt1DhsGgWc17r1kLqj/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
      "imgUrl": "https://media2.giphy.com/media/gt1DhsGgWc17r1kLqj/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
    }
  ],
  "drawStack": [
    {
      "id": "https://media2.giphy.com/media/Vi0Ws3t4JSLOgdkaBq/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
      "imgUrl": "https://media2.giphy.com/media/Vi0Ws3t4JSLOgdkaBq/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
    },
    {
      "id": "https://media4.giphy.com/media/Mx8elxpYeWezisxxwr/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
      "imgUrl": "https://media4.giphy.com/media/Mx8elxpYeWezisxxwr/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
    },
    {
      "id": "https://media3.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
      "imgUrl": "https://media3.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
    },
    {
      "id": "https://media1.giphy.com/media/g96QRNjWUvdKw/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
      "imgUrl": "https://media1.giphy.com/media/g96QRNjWUvdKw/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
    }
  ],
  "turns": [
    {
      "card": {
        "id": "https://media0.giphy.com/media/feio2yIUMtdqWjRiaF/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
        "imgUrl": "https://media0.giphy.com/media/feio2yIUMtdqWjRiaF/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
      },
      "judge": {
        "id": "61f3a133201f4165fa208a49",
        "name": "Steve",
        "hand": [
          {
            "id": "https://media1.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
            "imgUrl": "https://media1.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
          },
          {
            "id": "https://media1.giphy.com/media/3NtY188QaxDdC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
            "imgUrl": "https://media1.giphy.com/media/3NtY188QaxDdC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
          },
          {
            "id": "https://media1.giphy.com/media/UysNNyjUfIZI5gNRM7/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
            "imgUrl": "https://media1.giphy.com/media/UysNNyjUfIZI5gNRM7/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
          },
          {
            "id": "https://media3.giphy.com/media/elhmwUMsAUbScKLLzl/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
            "imgUrl": "https://media3.giphy.com/media/elhmwUMsAUbScKLLzl/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
          },
          {
            "id": "https://media1.giphy.com/media/AGvMZ0tcnkAoiHvKH9/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
            "imgUrl": "https://media1.giphy.com/media/AGvMZ0tcnkAoiHvKH9/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
          },
          {
            "id": "https://media4.giphy.com/media/VIPdgcooFJHtC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
            "imgUrl": "https://media4.giphy.com/media/VIPdgcooFJHtC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
          },
          {
            "id": "https://media4.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g",
            "imgUrl": "https://media4.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.gif?cid=c4feef10etbq7ormh4nz7scmmqhhdweieqll1nsslwtscevr&rid=giphy.gif&ct=g"
          }
        ]
      },
      "plays": [],
      "winner": null
    }
  ],
  "isEnded": false,
  "isStarted": false
}
