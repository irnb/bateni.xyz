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
  banner.push("Welcome to my blog!");
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  // banner.push(`Type <span class='command'>'repo'</span> to view the GitHub repository or click <a href='${command.repoLink}' target='_blank'>here</a>.`);
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
