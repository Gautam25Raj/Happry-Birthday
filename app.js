const display = document.querySelector(".display");
const containerChoice = document.querySelector(".container");
const inputMessage = document.querySelector(".input-message");
const audio = document.querySelector("audio");
//boolean value
let endConvo = false;
let i = 0;

// for detecting the message index
let messageLoaded = 0;
const messages = [
  "isn't it 18th june?? 🤔🤔", //0
  {
    msg: "Because Its wedding time!!! 😍",
    src: "resources/img/original.gif",
  }, //1
  {
    msg: "Opps!! I mean its birthday time 😂😂😂😂",
    src: "resources/img/boom.gif",
  }, // 2

  // Choice1 Option1:"I knew this was coming!!"
  "Lets Meet today's special person 😍😍😍", //3
  "Because the wait is OVER!!", //4
  {
    msg: "Happy Birthday Arsha Didi 🎉🎉🎉",
    src: "resources/img/jijaJi.jpeg",
  }, //5
  // Choice1 Option2:"I knew this was coming!!"
  "Tu jaa yaha se!!! tumhara yaha koi kaam nahi hain!!! 😑😑😑", //6
  {
    msg: "",
    src: "resources/img/hindustaniBhau.jpg",
  }, //7
  // Choice1 Option2 choice:"I knew this was coming!!"
  {
    msg: "Happy Birthday Arsha Didi 🎉🎉🎉",
    src: "resources/img/arshadidi.jpeg",
  }, //8
  "Are sorry!! Galti se mistake ho gaye 😂😂😂", //9
  {
    msg: "Happy Birthday Arsha Didi 🎉🎉🎉",
    src: "resources/img/arshadidi.jpeg",
  }, //10
  "We know abhi humlog aapke saath nahi hain 😢😢", //11
  "But still aapka day special karne ke liye ye sab kuch 💝💝💝", //12
  {
    msg: "",
    src: "resources/img/1.jpg",
  }, //13
  {
    msg: "",
    src: "resources/img/2.jpg",
  }, //14
  {
    msg: "",
    src: "resources/img/3.jpg",
  }, //15
  {
    msg: "",
    src: "resources/img/4.jpeg",
  }, //16
  {
    msg: "",
    src: "resources/img/5.jpg",
  }, //17
  {
    msg: "",
    src: "resources/img/6.jpg",
  }, //18
  {
    msg: "",
    src: "resources/img/7.jpg",
  }, //19
  {
    msg: "",
    src: "resources/img/8.jpg",
  }, //20
  "We all love you arsha didi.", //21
  "Aap patna aayeye phir toh party he party!!!💝💝💝", //22
  "From Nani Ji, Renu Mausi, Mummy, Papa, Pappu Mama, Mami Ji, Bobby Masi, Mausa Ji, Priya Didi, Robin Bhaiya, Rimjhim, Twinkle, Gautam, Rahul, Wishu 💝💝", //23
  "HAPPYYYYYYYY BIRTHDAYYYYYYYYY!!!!! ", //24
  {
    msg: "LOVE U SOOO MUCHHHH 💝💝💝",
    src: "./resources/img/9.jpeg",
  }, //25
];

let displayMessage = null,
  loadingContainer = null;

window.addEventListener("load", messageLoad);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////////////////////////////////////////////

async function messageLoad() {
  audio.play();
  if (audio.paused) {
    audio.play();
  }
  //creating message container
  createDisplayContainer();

  //createing loading animation for every message
  createloadingContainer();
  setTimeout(() => {
    loadingContainer.remove();
    if (
      messageLoaded !== 1 &&
      messageLoaded !== 2 &&
      messageLoaded !== 5 &&
      messageLoaded !== 7 &&
      messageLoaded !== 8 &&
      messageLoaded !== 10 &&
      messageLoaded !== 13 &&
      messageLoaded !== 14 &&
      messageLoaded !== 15 &&
      messageLoaded !== 16 &&
      messageLoaded !== 17 &&
      messageLoaded !== 18 &&
      messageLoaded !== 19 &&
      messageLoaded !== 20 &&
      messageLoaded !== 25
    ) {
      //creating normal message
      const normalMessage = document.createElement("div");

      //adding classes
      normalMessage.classList.add("message", "you");

      //setting the text value
      normalMessage.innerHTML = messages[messageLoaded];
      console.log(messageLoaded);
      //appending it to containing element
      displayMessage.appendChild(normalMessage);
    } else {
      //creating gif message
      const gifMessage = document.createElement("div");

      //adding classes
      gifMessage.classList.add("gif-message", "you");

      //created img element for gif message
      const img = document.createElement("img");
      img.src = messages[messageLoaded].src;

      //created a paragraph element for gif message
      const p = document.createElement("p");

      if (messages[messageLoaded].msg == "") {
        p.style.padding = "0px";
      } else {
        p.innerHTML = messages[messageLoaded].msg;
      }
      console.log(messageLoaded);
      //appending img and p to gif message
      gifMessage.appendChild(img);
      gifMessage.appendChild(p);
      displayMessage.appendChild(gifMessage);
    }
    //appending containing element to display message
    display.appendChild(displayMessage);
    setTimeout(() => {
      display.scrollTo(0, display.scrollHeight);
    }, 20);

    if (messageLoaded == 2) {
      //choice 1
      const choice1 = document.createElement("div");
      choice1.classList.add("container__choice");
      choice1.textContent = "Hell Yeah!!!! 🎉🎉🎉";
      containerChoice.appendChild(choice1);

      //choice 2
      const choice2 = document.createElement("div");
      choice2.classList.add("container__choice");
      choice2.textContent = "No, i'm not interested 😒😒";
      containerChoice.appendChild(choice2);

      choice1.addEventListener("click", function () {
        messageLoaded = 3;
        if (this.nextElementSibling) {
          this.parentElement.removeChild(this.nextElementSibling);
        }
        const choicesAsMessage = this.parentElement.removeChild(this);

        addingChoiceAsMessage(choicesAsMessage);
        messageLoad();
      });

      choice2.addEventListener("click", function () {
        messageLoaded = 6;
        if (this.previousElementSibling) {
          this.parentElement.removeChild(this.previousElementSibling);
        }
        const choicesAsMessage = this.parentElement.removeChild(this);
        addingChoiceAsMessage(choicesAsMessage);

        messageLoad();
      });
    } else if (messageLoaded == 5) {
      i = 1;
      const singleChoice = document.createElement("div");
      singleChoice.classList.add("container__choice");
      //   "O"
      singleChoice.textContent = "Aree ye toh jija ji hainnn!!! lol 🤣🤣😂";
      containerChoice.appendChild(singleChoice);

      singleChoice.addEventListener("click", function () {
        messageLoaded = 9;
        if (this.nextElementSibling) {
          this.parentElement.removeChild(this.nextElementSibling);
        }
        const choicesAsMessage = this.parentElement.removeChild(this);

        addingChoiceAsMessage(choicesAsMessage);
        messageLoad();
      });
    } else if (messageLoaded == 7) {
      const singleChoice = document.createElement("div");
      singleChoice.classList.add("container__choice");
      singleChoice.textContent =
        "Sorry!! Count me in. I'm really interested in this. 😣🤐";
      containerChoice.appendChild(singleChoice);

      singleChoice.addEventListener("click", function () {
        messageLoaded = 10;
        if (this.nextElementSibling) {
          this.parentElement.removeChild(this.nextElementSibling);
        }
        const choicesAsMessage = this.parentElement.removeChild(this);

        addingChoiceAsMessage(choicesAsMessage);
        messageLoad();
      });
    } else if (messageLoaded == 12) {
      const singleChoice = document.createElement("div");
      singleChoice.classList.add("container__choice");
      singleChoice.textContent = "Let's get high. 😋😊😋😊";
      containerChoice.appendChild(singleChoice);

      singleChoice.addEventListener("click", function () {
        messageLoaded = 13;
        if (this.nextElementSibling) {
          this.parentElement.removeChild(this.nextElementSibling);
        }
        const choicesAsMessage = this.parentElement.removeChild(this);

        addingChoiceAsMessage(choicesAsMessage);
        messageLoad();
      });
    } else if (messageLoaded == messages.length - 1) {
    } else {
      //increasing messageLoaded by 1 for every iteration
      messageLoaded++;
      messageLoad();
    }
  }, 2000);
}

function hidingAllowed() {
  if (i == 1) {
    inputMessage.addEventListener("click", () => {
      containerChoice.classList.toggle("hidden");
    });
  }
}

function addingChoiceAsMessage(choice) {
  //reseting classes of choice
  choice.classList.remove("container__choice");
  choice.classList.add("message", "me");

  //creating display message
  createDisplayContainer();

  //appending
  displayMessage.appendChild(choice);
  display.appendChild(displayMessage);
}

function createloadingContainer() {
  loadingContainer = document.createElement("div");
  loadingContainer.classList.add("circle-container", "message", "you");
  for (let i = 0; i < 3; i++) {
    const smallCircle = document.createElement("div");
    smallCircle.classList.add("small-circle");
    loadingContainer.appendChild(smallCircle);
  }
  displayMessage.appendChild(loadingContainer);
  display.appendChild(displayMessage);
  display.scrollTo(0, display.scrollHeight);
}

function createDisplayContainer() {
  displayMessage = document.createElement("div");
  displayMessage.classList.add("display__message");
}
