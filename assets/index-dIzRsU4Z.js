(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();const Q={commands:[["'about'","Social media links and a short bio."],["'projects'","Maybe there's something interesting."],["'presentations'","View my Blockchain related presentations."],["'whoami'","A perplexing question."],["'sudo'","???"],["'banner'","Display the banner."],["'clear'","Clear the terminal."]]},ee=()=>{const e=[];return e.push("<br>"),Q.commands.forEach(t=>{const o="&nbsp;";let s="";s+=o.repeat(2),s+="<span class='command'>",s+=t[0],s+="</span>",s+=o.repeat(17-t[0].length),s+=t[1],e.push(s)}),e.push("<br>"),e.push("Press <span class='keys'>[Tab]</span> for auto completion."),e.push("Press <span class='keys'>[Esc]</span> to clear the input line."),e.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands."),e.push("<br>"),e},te=ee(),ne=["⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⣸⣿⣿⣷⣄⠀⠀⠀⠀⣀⡀⠀⠀⠀⢀⣠⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⡿⣿⣿⣷⣦⣴⣿⣿⣿⣄⣠⠶⣿⡿⢿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⡿⠿⢛⣿⣿⣿⣷⣮⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣯⠽⢿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⢟⣾⢏⡤⠴⠶⠆⠀⠀⠀⠀⠀⠤⠤⣄⣻⣿⣿⣾⡏⣷⠽⣿⡋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠿⠛⣿⣿⣿⣠⣤⡴⣦⣝⣦⠀⠀⠀⠀⠖⣋⣡⣤⣸⡇⢻⣿⣿⣿⣿⣼⢻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⣿⣿⣧⠟⢁⣠⣄⡉⠹⠀⠀⠀⠀⠚⠉⢹⡉⠙⠻⣦⣿⣿⣯⣭⡿⢦⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⣿⣿⣦⣮⣶⣷⣽⣤⠀⠀⠀⠀⣰⣯⣅⡙⢧⠀⢹⣿⣿⣿⣿⣇⠀⠹⣷⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠈⠛⠻⠿⣽⣿⣿⣿⢻⣿⡹⣶⡾⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣋⣿⡇⠈⢻⣿⣿⠿⠁⠀⠀⠀⠀⠻⣿⣿⣿⣿⠁⠀⣾⣿⡆⣀⡌⢧⠀⠘⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣧⣾⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⣿⣿⣿⡇⣿⣷⣿⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣬⣹⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⢰⣿⣿⣿⠙⡆⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢦⣽⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⣿⣿⡏⣡⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⡿⢳⡀⠀⠀⠀⠀⠐⢶⠀⠀⠀⠀⠀⠀⠀⣸⣿⡇⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠶⣿⣿⣇⣿⢻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠻⣿⣿⣿⣷⡙⠦⣤⡀⠀⢀⣠⡤⠖⠛⣡⣾⣿⣿⣿⣿⠈⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠀⢹⣿⢻⣿⣿⣦⣌⡉⠉⠉⢀⣀⣠⣾⣿⣿⣿⡏⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡏⠀⣹⣿⣿⣿⡏⠀⢸⣿⣿⣿⣿⣿⣯⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢁⡼⠁⡿⣿⣿⣧⣀⣜⣿⣿⡿⢟⣡⡞⠀⠙⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⣸⣿⡿⢿⣴⣿⣿⣷⣶⣿⣿⣿⠁⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⠀⢀⣿⢷⣶⣿⠋⠙⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⣿⠹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠃⠀⠀⣼⣿⠸⣿⣧⣀⣴⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⣿⠀⠘⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠛⠀⣠⣾⣿⣿⡇⣿⣿⣿⣿⣿⡏⠀⠀⢹⠀⠀⠀⠀⢀⡇⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠇⢠⣾⣿⣿⣿⡿⣱⣿⣿⣿⣿⣿⠃⠉⠉⡟⠀⠀⠀⠀⢸⠁⠀⠀⣼⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⢰⣿⣿⣿⣿⣟⣵⣿⠿⢿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⢸⠀⢀⡼⠁⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢿⠃⢸⣿⣿⣿⡏⣾⣿⣇⠀⣨⣽⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⢸⢠⠎⡇⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠇⡾⢠⠀⣿⣿⣿⣷⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣸⠋⢸⡇⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠏⢰⣇⠸⠀⣸⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⣸⠃⠀⢸⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⢸⢹⠀⠀⣿⡹⣿⣿⣿⣿⣿⡿⠻⡿⣿⣿⣿⣿⣿⡇⠀⠀⣰⠇⠀⠀⡟⠀⠀⠀⠸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠁⠀⡇⠘⠀⣸⣿⣷⣽⣿⣿⣿⣿⣇⠀⣴⣿⣿⣿⣿⣿⡇⠀⢠⠏⠀⠀⠀⡇⠀⠀⠀⢘⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"],se="https://github.com/irnb/board",oe={email:"hamid@europe.com",github:"irnb",linkedin:"irnb",telegram_channel:"@hamidList"},re="Blockchain Engineer | Web3 Protocol Architect | Solidity | ZKP | Node.js | Rust | EIP7503 Co-author | Privacy Lover ",ie=[["EIP7503","ZKP Wormhole: Native privacy for EVM","https://eip7503.org"],["PPOS","Private Proof of Solvency","https://arxiv.org/abs/2310.13900"],["DeFiPapers","A collection of DeFi related scientific papers","https://github.com/irnb/DeFiPapers"],["DeDogmaDAO","Decentralized Dogma DAO: Trying to bring DeFi economic model to the world of NFT by creating game","https://dedogmadao.gitbook.io/intro/"],["web3Wall","decentralized message board","https://github.com/irnb/web3-wall"],["Locket Wallet","A non-custodial wallet that provide Account Abstraction for users","https://dex.nobitex.ir/trade"],["Dexpresso","A decentralized exchange with off-chain orderbook that trying to provide CEX like user experience","https://dex.nobitex.ir/trade"]],ae=[["ZKP 101 ","Practical ZKP 101: Verifiable Computing and ZKP, code a Circuit in circom (language: English)","https://www.linkedin.com/feed/update/urn:li:activity:7126140057362530304"],["TornadoCash","Gave a lecture on Tornado Cash and ZKP. (language: Persian)","https://www.youtube.com/watch?v=5J4DaEXfb6I"],["Bitcoin","Workshop: Gave a lecture on Bitcoin in protocol level. (language: Persian)","https://www.youtube.com/watch?v=UmCCEdzYHBE"],["Ethereum","Workshop: Gave a lecture on Ethereum in protocol level. (language: Persian)","https://www.youtube.com/watch?v=s_x68YFziuo"],["EIP","EIP (ETHEREUM IMPROVEMENT PROPOSALS) & UPDATING THE CHAIN (ShirYaKhat S05E01) (language: Persian)","https://shiryakhat.net/2021/07/eip-updates-on-ethereum.html"],["EIP-1559","EIP-1559 LET IT BURN (ShirYaKhat S05E02) (language: Persian)","https://shiryakhat.net/2021/08/eip-1559-let-it-burn.html"],["Scalability","SCALABILITY, THE BLOCKCHAIN'S BOTTLENECK (ShirYaKhat S06E01) (language: Persian)","https://shiryakhat.net/2021/10/scalability-blockchain-bottleneck.html"],["Scalability","SCALABILITY, THE BLOCKCHAIN'S BOTTLENECK - PART 2 (ShirYaKhat S06E02) (language: Persian)","https://shiryakhat.net/2021/11/scalability-blockchain-bottleneck-2.html"],["Lightning ","LIGHTNING, MAKE BITCOIN SCALABLE AGAIN - PART 1 (ShirYaKhat S06E03-05) (language: Persian)","https://shiryakhat.net/2021/12/Lightning-Make-Bitcoin-Scalable-1.html"]],h={ascii:ne,researchBoardLink:se,social:oe,aboutGreeting:re,projects:ie,presentations:ae},le=()=>{const e=[];return e.push("<br>"),h.ascii.forEach(t=>{let o="";for(let s=0;s<t.length;s++)t[s]===" "?o+="&nbsp;":o+=t[s]}),e.push("<br>"),e.push("<img src='https://upload.wikimedia.org/wikipedia/commons/6/64/Trefoil_knot_conways_game_of_life.gif' width='25%'/>"),e.push("<br>"),e.push("Welcome!"),e.push("Type <span class='command'>'help'</span> for a list of all available commands."),e.push("Type <span class='command'>'about'</span> for a short bio."),e.push("Type <span class='command'>'projects'</span> to view my projects."),e.push("Type <span class='command'>'presentations'</span> to view my presentations."),e.push("<br>"),e.push(`Click <a href='${h.researchBoardLink}' target='_blank'>here</a> to check my Research Board.`),e.push("<br>"),e},Z=le(),ce=()=>{const e=[],t="&nbsp;",o="Email",s="Github",n="Linkedin",l="Channel",f=`<i class='fa-solid fa-envelope'></i> ${o}`,m=`<i class='fa-brands fa-github'></i> ${s}`,E=`<i class='fa-brands fa-linkedin'></i> ${n}`,y=`<i class='fa-brands fa-telegram'></i> ${l}`;let a="";return e.push("<br>"),e.push(h.aboutGreeting),e.push("<br>"),a+=t.repeat(2),a+=f,a+=t.repeat(17-o.length),a+=`<a target='_blank' href='mailto:${h.social.email}'>${h.social.email}</a>`,e.push(a),a="",a+=t.repeat(2),a+=m,a+=t.repeat(17-s.length),a+=`<a target='_blank' href='https://github.com/${h.social.github}'>github/${h.social.github}</a>`,e.push(a),a="",a+=t.repeat(2),a+=E,a+=t.repeat(17-n.length),a+=`<a target='_blank' href='https://www.linkedin.com/in/${h.social.linkedin}'>linkedin/${h.social.linkedin}</a>`,e.push(a),a="",a+=t.repeat(2),a+=y,a+=t.repeat(17-l.length),a+=`<a target='_blank' href='https://t.me/hamidList'>${h.social.telegram_channel}</a>`,e.push(a),e.push("<br>"),e.push("<br>"),e.push("check out my linkedin profile about section for complete about me."),e.push("<br>"),e},de=ce(),pe=()=>{const e=["<br>","COMMAND NOT FOUND","Type <span class='command'>'help'</span> to get started.","<br>"],t=[];return e.forEach(o=>{t.push(o)}),t},he=pe(),ue=()=>{let e="";const t=[],o=`${h.projects.length} File(s)`,s="&nbsp;";return t.push("<br>"),h.projects.forEach(n=>{let l=`<a href="${n[2]}" target="_blank">${n[0]}</a>`;e+=s.repeat(2),e+=l,e+=s.repeat(17-n[0].length),e+=n[1],t.push(e),e=""}),t.push("<br>"),t.push(o),t.push("<br>"),t},me=ue(),ye=()=>{let e="";const t=[],o=`${h.presentations.length} File(s)`,s="&nbsp;";return t.push("<br>"),h.presentations.forEach(n=>{let l=`<a href="${n[2]}" target="_blank">${n[0]}</a>`;e+=s.repeat(2),e+=l,e+=s.repeat(17-n[0].length),e+=n[1],t.push(e),e=""}),t.push("<br>"),t.push(o),t.push("<br>"),t},fe=ye(),z={message:[["In the kaleidoscope of existence,","I am but a reflection questioning the enigma - "],["Amidst cosmic whispers,","I navigate the maze of self-discovery,","echoing the eternal refrain - "],["In the symphony of life,","I am a note inquiring its own melody,","harmonizing with the universal query - "],["As stardust contemplating its journey,","I ponder the cosmic query,","silently asking - "],["In the tapestry of reality,","I am the thread of self-inquiry,","weaving through the eternal question - "]]},ge=()=>{const e=[],t=Math.floor(Math.random()*z.message.length);return e.push("<br>"),z.message[t].forEach((o,s)=>{s===z.message[t].length-1&&(o+="<span class='command'>who am I?</span>"),e.push(o)}),e.push("<br>"),e};function be(){const e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.right="0",e.style.bottom="0",e.style.left="0",e.style.background="rgba(0, 0, 0, 0.8)",e.style.display="flex",e.style.flexDirection="column",e.style.width="80%",e.style.height="90%",e.style.margin="auto",e.style.padding="0",e.style.borderRadius="10px",e.style.color="#fff";const t=document.createElement("div");t.style.display="flex",t.style.justifyContent="space-between",t.style.alignItems="center",t.style.width="100%",t.style.padding="0",t.style.backgroundColor="#343",t.style.color="#fff",t.style.borderTopLeftRadius="10px",t.style.borderTopRightRadius="10px";const o=document.createElement("div");o.textContent="Posts",o.style.textAlign="center",o.style.flexGrow="1",t.appendChild(o);const s=document.createElement("button");s.textContent="×",s.style.background="none",s.style.border="none",s.style.fontSize="1.5em",s.style.color="#fff",s.style.cursor="pointer",s.addEventListener("click",function(){document.body.removeChild(e)}),t.appendChild(s),e.insertBefore(t,e.firstChild);const n=document.createElement("div");n.innerHTML="🌐 Discover my world of tech and blockchain in this section. <br>📝 Find my blog posts, related 🐦 tweets, and 🔗 links to blogs I find interesting, all with my thoughts. <br>🏷️ Use tags to easily find what you're looking for in this tech journey.",n.style.margin="20px",n.style.padding="10px",n.style.fontSize="1em",n.style.lineHeight="1.6",n.style.color="#333",n.style.fontFamily="Georgia, serif",n.style.backgroundColor="#f9f9f9",n.style.borderRadius="5px",e.appendChild(n),n.style.fontSize="1.2em",n.style.lineHeight="1.5",n.style.fontFamily="Arial, sans-serif",e.appendChild(n);const l=[{title:"How to use the new Twitter API v2 with Node.js",description:`Twitter recently released a new version of their API, Twitter API v2. It comes with a lot of new features and endpoints. In this article, we will learn how to use the new Twitter API v2 with Node.js.
       tly released a new version of their API, Twit tly released a new version of their API, Twit tly released
       a new version of their API, Twit
       tly released a new version of their API, Twit tly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twit 
       tly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twit 
       tly released a new version of their API, Twit tly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twit 
       tly released a new version of their API, Twittly released a new`,links:[{lnk:"https://blog.logrocket.com/how-to-use-the-new-twitter-api-v2-with-node-js/",title:"How t"}],cover_image:"https://blog.logrocket.com/wp-content/uploads/2023/12/finding-fixing-rage-clicks-nocdn.png",tags:["nodejs","twitter","api"],type:"refrence",date:"2020-12-10"},{title:"How to use the new",description:"Twitter recently released a new version of their API, Twitter API v2. It comes with a lot of new features and endpoints. In this article, we will learn how to use the new Twitter API v2 with Node.js.",links:[{lnk:"https://blog.logrocket.com/how-to-use-the-new-twitter-api-v2-with-node-js/",title:"How t"}],cover_image:"https://blog.logrocket.com/wp-content/uploads/2023/12/finding-fixing-rage-clicks-nocdn.png",tags:["nodejs","twitter","api"],type:"blog-post",date:"2020-12-10"},{title:"How to use the new",description:`Twitter recently released a new version of their API, Twitter API v2.
        It comes with a lot of new features and endpoints. In this article, we will 
        learn how to use the new Twitter API v2 with Node.js.`,links:[{lnk:"https://blog.logrocket.com/how-to-use-the-new-twitter-api-v2-with-node-js/",title:"How t"}],cover_image:"https://blog.logrocket.com/wp-content/uploads/2023/12/finding-fixing-rage-clicks-nocdn.png",tags:["nodejs"],type:"tweet",date:"2020-12-10"}],f=document.createElement("div");f.style.display="flex",f.style.height="calc(100% - 60px)";const m=document.createElement("div");m.style.overflowY="scroll",m.style.width="30%",m.style.padding="10px",m.style.borderRight="1px solid #ddd",m.style.boxSizing="border-box",m.style.borderRadius="5px",m.style.margin="20px",m.style.color="#333",f.appendChild(m);const E=document.createElement("div");E.style.width="70%",E.style.padding="10px",E.style.overflowY="scroll",E.style.maxHeight="calc(100vh - 60px)",E.style.boxSizing="border-box",f.appendChild(E),l.slice().reverse().forEach((y,a)=>{const g=document.createElement("div");g.style.border="1px solid #ddd",g.style.marginBottom="10px",g.style.padding="10px",g.style.borderRadius="5px",g.style.backgroundColor="#f9f9f9";const $=document.createElement("h2"),J=l.length-a;$.textContent=J+"-"+y.title,g.appendChild($);const R=document.createElement("p");R.textContent=y.date,R.style.textAlign="right",R.style.fontSize="0.8em",g.appendChild(R);const _=document.createElement("div");y.tags.forEach(O=>{const i=document.createElement("div");i.textContent=O,i.style.display="inline-block",i.style.marginRight="5px",i.style.padding="2px 5px",i.style.fontSize="0.8em",i.style.borderRadius="3px",i.style.backgroundColor="#ddd",_.appendChild(i)}),_.style.textAlign="left",g.appendChild(_),g.addEventListener("click",function(){const O=document.querySelector("#viewer");O&&e.removeChild(O);const i=document.createElement("div");i.id="viewer",i.style.position="absolute",i.style.right="20px",i.style.top="20%",i.style.width="66%",i.style.height="77%",i.style.backgroundColor="rgba(255, 218, 185, 0.5)",i.style.boxSizing="border-box",i.style.padding="10px",i.style.borderRadius="10px",e.appendChild(i);const w=document.createElement("div");w.style.display="flex",w.style.justifyContent="space-between",w.style.alignItems="center",w.style.backgroundColor="#ddd",w.style.padding="10px",w.style.borderRadius="10px",i.appendChild(w);const H=document.createElement("h1");H.textContent=y.title,H.style.margin="0",H.style.color="#333",w.appendChild(H);const T=document.createElement("button");T.textContent="X",T.style.border="none",T.style.backgroundColor="transparent",T.style.cursor="pointer",T.style.fontSize="1.2em",T.addEventListener("click",function(){e.removeChild(i)}),w.appendChild(T);const I=document.createElement("img");I.src=y.cover_image,I.style.width="100%",I.style.height="200px",I.style.objectFit="cover",I.style.borderRadius="10px",I.style.margin="0 auto",I.style.marginTop="10px",i.appendChild(I);const j=document.createElement("p");j.textContent=y.type,j.style.fontSize="0.8em",j.style.textAlign="center",i.appendChild(j);const S=document.createElement("div");S.style.display="flex",S.style.justifyContent="flex-start",S.style.flexWrap="wrap",y.tags.forEach(L=>{const d=document.createElement("div");d.textContent=L,d.style.fontSize="0.8em",d.style.border="1px solid #000",d.style.borderRadius="5px",d.style.margin="10px",d.style.padding="5px",S.appendChild(d)}),i.appendChild(S);const v=document.createElement("p");v.innerText=y.description,v.style.padding="10px",v.style.overflow="hidden",v.style.lineHeight="1.5",v.style.wordBreak="break-word",v.style.overflowWrap="break-word",v.style.whiteSpace="nowrap",v.style.textOverflow="ellipsis",i.appendChild(v),y.links.forEach(L=>{const d=document.createElement("a");d.href=L.lnk,d.textContent=L.title+": "+L.lnk,d.style.display="block",d.style.color="#7f6f",d.style.textDecoration="none",d.style.margin="10px",i.appendChild(d)});const x=document.createElement("p");x.textContent=new Date(y.date).toLocaleDateString(),x.style.fontSize="0.8em",x.style.textAlign="right",x.style.color="#6e9d",x.style.margin="10px",i.appendChild(x)}),m.appendChild(g)}),e.appendChild(f),document.body.appendChild(e)}let u=document.getElementById("write-lines"),k=0,G="",b,M=!1,W=!1,K=0,p=!1;const A=u,C=document.getElementById("terminal"),c=document.getElementById("user-input"),N=document.getElementById("input-hidden"),D=document.getElementById("password-input"),B=document.getElementById("password-field"),U=document.getElementById("prompt"),we=["help","about","projects","presentations","whoami","repo","banner","clear"],P=[],ve="050823",X=()=>{const e=document.getElementById("main");e&&(e.scrollTop=e.scrollHeight)};function F(e){const t=e.code;switch(t){case"Enter":case"Go":case"Next":e.preventDefault(),W?Te():ke(),X();break;case"Escape":c.value="";break;case"ArrowUp":Y(t),e.preventDefault();break;case"ArrowDown":Y(t);break;case"Tab":Ee(),e.preventDefault();break}}function ke(){if(!u||!U)return;const e="";let t;if(b=c.value,p?t=b:t=`<span class='output'>${b}</span>`,P.push(b),k=P.length,b==="clear"){q(b.toLowerCase().trim()),c.value=e,b=e;return}const o=document.createElement("div");o.innerHTML=`${U.innerHTML} ${t}`,u.parentNode&&u.parentNode.insertBefore(o,u),b.trim().length!==0&&q(b.toLowerCase().trim()),c.value=e,b=e}function Ee(){let e=c.value;for(const t of we)if(t.startsWith(e)){c.value=t;return}}function Y(e){switch(e){case"ArrowDown":k!==P.length&&(k+=1,c.value=P[k],k===P.length&&(c.value=G));break;case"ArrowUp":k===P.length&&(G=c.value),k!==0&&(k-=1,c.value=P[k]);break}}function q(e){if(e.startsWith("rm -rf")&&e.trim()!=="rm -rf"){M?e==="rm -rf src"&&!p?(p=!0,setTimeout(()=>{!C||!A||(C.innerHTML="",C.appendChild(A),u=A)}),Pe(),setTimeout(()=>{r(["What made you think that was a good idea?","<br>"])},200),setTimeout(()=>{r(["Now everything is ruined.","<br>"])},1200)):r(e==="rm -rf src"&&p?["there's no more src folder.","<br>"]:p?["What else are you trying to delete?","<br>"]:["<br>","Directory not found.","type <span class='command'>'ls'</span> for a list of directories.","<br>"]):r(["Permission not granted.","<br>"]);return}switch(e){case"clear":setTimeout(()=>{!C||!A||(C.innerHTML="",C.appendChild(A),u=A)});break;case"banner":if(p){r(["WebShell v1.0.0","<br>"]);break}r(Z);break;case"help":if(p){r(["maybe restarting your browser will fix this.","<br>"]);break}r(te);break;case"whoami":if(p){r(["guest","<br>"]);break}r(ge());break;case"about":if(p){r(["Nothing to see here.","<br>"]);break}r(de);break;case"projects":if(p){r(["I don't want you to break the other projects.","<br>"]);break}r(me);break;case"presentations":if(p){r(["I don't want you to break the other presentations.","<br>"]);break}r(fe);break;case"linkedin":break;case"github":break;case"email":break;case"rm -rf":if(p){r(["don't try again.","<br>"]);break}r(M?["Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>","<br>"]:["Permission not granted.","<br>"]);break;case"sudo":if(p){r(["no.","<br>"]);break}if(!D)return;W=!0,c.disabled=!0,N&&(N.style.display="none"),D.style.display="block",setTimeout(()=>{B.focus()},100);break;case"ls":if(p){r(["","<br>"]);break}r(M?["src","<br>"]:["Permission not granted.","<br>"]);break;case"posts":be();break;default:if(p){r(["type 'help'","<br>"]);break}r(he);break}}function r(e){e.forEach((t,o)=>{Ie(t,o)})}function Ie(e,t){setTimeout(()=>{if(!u)return;const o=document.createElement("p");o.innerHTML=e,u.parentNode.insertBefore(o,u),X()},40*t)}function V(){!N||!D||(B.value="",c.disabled=!1,N.style.display="block",D.style.display="none",W=!1,setTimeout(()=>{c.focus()},200))}function Te(){if(K===2){if(!N||!u||!D)return;r(["<br>","INCORRECT PASSWORD.","PERMISSION NOT GRANTED.","<br>"]),V(),K=0;return}if(B.value===ve){if(!u||!u.parentNode)return;r(["<br>","PERMISSION GRANTED.","Try <span class='command'>'rm -rf'</span>","<br>"]),V(),M=!0;return}else B.value="",K++}function Pe(){const e=document.getElementById("bars"),t=document.body,o=document.getElementById("main"),s=document.getElementsByTagName("span");if(e){e.innerHTML="",e.remove(),o&&(o.style.border="none"),t.style.backgroundColor="black",t.style.fontFamily="VT323, monospace",t.style.fontSize="20px",t.style.color="white";for(let n=0;n<s.length;n++)s[n].style.color="white";c.style.backgroundColor="black",c.style.color="white",c.style.fontFamily="VT323, monospace",c.style.fontSize="20px"}}const xe=()=>{window.addEventListener("load",()=>{r(Z),c.addEventListener("keydown",F),B.addEventListener("keydown",F)}),window.addEventListener("click",()=>{c.focus()}),console.log("%cPassword: 050823","color: red; font-size: 20px;")};xe();