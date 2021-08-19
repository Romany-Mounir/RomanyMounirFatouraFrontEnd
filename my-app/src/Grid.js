import React from "react";
import {
  Row,
  Col,
  
  Container,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { firebaseApp } from "./firebase";

export default function Grid({ changeAuthFlag }) {
  const [winningCard, setWinningCard] = useState("green");
  const [Count, setCount] = useState(3);
  const [Games, setGames] = useState([]);
  const [master, setMaster] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamMember, setTeamMember] = useState();
  const dbCollection = firebaseApp.firestore().collection("UsersDataCol");
  const dbGames = firebaseApp.firestore().collection("Games");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let words = {
    English: [
      "AFRICA",
      "AGENT",
      "AIR",
      "ALIEN",
      "ALPS",
      "AMAZON",
      "AMBULANCE",
      "AMERICA",
      "ANGEL",
      "ANTARCTICA",
      "APPLE",
      "ARM",
      "ATLANTIS",
      "AUSTRALIA",
      "AZTEC",
      "BACK",
      "BALL",
      "BAND",
      "BANK",
      "BAR",
      "BARK",
      "BAT",
      "BATTERY",
      "BEACH",
      "BEAR",
      "BEAT",
      "BED",
      "BEIJING",
      "BELL",
      "BELT",
      "BERLIN",
      "BERMUDA",
      "BERRY",
      "BILL",
      "BLOCK",
      "BOARD",
      "BOLT",
      "BOMB",
      "BOND",
      "BOOM",
      "BOOT",
      "BOTTLE",
      "BOW",
      "BOX",
      "BRIDGE",
      "BRUSH",
      "BUCK",
      "BUFFALO",
      "BUG",
      "BUGLE",
      "BUTTON",
      "CALF",
      "CANADA",
      "CAP",
      "CAPITAL",
      "CAR",
      "CARD",
      "CARROT",
      "CASINO",
      "CAST",
      "CAT",
      "CELL",
      "CENTAUR",
      "CENTER",
      "CHAIR",
      "CHANGE",
      "CHARGE",
      "CHECK",
      "CHEST",
      "CHICK",
      "CHINA",
      "CHOCOLATE",
      "CHURCH",
      "CIRCLE",
      "CLIFF",
      "CLOAK",
      "CLUB",
      "CODE",
      "COLD",
      "COMIC",
      "COMPOUND",
      "CONCERT",
      "CONDUCTOR",
      "CONTRACT",
      "COOK",
      "COPPER",
      "COTTON",
      "COURT",
      "COVER",
      "CRANE",
      "CRASH",
      "CRICKET",
      "CROSS",
      "CROWN",
      "CYCLE",
      "CZECH",
      "DANCE",
      "DATE",
      "DAY",
      "DEATH",
      "DECK",
      "DEGREE",
      "DIAMOND",
      "DICE",
      "DINOSAUR",
      "DISEASE",
      "DOCTOR",
      "DOG",
      "DRAFT",
      "DRAGON",
      "DRESS",
      "DRILL",
      "DROP",
      "DUCK",
      "DWARF",
      "EAGLE",
      "EGYPT",
      "EMBASSY",
      "ENGINE",
      "ENGLAND",
      "EUROPE",
      "EYE",
      "FACE",
      "FAIR",
      "FALL",
      "FAN",
      "FENCE",
      "FIELD",
      "FIGHTER",
      "FIGURE",
      "FILE",
      "FILM",
      "FIRE",
      "FISH",
      "FLUTE",
      "FLY",
      "FOOT",
      "FORCE",
      "FOREST",
      "FORK",
      "FRANCE",
      "GAME",
      "GAS",
      "GENIUS",
      "GERMANY",
      "GHOST",
      "GIANT",
      "GLASS",
      "GLOVE",
      "GOLD",
      "GRACE",
      "GRASS",
      "GREECE",
      "GREEN",
      "GROUND",
      "HAM",
      "HAND",
      "HAWK",
      "HEAD",
      "HEART",
      "HELICOPTER",
      "HIMALAYAS",
      "HOLE",
      "HOLLYWOOD",
      "HONEY",
      "HOOD",
      "HOOK",
      "HORN",
      "HORSE",
      "HORSESHOE",
      "HOSPITAL",
      "HOTEL",
      "ICE",
      "ICE CREAM",
      "INDIA",
      "IRON",
      "IVORY",
      "JACK",
      "JAM",
      "JET",
      "JUPITER",
      "KANGAROO",
      "KETCHUP",
      "KEY",
      "KID",
      "KING",
      "KIWI",
      "KNIFE",
      "KNIGHT",
      "LAB",
      "LAP",
      "LASER",
      "LAWYER",
      "LEAD",
      "LEMON",
      "LEPRECHAUN",
      "LIFE",
      "LIGHT",
      "LIMOUSINE",
      "LINE",
      "LINK",
      "LION",
      "LITTER",
      "LOCH NESS",
      "LOCK",
      "LOG",
      "LONDON",
      "LUCK",
      "MAIL",
      "MAMMOTH",
      "MAPLE",
      "MARBLE",
      "MARCH",
      "MASS",
      "MATCH",
      "MERCURY",
      "MEXICO",
      "MICROSCOPE",
      "MILLIONAIRE",
      "MINE",
      "MINT",
      "MISSILE",
      "MODEL",
      "MOLE",
      "MOON",
      "MOSCOW",
      "MOUNT",
      "MOUSE",
      "MOUTH",
      "MUG",
      "NAIL",
      "NEEDLE",
      "NET",
      "NEW YORK",
      "NIGHT",
      "NINJA",
      "NOTE",
      "NOVEL",
      "NURSE",
      "NUT",
      "OCTOPUS",
      "OIL",
      "OLIVE",
      "OLYMPUS",
      "OPERA",
      "ORANGE",
      "ORGAN",
      "PALM",
      "PAN",
      "PANTS",
      "PAPER",
      "PARACHUTE",
      "PARK",
      "PART",
      "PASS",
      "PASTE",
      "PENGUIN",
      "PHOENIX",
      "PIANO",
      "PIE",
      "PILOT",
      "PIN",
      "PIPE",
      "PIRATE",
      "PISTOL",
      "PIT",
      "PITCH",
      "PLANE",
      "PLASTIC",
      "PLATE",
      "PLATYPUS",
      "PLAY",
      "PLOT",
      "POINT",
      "POISON",
      "POLE",
      "POLICE",
      "POOL",
      "PORT",
      "POST",
      "POUND",
      "PRESS",
      "PRINCESS",
      "PUMPKIN",
      "PUPIL",
      "PYRAMID",
      "QUEEN",
      "RABBIT",
      "RACKET",
      "RAY",
      "REVOLUTION",
      "RING",
      "ROBIN",
      "ROBOT",
      "ROCK",
      "ROME",
      "ROOT",
      "ROSE",
      "ROULETTE",
      "ROUND",
      "ROW",
      "RULER",
      "SATELLITE",
      "SATURN",
      "SCALE",
      "SCHOOL",
      "SCIENTIST",
      "SCORPION",
      "SCREEN",
      "SCUBA DIVER",
      "SEAL",
      "SERVER",
      "SHADOW",
      "SHAKESPEARE",
      "SHARK",
      "SHIP",
      "SHOE",
      "SHOP",
      "SHOT",
      "SINK",
      "SKYSCRAPER",
      "SLIP",
      "SLUG",
      "SMUGGLER",
      "SNOW",
      "SNOWMAN",
      "SOCK",
      "SOLDIER",
      "SOUL",
      "SOUND",
      "SPACE",
      "SPELL",
      "SPIDER",
      "SPIKE",
      "SPINE",
      "SPOT",
      "SPRING",
      "SPY",
      "SQUARE",
      "STADIUM",
      "STAFF",
      "STAR",
      "STATE",
      "STICK",
      "STOCK",
      "STRAW",
      "STREAM",
      "STRIKE",
      "STRING",
      "SUB",
      "SUIT",
      "SUPERHERO",
      "SWING",
      "SWITCH",
      "TABLE",
      "TABLET",
      "TAG",
      "TAIL",
      "TAP",
      "TEACHER",
      "TELESCOPE",
      "TEMPLE",
      "THEATER",
      "THIEF",
      "THUMB",
      "TICK",
      "TIE",
      "TIME",
      "TOKYO",
      "TOOTH",
      "TORCH",
      "TOWER",
      "TRACK",
      "TRAIN",
      "TRIANGLE",
      "TRIP",
      "TRUNK",
      "TUBE",
      "TURKEY",
      "UNDERTAKER",
      "UNICORN",
      "VACUUM",
      "VAN",
      "VET",
      "WAKE",
      "WALL",
      "WAR",
      "WASHER",
      "WASHINGTON",
      "WATCH",
      "WATER",
      "WAVE",
      "WEB",
      "WELL",
      "WHALE",
      "WHIP",
      "WIND",
      "WITCH",
      "WORM",
      "YARD",
    ],
    "English (Duet)": [
      "DRUM",
      "BRIDE",
      "WAGON",
      "UNIVERSITY",
      "HIT",
      "ASH",
      "BASS",
      "ASTRONAUT",
      "DOLL",
      "NERVE",
      "COACH",
      "BEAM",
      "SPOON",
      "COUNTRY",
      "NOSE",
      "KING ARTHUR",
      "STAMP",
      "CAMP",
      "BRAIN",
      "LEAF",
      "TUTU",
      "COAST",
      "LUNCH",
      "THUNDER",
      "POTATO",
      "DESK",
      "ONION",
      "ELEPHANT",
      "ANCHOR",
      "COWBOY",
      "FLOOD",
      "MOHAWK",
      "SANTA",
      "PITCHER",
      "BARBECUE",
      "LEATHER",
      "SKATES",
      "MUSKETEER",
      "SNAP",
      "SADDLE",
      "GENIE",
      "MARK",
      "SHOULDER",
      "GOVERNOR",
      "MANICURE",
      "ANTHEM",
      "HALLOWEEN",
      "NEWTON",
      "BALLOON",
      "FIDDLE",
      "CRAFT",
      "GLACIER",
      "CAKE",
      "RAT",
      "TANK",
      "BLIND",
      "SPIRIT",
      "CABLE",
      "SWAMP",
      "EINSTEIN",
      "HIDE",
      "CRYSTAL",
      "GEAR",
      "KISS",
      "PEW",
      "POWDER",
      "TURTLE",
      "BACON",
      "SHERLOCK",
      "SQUASH",
      "BOOK",
      "RAZOR",
      "DRESSING",
      "BRICK",
      "BRAZIL",
      "TEAR",
      "STABLE",
      "BIKINI",
      "PEN",
      "ROLL",
      "CHRISTMAS",
      "RUBBER",
      "BAY",
      "MOTHER",
      "KICK",
      "FOG",
      "RADIO",
      "CRAB",
      "CONE",
      "SKULL",
      "WHEELCHAIR",
      "EGG",
      "BUTTER",
      "WEREWOLF",
      "CHERRY",
      "PATIENT",
      "DRYER",
      "DRAWING",
      "BOSS",
      "FEVER",
      "BANANA",
      "POLISH",
      "KNOT",
      "PAINT",
      "STORM",
      "GOLDILOCKS",
      "PILLOW",
      "CHAIN",
      "MOSES",
      "SAW",
      "BROTHER",
      "RAIL",
      "ROPE",
      "STREET",
      "PAD",
      "CAPTAIN",
      "WISH",
      "AXE",
      "SHORTS",
      "POPCORN",
      "CASTLE",
      "SECOND",
      "TEAM",
      "OASIS",
      "MESS",
      "MISS",
      "AVALANCHE",
      "TEXAS",
      "SUN",
      "LETTER",
      "RUST",
      "WING",
      "STEEL",
      "EAR",
      "SCROLL",
      "BUNK",
      "CANE",
      "VENUS",
      "LADDER",
      "PURSE",
      "SHEET",
      "NAPOLEON",
      "SUGAR",
      "DIRECTOR",
      "ACE",
      "SCRATCH",
      "BUCKET",
      "CAESAR",
      "DISK",
      "BEARD",
      "BULB",
      "BENCH",
      "SCARECROW",
      "IGLOO",
      "TUXEDO",
      "EARTH",
      "RAM",
      "SISTER",
      "BREAD",
      "RECORD",
      "DASH",
      "GREENHOUSE",
      "DRONE",
      "STEAM",
      "BISCUIT",
      "RIP",
      "NOTRE DAME",
      "LIP",
      "SHAMPOO",
      "CHEESE",
      "SACK",
      "MOUNTIE",
      "SUMO",
      "SAHARA",
      "WALRUS",
      "DUST",
      "HAMMER",
      "CLOUD",
      "SPRAY",
      "ST.PATRICK",
      "KILT",
      "MONKEY",
      "FROG",
      "DENTIST",
      "RAINBOW",
      "WHISTLE",
      "REINDEER",
      "KITCHEN",
      "LEMONADE",
      "SLIPPER",
      "FLOOR",
      "VALENTINE",
      "PEPPER",
      "ROAD",
      "SHED",
      "BOWLER",
      "MILK",
      "WHEEL",
      "MAGAZINE",
      "BRASS",
      "TEA",
      "HELMET",
      "FLAG",
      "TROLL",
      "JAIL",
      "STICKER",
      "PUPPET",
      "CHALK",
      "BONSAI",
      "SWEAT",
      "GANGSTER",
      "BUTTERFLY",
      "STORY",
      "SALAD",
      "ARMOR",
      "SMOKE",
      "CAVE",
      "QUACK",
      "BREAK",
      "SNAKE",
      "MILL",
      "GYMNAST",
      "WONDERLAND",
      "DRIVER",
      "SPURS",
      "ZOMBIE",
      "PIG",
      "CLEOPATRA",
      "TOAST",
      "PENNY",
      "ANT",
      "VOLUME",
      "LACE",
      "BATTLESHIP",
      "MARACAS",
      "METER",
      "SLING",
      "DELTA",
      "STEP",
      "JOAN OF ARC",
      "COMET",
      "BATH",
      "POLO",
      "GUM",
      "VAMPIRE",
      "SKI",
      "POCKET",
      "BATTLE",
      "FOAM",
      "RODEO",
      "SQUIRREL",
      "SALT",
      "MUMMY",
      "BLACKSMITH",
      "CHIP",
      "GOAT",
      "LAUNDRY",
      "BEE",
      "TATTOO",
      "RUSSIA",
      "TIN",
      "MAP",
      "YELLOWSTONE",
      "SILK",
      "HOSE",
      "SLOTH",
      "KUNG FU",
      "CLOCK",
      "BEAN",
      "LIGHTNING",
      "BOWL",
      "GUITAR",
      "RANCH",
      "PEARL",
      "FLAT",
      "VIRUS",
      "ICE AGE",
      "COFFEE",
      "MARATHON",
      "ATTIC",
      "WEDDING",
      "COLUMBUS",
      "POP",
      "SHERWOOD",
      "TRICK",
      "NYLON",
      "LOCUST",
      "PACIFIC",
      "CUCKOO",
      "TORNADO",
      "MEMORY",
      "JOCKEY",
      "MINOTAUR",
      "BIG BANG",
      "PAGE",
      "SPHINX",
      "CRUSADER",
      "VOLCANO",
      "RIFLE",
      "BOIL",
      "HAIR",
      "BICYCLE",
      "JUMPER",
      "SMOOTHIE",
      "SLEEP",
      "PENTAGON",
      "GROOM",
      "RIVER",
      "FARM",
      "JUDGE",
      "VIKING",
      "EASTER",
      "MUD",
      "PARROT",
      "COMB",
      "SALSA",
      "EDEN",
      "ARMY",
      "PADDLE",
      "SALOON",
      "MONA LISA",
      "MILE",
      "BLIZZARD",
      "QUARTER",
      "JEWELER",
      "HAMBURGER",
      "GLASSES",
      "SAIL",
      "BOXER",
      "RICE",
      "MIRROR",
      "INK",
      "BEER",
      "TIPI",
      "MAKEUP",
      "MICROWAVE",
      "HERCULES",
      "SIGN",
      "PIZZA",
      "WOOL",
      "HOMER",
      "MINUTE",
      "SWORD",
      "SOUP",
      "ALASKA",
      "BABY",
      "POTTER",
      "SHOWER",
      "BLADE",
      "NOAH",
      "SOAP",
      "TUNNEL",
      "PEACH",
      "DOLLAR",
      "TIP",
      "LOVE",
      "JELLYFISH",
      "STETHOSCOPE",
      "TASTE",
      "FUEL",
      "MOSQUITO",
      "WIZARD",
      "BIG BEN",
      "GARDEN",
      "WAITRESS",
      "SHOOT",
      "SHELL",
      "LUMBERJACK",
      "MEDIC",
      "DREAM",
      "BLUES",
      "EARTHQUAKE",
      "PEA",
      "PARADE",
      "SLED",
      "SMELL",
      "COMPUTER",
      "COW",
      "PEANUT",
      "WINDOW",
      "MUSTARD",
      "SAND",
      "GOLF",
      "CROW",
      "ICELAND",
      "APRON",
      "VIOLET",
      "DOOR",
      "TIGER",
      "JOKER",
      "HOUSE",
      "COLLAR",
      "HAWAII",
      "DWARF",
      "PINE",
      "MAGICIAN",
      "FROST",
      "CURRY",
      "BUBBLE",
      "WOOD",
    ],
    "English (Deep Undercover) [MA]": [
      "ACID",
      "ALCOHOL",
      "ANIMAL",
      "APPLES",
      "ASHES",
      "ASS",
      "BACON",
      "BAKED",
      "BALLOON",
      "BALLS",
      "BANANAS",
      "BANG",
      "BAR",
      "BARTENDER",
      "BEACH",
      "BEANS",
      "BEAR",
      "BEAVER",
      "BED",
      "BEEF",
      "BEER",
      "BEHIND",
      "BENDER",
      "BISCUITS",
      "BISEXUAL",
      "BITCH",
      "BLACK",
      "BLING",
      "BLONDE",
      "BLOW",
      "BLUSH",
      "BODY",
      "BOND",
      "BONDAGE",
      "BONE",
      "BONG",
      "BOOB",
      "BOOTY",
      "BOOZE",
      "BOTTLE",
      "BOTTOM",
      "BOWL",
      "BOX",
      "BOXERS",
      "BOY",
      "BRA",
      "BREAST",
      "BRIEFS",
      "BROWN",
      "BROWNIE",
      "BURN",
      "BUSH",
      "BUST",
      "BUTT",
      "CABOOSE",
      "CANDLE",
      "CANNONS",
      "CARPET",
      "CATCHER",
      "CHAINS",
      "CHAMPAGNE",
      "CHAPS",
      "CHEEK",
      "CHERRY",
      "CHEST",
      "CHICK",
      "CHOKE",
      "CHUBBY",
      "CIGAR",
      "CIGARETTE",
      "CLAM",
      "CLAP",
      "CLUB",
      "COCK",
      "COCKTAIL",
      "COMMANDO",
      "CONDOM",
      "COOZIE",
      "COUCH",
      "COUGAR",
      "COUPLE",
      "COWGIRL",
      "COYOTE",
      "CRABS",
      "CRACK",
      "CRAP",
      "CREAM",
      "CUCUMBER",
      "CUDDLE",
      "CUFF",
      "DADDY",
      "DAME",
      "DIARRHEA",
      "DICK",
      "DILDO",
      "DOGGY",
      "DOMINATE",
      "DONKEY",
      "DOUCHE",
      "DOWN",
      "DRAG",
      "DRILL",
      "DRUNK",
      "EAT",
      "EMISSION",
      "ESCORT",
      "EXPERIMENT",
      "EYES",
      "FACIAL",
      "FANTASY",
      "FATTY",
      "FEATHER",
      "FECAL",
      "FETISH",
      "FILM",
      "FINGER",
      "FIRE",
      "FISH",
      "FIST",
      "FLASH",
      "FLESH",
      "FLOWER",
      "FLUFF",
      "FORESKIN",
      "FREAK",
      "FRECKLES",
      "FRENCH",
      "FRICTION",
      "FURRY",
      "G-SPOT",
      "GAG",
      "GANG",
      "GANGBANG",
      "GASH",
      "GAY",
      "GERBIL",
      "GIGOLO",
      "GIRL",
      "GOOSE",
      "GRANDMA",
      "GRASS",
      "GROPE",
      "GROUP",
      "HAMMER",
      "HAMSTER",
      "HAND",
      "HEAD",
      "HEADBOARD",
      "HEADLIGHTS",
      "HELL",
      "HERB",
      "HIGH",
      "HOLE",
      "HOMERUN",
      "HOOKER",
      "HOOTERS",
      "HOOTERS",
      "HORNY",
      "HORSE",
      "HOT",
      "HOTEL",
      "HUMP",
      "HURL",
      "ICE",
      "INCH",
      "INTERN",
      "JAZZ",
      "JERK",
      "JEWELS",
      "JOB",
      "JOHN",
      "JOHNSON",
      "JOINT",
      "JOYSTICK",
      "JUGS",
      "JUICE",
      "KEG",
      "KINKY",
      "KITTY",
      "KNEES",
      "KNOB",
      "KNOCKERS",
      "LATEX",
      "LEGEND",
      "LEGS",
      "LICK",
      "LIGHTER",
      "LINE",
      "LINGERIE",
      "LIPS",
      "LIQUOR",
      "LIZARD",
      "LOBSTER",
      "LOG",
      "LOOSE",
      "LOTION",
      "LOVE",
      "LUBE",
      "LUST",
      "MANBOOBS",
      "MARTINI",
      "MATTRESS",
      "MEAT",
      "MELONS",
      "MEMBER",
      "MESH",
      "MILK",
      "MISSIONARY",
      "MIXER",
      "MOIST",
      "MOLE",
      "MOM",
      "MONKEY",
      "MOTEL",
      "MOTORBOAT",
      "MOUTH",
      "MOVIE",
      "MUG",
      "MUSHROOM",
      "NAIL",
      "NAKED",
      "NAVEL",
      "NECKLACE",
      "NEEDLE",
      "NIPPLE",
      "NOODLE",
      "NUDE",
      "NURSE",
      "NUTS",
      "NYLON",
      "OLIVE",
      "ONION",
      "ORGASM",
      "ORGY",
      "OYSTER",
      "PACKAGE",
      "PADDLE",
      "PEACHES",
      "PECKER",
      "PEE",
      "PENIS",
      "PERIOD",
      "PICKLE",
      "PIE",
      "PIG",
      "PILLOWS",
      "PIMP",
      "PINCH",
      "PINK",
      "PIPE",
      "PITCHER",
      "PLAYER",
      "POKER",
      "POLE",
      "POOP",
      "PORK",
      "PORN",
      "POUND",
      "PRICK",
      "PRISON",
      "PROSTATE",
      "PUB",
      "PUCKER",
      "PURPLE",
      "PUSSY",
      "QUEEF",
      "QUEEN",
      "QUEER",
      "RACK",
      "RAVE",
      "RECTUM",
      "RED",
      "REGRET",
      "ROACH",
      "ROLL",
      "ROOF",
      "ROOKIE",
      "RUBBER",
      "RUG",
      "SACK",
      "SAFE",
      "SALAD",
      "SAUNA",
      "SAUSAGE",
      "SCORE",
      "SCREW",
      "SEAT",
      "SECRETARY",
      "SEED",
      "SEMEN",
      "SEX",
      "SHAFT",
      "SHAME",
      "SHARE",
      "SHAVE",
      "SHEEP",
      "SHOT",
      "SHOWER",
      "SIN",
      "SKANK",
      "SKID",
      "SKIRT",
      "SLUT",
      "SMEGMA",
      "SMELL",
      "SMOKE",
      "SNAKE",
      "SNATCH",
      "SNIFF",
      "SNORT",
      "SOFT",
      "SOFTBALLS",
      "SOLO",
      "SORE",
      "SPANK",
      "SPEED",
      "SPERM",
      "SPOON",
      "SPREAD",
      "SQUIRT",
      "STALKER",
      "STEAMY",
      "STIFF",
      "STILETTO",
      "STONES",
      "STOOL",
      "STRAIGHT",
      "STRAP",
      "STRIP",
      "STRIPPER",
      "STROBE",
      "STUD",
      "SWALLOW",
      "SWIMMERS",
      "TABOO",
      "TACO",
      "TAIL",
      "TAP",
      "TAVERN",
      "TEABAG",
      "TEASE",
      "TENT",
      "TEQUILA",
      "THREESOME",
      "THROAT",
      "TICKLE",
      "TIE",
      "TIP",
      "TIT",
      "TONGUE",
      "TOOL",
      "TOP",
      "TORTURE",
      "TOUCH",
      "TOUCHDOWN",
      "TOY",
      "TRAIN",
      "TRAMP",
      "TRIM",
      "TROUSERS",
      "TRUNK",
      "TUBESTEAK",
      "TUNA",
      "TURD",
      "TWIG",
      "UDDERS",
      "URANUS",
      "VASECTOMY",
      "VEGAS",
      "VEIN",
      "VIBRATOR",
      "VIDEO",
      "VINYL",
      "VIRGIN",
      "VODKA",
      "VOMIT",
      "WAD",
      "WANG",
      "WASTE",
      "WATCH",
      "WAX",
      "WEED",
      "WENCH",
      "WET",
      "WHIP",
      "WHISKEY",
      "WHITE",
      "WIENER",
      "WINE",
      "WOOD",
    ],
  };
  useEffect(() => {
    getUserRole();
  }, []);

  const handleCLick = (index) => {
    let cardArr = [...Games];
    cardArr.map((card, cardIndex) => {
      if (cardIndex === index) {
        if (card.color === winningCard) {
          alert("Well Done, Correct Choice");
        } else {
          if (Count === 0) {
            alert("Game Over");
            return;
          }
          setCount(Count - 1);
          alert("Wrong Choice :(");
        }
        card.flipped = !card.flipped;
      }
    });
    setGames([...cardArr]);
  };
  const addTeamMembers = () => {
    dbCollection.get().then((res) => {
      let arr = [];
      res.docs.map((user) => {
        if (user.data().role === 0 && !user.data().GameId) {
          arr.push({
            id: user.id,
            email: user.data().Email,
          });
        }
      });
      setTeamMembers([...arr]);
      setTeamMember(arr[0].id);
    });
  };
  const getTeamMember = (teamId) => {
    dbCollection
      .doc(teamId)
      .get()
      .then((res) => {
        setTeamMember(res.data().Email);
      });
  };
  const getGamesFromdb = (GameId) => {
    dbGames
      .doc(GameId)
      .get()
      .then((res) => {
        setGames(res.data().Round);
        localStorage.setItem("game", res.id);
        setWinningCard(res.data().WinningCard);
        if (res.data().IdTeam) {
          getTeamMember(res.data().IdTeam);
          setTeamMembers([]);
        } else {
          addTeamMembers();
        }
      });
  };
  const getUserRole = () => {
    dbCollection.get().then((res) => {
      res.docs.forEach((doc) => {
        let user = doc.data();
        localStorage.setItem("userId", doc.id);
        if (user.Email === localStorage.email) {
          if (user.role === 1) {
            setMaster(true);
            if (user.GameId) {
              getGamesFromdb(user.GameId);
            } else {
              makeWords();
              makeGameObjects(doc.ref.id);
            }
          } else {
            if (user.GameId) {
              getGamesFromdb(user.GameId);
            }
          }
        }
      });
    });
  };

  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    changeAuthFlag(false);
  };
  var elements = [];
  var colorarr = [
    "black",
    "green",
    "yellow",
    "green",
    "green",
    "black",
    "green",
    "yellow",
    "green",
    "yellow",
    "green",
    "green",
    "yellow",
    "green",
    "yellow",
    "green",
    "yellow",
    "green",
    "yellow",
    "green",
    "green",
    "black",
    "yellow",
    "green",
    "yellow",
  ];
  const makeWords = () => {
    for (var i = 0; i < 25; i++) {
      elements.push(
        words.English[Math.floor(Math.random() * words.English.length)]
      );
    }
  };
  const makeGameObjects = (masterID) => {
    let game = [];
    for (let index = 0; index < colorarr.length; index = index + 2) {
        swapPositions(colorarr, index, Math.floor(Math.random() * 25));
    }
    for (let index = 0; index < elements.length; index++) {
      let obj = {
        word: elements[index],
        color: colorarr[index],
        flipped: false,
      };
      game.push(obj);
    }
    let newGame = {
      IdSpymaster: masterID,
      Round: game,
    };
    // setGames(game);
    dbGames.add(newGame).then((res) => {
      dbCollection
        .doc(localStorage.getItem("id"))
        .update({ GameId: res.id })
        .then((res) => {
          getUserRole();
        });
    });
  };
  const addMemberToGame = () => {
    dbCollection
      .doc(teamMember)
      .update({ GameId: localStorage.game })
      .then((res) => {
        alert("Team Player Added successfuly");
        dbGames.doc(localStorage.game).update({ IdTeam: teamMember });
        getUserRole();
        handleClose();
      });
  };

  // var ref = db.collection('CardsDataCol').doc();
  // console.log(ref);
  // for (let index = 0; index < elements.length; index++) {
  //     db.collection('CardsDataCol').doc(ref.id).collection('Cards').add({ 'Color': colorarr[index], 'Data': elements[index] }).then((res) => {console.log('Added to collection: ' + res.name);}).catch((e) => console.log(e));
  // }

  //   function handleClick(e) {
  //     e.preventDefault();
  //     setFlippedOn({ flippedOn: !flippedOn });
  //   }

  // var cardsColorArray = [];
  // var colorarr = ['black', 'green', 'yellow'];
  // for (let index=0; index < 25 ; index++ ) {
  // do {
  //     var colorRandom = colorarr[Math.ceil(Math.random() * (colorarr.length - 1))];
  //     switch (colorRandom) {
  //         case 'black':
  //             cardsColorArray.push('black');
  //             break;
  //         case 'green':
  //             cardsColorArray.push('green');
  //             break;
  //         case 'yellow':
  //             cardsColorArray.push('yellow');
  //             break;
  //         default:
  //             break;
  //     }
  // } while (cardsColorArray.map((item) => item === 'black' && item).length < 3 && cardsColorArray.map((item) => item === 'green' && item).length < 13 && cardsColorArray.map((item) => item === 'yellow' && item).length < 9 && cardsColorArray.length < 25);

  // console.log(cardsColorArray);
  const swapPositions = (array, a, b) => {
    [array[a], array[b]] = [array[b], array[a]];
  };
//   const randomizeColors = () => {
//       console.log(colorarr)
//       for (let index = 0; index < colorarr.length; index = index + 2) {
//           swapPositions(colorarr, index, Math.floor(Math.random() * 25));
//         }
//         console.log(colorarr)
//   }
//     // let color = getRandomColor();


//     console.log(colorarr);
//     // while (cardsColorArray.length < 10) {

//     //   console.log(colorRandom);
//     //   switch (colorRandom) {
//     //     case "black":
//     //       cardsColorArray.map((item) => item === "black" && item).length < 3 &&
//     //         cardsColorArray.push("black");
//     //       break;
//     //     case "green":
//     //       cardsColorArray.map((item) => item === "green" && item).length < 13 &&
//     //         cardsColorArray.push("green");
//     //       break;
//     //     case "yellow":
//     //       cardsColorArray.map((item) => item === "yellow" && item).length < 9 &&
//     //         cardsColorArray.push("yellow");
//     //       break;
//     //     default:
//     //       break;
//     //   }
//     // }
//   };

  const change = (event) => {
    setTeamMember(event.target.value);
  };

  return (
    <Container className="">
      <Row className="my-5 bg-warning p-3">
        <Col className="text-black">{/* <h1>Code Names</h1> */}</Col>
        <Col className="text-black">
          <h1>Code Names</h1>
        </Col>
        <Col className="text-black d-flex justify-content-center">
          <h1
            className="btn btn-danger d-flex align-items-center"
            onClick={logOut}
          >
            Logout
          </h1>
        </Col>
      </Row>
      <Row className="mb-2 text-white d-flex justify-content-center">
        <Col>
          <h3 className="bg-dark p-3 rounded">Turns left</h3>
        </Col>
        <Col>
          <h3 className="bg-dark py-3 rounded">{Count}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {teamMembers.length > 0 ? (
            <div>
              <Button variant="warning" onClick={handleShow}>
                Choose Team to Add
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Choose One of the following team members to add
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Select size="lg" onChange={(e) => change(e)}>
                    {teamMembers.map((member) => {
                      return (
                        <option key={member.id} value={member.id}>
                          {member.email}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="success" onClick={addMemberToGame}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ) : (
            <h3 className="text-white">
              This game is currently with {teamMember}
            </h3>
          )}
        </Col>
      </Row>
      <Row className="m-2  d-flex justify-content-center">
        {master
          ? Games.map((element, index) => {
              return (
                <Col xs={2} key={index} className="offset2 m-2 p-2">
                  <div
                    className="rounded border text-secondary"
                    style={{ backgroundColor: element.color, height: 43 }}
                  >
                    <h3>{element.word}</h3>
                  </div>
                </Col>
              );
            })
          : Games.map((element, index) => {
              return (
                <Col xs={2} key={index} className="offset2 m-2 p-2">
                  <ReactCardFlip
                    isFlipped={element.flipped}
                    flipDirection="vertical"
                  >
                    <div
                      onClick={(e) => handleCLick(index)}
                      className="rounded border bg-white  location-front-item"
                    >
                      <h3>{element.word}</h3>
                    </div>
                    <div
                      onClick={(e) => handleCLick(index)}
                      className="rounded border location-back-item"
                      style={{ backgroundColor: element.color, height: 43 }}
                    ></div>
                  </ReactCardFlip>
                </Col>
              );
            })}
      </Row>

      {/* <Row className="mb-2 text-white">
        <Col className="py-3">
          <Button variant="success" className="py-3 my-5" type="submit">
            <h3>Pass</h3>
          </Button>
        </Col>
      </Row> */}

      {/* this section I used react flip card sorry I couldn't handle all of it  and it produces infinity loop*/}
      {/* 
      <ReactCardFlip isFlipped={flippedOn} flipDirection="vertical">
        <YOUR_FRONT_CCOMPONENT>
          {game.map((element, index) => (
            <Card onClick={setFlippedOn(!flippedOn)} key={element} className="">
              <Card.Body>
                <Card.Title>{element}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </YOUR_FRONT_CCOMPONENT>

        <YOUR_BACK_COMPONENT>
          {elements.map((element) => (
            <Card onClick={setFlippedOn(!flippedOn)} key={element} className="">
              <Card.Body>
                <Card.Title>{element}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </YOUR_BACK_COMPONENT>
      </ReactCardFlip> */}

      {/* <ReactCardFlip isFlipped={false} >
                    <YOUR_FRONT_CCOMPONENT>
                        
                            <Card className="">
                                <Card.Body>
                                    <Card.Title>hi</Card.Title>
                                </Card.Body>
                            </Card>
                    </YOUR_FRONT_CCOMPONENT>
                    <YOUR_BACK_COMPONENT>
                        <Card >
                            <Card.Body>
                                <Card.Title>remo</Card.Title>
                            </Card.Body>
                        </Card>
                    </YOUR_BACK_COMPONENT>
                </ReactCardFlip> */}
      {/* <ReactCardFlip isFlipped={false} flipDirection="vertical">
        <YOUR_FRONT_CCOMPONENT>
          This is the front of the card.
          <button onClick={document.write("flipped")}>Click to flip</button>
        </YOUR_FRONT_CCOMPONENT>

        <YOUR_BACK_COMPONENT>
          This is the back of the card.
          <button onClick={document.write("opposite")}>Click to flip</button>
        </YOUR_BACK_COMPONENT>
      </ReactCardFlip> */}
    </Container>
  );
}
