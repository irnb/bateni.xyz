import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  const TELEGRAM = "Channel";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const telegram_channel = `<i class='fa-brands fa-telegram'></i> ${TELEGRAM}`;

  let string = "";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += telegram_channel;
  string += SPACE.repeat(17 - TELEGRAM.length);
  string += `<a target='_blank' href='https://t.me/hamidList'>${command.social.telegram_channel}</a>`;
  about.push(string);

  about.push("<br>");
  about.push("<br>");
  about.push("check out my linkedin profile about section for complete about me.")
  about.push("<br>");

  return about
}

export const ABOUT = createAbout();
