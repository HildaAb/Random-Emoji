const btnEl = document.querySelector("#btn");
const emojiNameEl = document.querySelector("#emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=2512bbc61d2d4c62e8d7511928b6a2d8e39e82dd"
  );

  let data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

console.log(emoji);

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);

  btnEl.innerHTML = emoji[randomNum].emojiName;
  emojiNameEl.innerHTML = emoji[randomNum].emojiCode;
});
