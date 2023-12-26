import command from '../../config.json' assert {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    // let eleToPush = `<pre>${bannerString}</pre>`;
    // banner.push(eleToPush);
  }); 
  // show a gif file  
  banner.push("<br>");
  banner.push("<img src='https://upload.wikimedia.org/wikipedia/commons/6/64/Trefoil_knot_conways_game_of_life.gif' width='25%'/>");
  banner.push("<br>");
  banner.push("Welcome!");
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push("Type <span class='command'>'about'</span> for a short bio.");
  banner.push("Type <span class='command'>'projects'</span> to view my projects.");
  banner.push("Type <span class='command'>'presentations'</span> to view my presentations.");
  banner.push("<br>");
  banner.push(`Click <a href='${command.researchBoardLink}' target='_blank'>here</a> to check my Research Board.`);
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
