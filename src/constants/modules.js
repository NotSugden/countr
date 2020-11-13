module.exports.modules = {
  "allow-spam": {
    "short": "Allow people to count multiple times in a row.",
    "image": "https://i.promise.solutions/ISe9n5.gif"
  },
  "embed": {
    "short": "Repost the message in an embed.",
    "incompatible": [
      "reposting",
      "webhook"
    ],
    "image": "https://i.promise.solutions/uM2pPX.gif"
  },
  "recover": {
    "short": "Remove invalid messages when the bot restarts.",
    "image": "https://i.promise.solutions/xu0imT.gif"
  },
  "reposting": {
    "short": "Repost the message.",
    "incompatible": [
      "embed",
      "webhook"
    ],
    "image": "https://i.promise.solutions/7HqjEr.gif"
  },
  "talking": {
    "short": "Allow people to send text after the count.",
    "image": "https://i.promise.solutions/uTpoA9.gif"
  },
  "webhook": {
    "short": "Repost the message in a webhook.",
    "incompatible": [
<<<<<<< HEAD
      "reposting"
    ]
=======
      "embed",
      "reposting"
    ],
    "image": "https://i.promise.solutions/vTQhyU.gif"
>>>>>>> 4d6c630ac7ef5a522e3dc8c3504f66b9ebeb1e37
  }
};

for (const i in module.exports.modules) module.exports.modules[i] = Object.assign({
  "short": "N/A",
  "long": null,
  "image": null,
  "incompatible": []
}, module.exports.modules[i]);