import command from '../../config.json' assert {type: 'json'};

const createPresentation = () : string[] => {
  let string = "";
  const presentations : string[] = [];
  const files = `${command.presentations.length} File(s)`;
  const SPACE = "&nbsp;";

  presentations.push("<br>")

  command.presentations.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    presentations.push(string);
    string = '';
  });

  presentations.push("<br>");
  presentations.push(files);
  presentations.push("<br>");
  return presentations
}

export const PRESENTATIONS = createPresentation()
