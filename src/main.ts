import command from '../config.json' assert {type: 'json'};
import { HELP } from "./commands/help";
import { BANNER } from "./commands/banner";
import { ABOUT } from "./commands/about"
import { DEFAULT } from "./commands/default";
import { PROJECTS } from "./commands/projects";
import { createWhoami } from "./commands/whoami";
import posts  from './commands/posts';

//mutWriteLines gets deleted and reassigned
let mutWriteLines = document.getElementById("write-lines");
let historyIdx = 0
let tempInput = ""
let userInput : string;
let isSudo = false;
let isPasswordInput = false;
let passwordCounter = 0;
let bareMode = false;

//WRITELINESCOPY is used to during the "clear" command
const WRITELINESCOPY = mutWriteLines;
const TERMINAL = document.getElementById("terminal");
const USERINPUT = document.getElementById("user-input") as HTMLInputElement;
const INPUT_HIDDEN = document.getElementById("input-hidden");
const PASSWORD = document.getElementById("password-input");
const PASSWORD_INPUT = document.getElementById("password-field") as HTMLInputElement;
const PROMPT = document.getElementById("prompt");
const COMMANDS = ["help", "about", "projects", "whoami", "repo", "banner", "clear"];
const HISTORY : string[] = [];
const SUDO_PASSWORD = "050823";
const REPO_LINK = command.repoLink;

const scrollToBottom = () => {
  const MAIN = document.getElementById("main");
  if(!MAIN) return

  MAIN.scrollTop = MAIN.scrollHeight;
}

function userInputHandler(e : KeyboardEvent) {
  const key = e.code;

  switch(key) {
    case "Enter":
    case "Go":
    case "Next":
      e.preventDefault()
      if (!isPasswordInput) {
        enterKey();
      } else {
        passwordHandler();
      }

      scrollToBottom();
      break;
    case "Escape":
      USERINPUT.value = "";
      break;
    case "ArrowUp":
      arrowKeys(key);
      e.preventDefault();
      break;
    case "ArrowDown":
      arrowKeys(key);
      break;
    case "Tab":
      tabKey();
      e.preventDefault();
      break;
  }
}

function enterKey() {
  if (!mutWriteLines || !PROMPT) return
  const resetInput = "";
  let newUserInput;
  userInput = USERINPUT.value;

  if (bareMode) {
    newUserInput = userInput;
  } else {
    newUserInput = `<span class='output'>${userInput}</span>`;
  }

  HISTORY.push(userInput);
  historyIdx = HISTORY.length

  //if clear then early return
  if (userInput === 'clear') {
    commandHandler(userInput.toLowerCase().trim());
    USERINPUT.value = resetInput;
    userInput = resetInput;
    return
  }

  const div = document.createElement("div");
  div.innerHTML = `${PROMPT.innerHTML} ${newUserInput}`;

  if (mutWriteLines.parentNode) {
    mutWriteLines.parentNode.insertBefore(div, mutWriteLines);
  }

  /*
  if input is empty or a collection of spaces, 
  just insert a prompt before #write-lines
  */
  if (userInput.trim().length !== 0) {
      commandHandler(userInput.toLowerCase().trim());
    }
  
  USERINPUT.value = resetInput;
  userInput = resetInput; 
}

function tabKey() {
  let currInput = USERINPUT.value;

  for (const ele of COMMANDS) {
    if(ele.startsWith(currInput)) {
      USERINPUT.value = ele;
      return
    }
  }
}

function arrowKeys(e : string) {
  switch(e){
    case "ArrowDown":      
      if (historyIdx !== HISTORY.length) {
          historyIdx += 1;
          USERINPUT.value = HISTORY[historyIdx];
          if (historyIdx === HISTORY.length) USERINPUT.value = tempInput;  
      }      
      break;
    case "ArrowUp":
      if (historyIdx === HISTORY.length) tempInput = USERINPUT.value;
      if (historyIdx !== 0) {
        historyIdx -= 1;
        USERINPUT.value = HISTORY[historyIdx];
      }
      break;
  }
}

function commandHandler(input : string) {
  if(input.startsWith("rm -rf") && input.trim() !== "rm -rf") {
    if (isSudo) {
      if(input === "rm -rf src" && !bareMode) {
        bareMode = true;

        setTimeout(() => {
          if(!TERMINAL || !WRITELINESCOPY) return
          TERMINAL.innerHTML = "";
          TERMINAL.appendChild(WRITELINESCOPY);
          mutWriteLines = WRITELINESCOPY;
        });

        easterEggStyles();
        setTimeout(() => {
          writeLines(["What made you think that was a good idea?", "<br>"]);
        }, 200)

        setTimeout(() => {
          writeLines(["Now everything is ruined.", "<br>"]);
        }, 1200)

        } else if (input === "rm -rf src" && bareMode) {
          writeLines(["there's no more src folder.", "<br>"])
        } else {
          if(bareMode) {
            writeLines(["What else are you trying to delete?", "<br>"])
          } else {
            writeLines(["<br>", "Directory not found.", "type <span class='command'>'ls'</span> for a list of directories.", "<br>"]);
          }
        } 
      } else {
        writeLines(["Permission not granted.", "<br>"]);
    }
    return
  }

  switch(input) {
    case 'clear':
      setTimeout(() => {
        if(!TERMINAL || !WRITELINESCOPY) return
        TERMINAL.innerHTML = "";
        TERMINAL.appendChild(WRITELINESCOPY);
        mutWriteLines = WRITELINESCOPY;
      })
      break;
    case 'banner':
      if(bareMode) {
        writeLines(["WebShell v1.0.0", "<br>"])
        break;
      }
      writeLines(BANNER);
      break;
    case 'help':
      if(bareMode) {
        writeLines(["maybe restarting your browser will fix this.", "<br>"])
        break;
      }
      writeLines(HELP);
      break;
    case 'whoami':      
      if(bareMode) {
        writeLines(["guest", "<br>"])
        break;
      }
      writeLines(createWhoami());
      break;
    case 'about':
      if(bareMode) {
        writeLines(["Nothing to see here.", "<br>"])
        break;
      }
      writeLines(ABOUT);
      break;
    case 'projects':
      if(bareMode) {
        writeLines(["I don't want you to break the other projects.", "<br>"])
        break;
      }
      writeLines(PROJECTS);
      break;
    case 'repo':
      writeLines(["Redirecting to github.com...", "<br>"]);
      setTimeout(() => {
        window.open(REPO_LINK, '_blank');
      }, 500);
      break;
    case 'linkedin':
      //add stuff here
      break;
    case 'github':
      //add stuff here
      break;
    case 'email':
      //add stuff here
      break;
    case 'rm -rf':
      if (bareMode) {
        writeLines(["don't try again.", "<br>"])
        break;
      }

      if (isSudo) {
        writeLines(["Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>", "<br>"]);
      } else {
        writeLines(["Permission not granted.", "<br>"])
      }
        break;
    case 'sudo':
      if(bareMode) {
        writeLines(["no.", "<br>"])
        break;
      }
      if(!PASSWORD) return
      isPasswordInput = true;
      USERINPUT.disabled = true;

      if(INPUT_HIDDEN) INPUT_HIDDEN.style.display = "none";
      PASSWORD.style.display = "block";
      setTimeout(() => {
        PASSWORD_INPUT.focus();
      }, 100);

      break;
    case 'ls':
      if(bareMode) {
        writeLines(["", "<br>"])
        break;
      }

      if (isSudo) {
        writeLines(["src", "<br>"]);
      } else {
        writeLines(["Permission not granted.", "<br>"]);
      }
      break;
    
    case 'posts':
      posts();
      break;
    
    
    default:
      if(bareMode) {
        writeLines(["type 'help'", "<br>"])
        break;
      }

      writeLines(DEFAULT);
      break;


  } 
}


// function createAndShowModal() {
//   // Create the modal and iframe elements
//   const modal = document.createElement('div');
//   const iframe = document.createElement('iframe');

//   const closeButton = document.createElement('button');

//   // Set the button's text
//   closeButton.textContent = '×';


//   // Style the button
//   closeButton.style.position = 'absolute';
//   closeButton.style.top = '10px';
//   closeButton.style.right = '10px';
//   closeButton.style.background = 'none';
//   closeButton.style.border = 'none';
//   closeButton.style.fontSize = '1.5em';
//   closeButton.style.color = '#fff';
//   closeButton.style.cursor = 'pointer'; // Change the cursor when hovering over the button
//   closeButton.style.borderRadius = '50%'; // Rounded corners

//   // Set the iframe's src attribute to 'https://www.google.com'
//   iframe.src = 'https://www.embedista.com';

//   // Append the iframe to the modal
//   modal.appendChild(iframe);

//  // Style the modal
//   modal.style.position = 'fixed';
//   modal.style.top = '0';
//   modal.style.right = '0';
//   modal.style.bottom = '0';
//   modal.style.left = '0';
//   modal.style.background = 'rgba(0, 0, 0, 0.8)'; // Darker background
//   modal.style.display = 'flex';
//   modal.style.width = '80%';
//   modal.style.height = '80%';
//   modal.style.margin = 'auto';
//   modal.style.justifyContent = 'center';
//   modal.style.alignItems = 'center';
//   modal.style.borderRadius = '10px'; // Rounded corners

//   // Style the iframe
//   iframe.style.border = '0';
//   iframe.style.width = '80%';
//   iframe.style.height = '80%';

//   // Append the modal to the body
//   document.body.appendChild(modal);
//   // Append the iframe to the modal
//   modal.appendChild(iframe);
//   // Append the button to the modal
//   modal.appendChild(closeButton);

  

//   // Add an event listener to the modal to close it when clicked
//   modal.addEventListener('click', function() {
//     document.body.removeChild(modal);
//   });

//   // Add an event listener to the button to close the modal when clicked
//   closeButton.addEventListener('click', function(event) {
//     // Prevent the click event from bubbling up to the modal
//     event.stopPropagation();

//     // Remove the modal from the body
//     document.body.removeChild(modal);
//   });
// }



function writeLines(message : string[]) {
  message.forEach((item, idx) => {
    displayText(item, idx);
  });
}

function displayText(item : string, idx : number) {
  setTimeout(() => {
    if(!mutWriteLines) return
    const p = document.createElement("p");
    p.innerHTML = item;
    mutWriteLines.parentNode!.insertBefore(p, mutWriteLines);
    scrollToBottom();
  }, 40 * idx);
}

function revertPasswordChanges() {
    if (!INPUT_HIDDEN || !PASSWORD) return
    PASSWORD_INPUT.value = "";
    USERINPUT.disabled = false;
    INPUT_HIDDEN.style.display = "block";
    PASSWORD.style.display = "none";
    isPasswordInput = false;

    setTimeout(() => {
      USERINPUT.focus();
    }, 200)
}

function passwordHandler() {
  if (passwordCounter === 2) {
    if (!INPUT_HIDDEN || !mutWriteLines || !PASSWORD) return
    writeLines(["<br>", "INCORRECT PASSWORD.", "PERMISSION NOT GRANTED.", "<br>"])
    revertPasswordChanges();
    passwordCounter = 0;
    return
  }

  if (PASSWORD_INPUT.value === SUDO_PASSWORD) {
    if (!mutWriteLines || !mutWriteLines.parentNode) return
    writeLines(["<br>", "PERMISSION GRANTED.", "Try <span class='command'>'rm -rf'</span>", "<br>"])
    revertPasswordChanges();
    isSudo = true;
    return
  } else {
    PASSWORD_INPUT.value = "";
    passwordCounter++;
  }
}

function easterEggStyles() {   
  const bars = document.getElementById("bars");
  const body = document.body;
  const main = document.getElementById("main");
  const span = document.getElementsByTagName("span");

  if (!bars) return
  bars.innerHTML = "";
  bars.remove()

  if (main) main.style.border = "none";

  body.style.backgroundColor = "black";
  body.style.fontFamily = "VT323, monospace";
  body.style.fontSize = "20px";
  body.style.color = "white";

  for (let i = 0; i < span.length; i++) {
    span[i].style.color = "white";
  }

  USERINPUT.style.backgroundColor = "black";
  USERINPUT.style.color = "white";
  USERINPUT.style.fontFamily = "VT323, monospace";
  USERINPUT.style.fontSize = "20px";

}

const initEventListeners = () => {
  window.addEventListener('load', () => {
    writeLines(BANNER);
    USERINPUT.addEventListener('keydown', userInputHandler);
    PASSWORD_INPUT.addEventListener('keydown', userInputHandler);
  });
  
  window.addEventListener('click', () => {
    USERINPUT.focus();
  });

  console.log("%cPassword: 050823", "color: red; font-size: 20px;");
}

initEventListeners();
