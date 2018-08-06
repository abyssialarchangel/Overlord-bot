//command requires
//general requires
const hello = require("./general/hello_world.js");
const list = require("./general/list.js");
const role = require("./general/roles.js");
const test = require("./general/test.js");
const twitch = require("./general/twitch.js");
const userinfo = require("./general/userinfo.js");

//Mention requires
const dadMen = require("./Mentions/dadMen.js")
const shhh = require("./Mentions/shhh.js")
const listen = require("./Mentions/listen.js");
const weirdMen = require("./Mentions/weirdMen.js");

//Meme requires
const arch = require("./memelist/archofabyss.js");
const butt = require("./memelist/buttmuffin.js");
const dad = require("./memelist/dad.js");
const elliesaurus = require("./memelist/elliesaurus.js");
const fhantum = require("./memelist/fhantum.js");
const grim = require("./memelist/grimdevil.js");
const koko = require("./memelist/koko.js");
const non = require("./memelist/noncreative.js");
const pacifist = require("./memelist/pacifist.js");
const pasta = require("./memelist/pastascream.js");
const poseidon = require("./memelist/poseidon.js");
const schnellis = require("./memelist/shnellis.js");
const spectrgem = require("./memelist/spectrgem.js");
const teebstv = require("./memelist/teebstv.js");
const weird = require("./memelist/weird.js");

//owl requires
const dragons = require("./owl/dragons.js");
const dynasty = require("./owl/dynasty.js");
const fuel = require("./owl/fuel.js");
const fusion = require("./owl/fusion.js");
const gladiators = require("./owl/gladiators.js");
const mayhem = require("./owl/mayhem.js");
const nyxl = require("./owl/nyxl.js");
const outlaws = require("./owl/outlaws.js");
const shock = require("./owl/shock.js");
const spitfire = require("./owl/spitfire.js");
const uprising = require("./owl/uprising.js");
const valient = require("./owl/valient.js");

module.exports = (message, command, args) => {

  switch(command) {
//==============================================================================
//                              general List
//==============================================================================
//  hello Command                                                           H
    case "hello":
      hello.func( message );
      break;

//==============================================================================
// list of commands                                                         L
    case "list":
      list.actual.func( message );
      break;

    case "memelist":
      list.memelist.func( message );
      break;

//==============================================================================
//  Roles Command                                                            R
    case "roles":
      role.func( message, args );
      break;

//==============================================================================
//  Test                                                                    T
    case "test":
      test.func( message );
      break;

//==============================================================================
//  Twitch Command
    case "twitch":
      twitch.func( message, args );
      break;

//==============================================================================
//  user info command                                                       U
    case "userinfo":
      userinfo.func( message );
      break;

//==============================================================================
//                                 Meme List
//==============================================================================
//  archofabyss's commands                                                  A
    case "archofabyss":
      arch.shot.func( message );
      break;

    case "archthank":
      arch.thank.func( message );
      break;

    case "archcode":
      arch.codefairy.func( message );
      break;

//==============================================================================
//  baiser's commands                                                       B
    case "baiser":
      baiser.placeholder.func( message );
      break;

//==============================================================================
//  buttmuffin's commands
    case "buttmemes":
      butt.memes.func( message );
      break;

    case "buttmuffin":
      butt.muffin.func( message );
      break;

    case "buttthank":
      butt.thank.func( message );
      break;

//==============================================================================
//  dad's commands                                                          D
    case "dad":
      dad.advise.func( message );
      break;

    case "dadsub":
      dad.sub.func( message );
      break;

    case "dadthank":
      dad.thank.func( message );
      break;

    case "dadwise":
      dad.wise.func( message );
      break;

    case "dadecchi":
      dad.ecchi.func( message );
      break;

    case "dadpoke":
      if(args.length > 0) {
        dadMen.pokeMen.func( message, args );                           //MENTION FILE
      } else {
        dad.poke.func( message );
      }
      break;

    case "dadsenpai":
      dad.senpai.func( message );
      break;

//==============================================================================
//  elluesaurus's commands                                                  E
    case "elliesaurus":
      elliesaurus.placeholder.func( message );
      break;

//==============================================================================
//  fhantum's commands                                                      F
    case "fhantum":
      fhantum.timeout.func( message );
      break;

    case "fhantumthank":
      fhantum.thank.func( message );
      break;

//==============================================================================
//  grim's commands                                                         G
    case "grimdevil":
      grim.grim.func( message );
      break;

    case "grimhart":
      grim.grimhart.func( message );
      break;

    case "grimbutter":
      grim.peanutbutter.func( message );
      break;

    case "grimthank":
      grim.thank.func( message );
      break;

//==============================================================================
//  Koko's commands                                                         K
    case "koko":
      koko.placeholder.func( message );
      break;

//==============================================================================
//  noncreative's commands                                                  N
    case "noncreative":
      non.noncreative.func( message );
      break;

    case "creative":
      non.creative.func( message );
      break;

    case "creativeafraid":
      non.afraid.func( message );
      break;

    case "noncreativethank":
      non.afraid.func( message );
      break;

//==============================================================================
//  pacifist's commands                                                     P
    case "pacifistover":
      pacifist.over.func( message );
      break;

    case "pacifistheals":
      pacifist.heals.func( message );
      break;

    case "pacifist":
      pacifist.carry.func( message );
      break;

    case "pacifistpleb":
      pacifist.pleb.func( message );
      break;

    case "pacifistthank":
      pacifist.thank.func( message );
      break;

    case "pacifistcookie":
      pacifist.nom.func( message );
      break;

    case "pacifistnocookie":
      pacifist.nocookie.func( message );
      break;

//==============================================================================
//  pastascream's commands
    case "pastascream":
      pasta.carry.func( message );
      break;

    case "pastacook":
      pasta.pasta.func( message );
      break;

    case "pastathank":
      pasta.thank.func( message );
      break;

//==============================================================================
//  poseidon's commands
    case "poseidon":
      poseidon.fries.func( message );
      break;

    case "bubbles":
      poseidon.bubbles.func( message );
      break;

    case "poseidonthank":
      poseidon.thank.func( message );
      break;

//==============================================================================
//  schnellis's commands                                                    S
    case "schnellis":
      schnellis.placeholder.func( message );
      break;

//==============================================================================
//  SpectrGem's commands
    case "thank":
      spectrgem.thank.func( message );
      break;

//==============================================================================
//  teebstv's commands                                                       T
    case "teebstv":
      teebstv.twitch.func( message );
      break;

    case "teebsthank":
      teebstv.coach.func( message );
      break;
//==============================================================================
//  weird's Meme commands                                                    W
    case "weirdyell":
      weird.shotcall.func( message );
      break;

    case "weirdm1":
      weird.reminder.func( message );
      break;

    case "weirdthank":
      weird.thank.func( message );
      break;

    case "weirdsorry":
      weird.sorry.func( message );
      break;

//==============================================================================
//                              Mention List
//==============================================================================
//  Weird's Mention Commands
    case "weird":
      weirdMen.weird.func( message );
      break;

    case "weirdheals":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  listen Command
    case "listen":
      listen.hey.func( message, args );
      break;

//==============================================================================
//  shhh Command
    case "shhh":
      shhh.func( message, args );
      break;

//==============================================================================
//                                 OWL List
//==============================================================================
//  dragon's Commands
    case "dragons":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  dynasty's Commands
    case "dynasty":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  fuel's Commands
    case "fuel":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  fusion's Commands
    case "fusion":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  gladiators's Commands
    case "gladiators":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  mayhem's Commands
    case "mayhem":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  nyxl's Commands
    case "nyxl":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  outlaws's Commands
    case "outlaws":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  shock's Commands
    case "shock":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  spitfire's Commands
    case "spitfire":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  uprising's Commands
    case "uprising":
      weirdMen.heals.func( message );
      break;

//==============================================================================
//  valient's Commands
    case "valient":
      weirdMen.heals.func( message );
      break;

  }
}
