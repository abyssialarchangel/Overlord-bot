//requires
const restart = require("./commmandercodes/restartcommand.js");

module.exports = (message, command, args) => {
  switch ( command ){
    //restart
    case "restart":
      restart.func( message );
      break;
  }
}
