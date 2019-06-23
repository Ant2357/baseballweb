const fs = require("fs");
const Npb = require("./npb");

const jsonOutput = (url, data) => {
  fs.writeFile(url, JSON.stringify(data, null, "  "), err => {
    if (err) {
      throw err
    }
  });
};


const jsonPath = ".././vue-develop/src/assets";
const npb = new Npb();
try {
  jsonOutput([jsonPath, "/CL.json"].join(""), npb.standings("CL"));
  jsonOutput([jsonPath, "/PL.json"].join(""), npb.standings("PL"));
  jsonOutput([jsonPath, "/CP.json"].join(""), npb.standings("CP"));
  jsonOutput([jsonPath, "/OP.json"].join(""), npb.standings("OP"));

  const batterTags = ["AVG", "HR", "RBI", "SB", "OBP", "OPS"]
  batterTags.forEach(tag => {
    jsonOutput([jsonPath, "/CL_", tag, ".json"].join(""), npb.playerStandings("CL", false, tag));
    jsonOutput([jsonPath, "/PL_", tag, ".json"].join(""), npb.playerStandings("PL", false, tag));
  });

  const pitcherTags = ["ERA", "WIN", "K9", "H", "S"]
  pitcherTags.forEach(tag => {
    const searchNum = tag === "ERA" || tag == "K9" ? 8 : 10;
    jsonOutput([jsonPath, "/CL_", tag, ".json"].join(""), npb.playerStandings("CL", true, tag, searchNum));
    jsonOutput([jsonPath, "/PL_", tag, ".json"].join(""), npb.playerStandings("PL", true, tag, searchNum));
  });
} catch (error) {
  console.error(error);
}