
const team = require("./src/class/team");
const match = require("./src/class/matchResult");
const goal = require("./src/class/goals");
const math = require("./src/rubbish/mathOverride");
const fs = require('fs');
const readline = require('readline');
let allTeams = {};

const rl = readline.createInterface({
  input: fs.createReadStream('SP1_database.csv'),
  crlfDelay: Infinity
});

//0     1       2           3       4      5 
//div, date, localTeam, AwayTeam, goalL, goalA
rl.on('line', (line) => {
    let lineParsed = line.split(","),
        appendInAFile = (lineParsed, text) => {
            fs.appendFile(`${lineParsed}.csv`, text, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        },
        writeInAFile = (lineParsed, text) => {
            fs.writeFile(`${lineParsed}.csv`, `cabeceiras: ${text}`, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            }); 
        };
    if(lineParsed[0] == "Div") {
        writeInAFile(lineParsed[0], "moitas");
    } else {
        lineParsed[4] = parseInt(lineParsed[4]);
        lineParsed[5] = parseInt(lineParsed[5]);
        if (allTeams[lineParsed[2]] == undefined) {
            allTeams[lineParsed[2]] = new team.Team(
                                        lineParsed[2],//name
                                        lineParsed[0],//division
                                        new match.MatchResult(
                                            math.myMath.whoIsBigger(lineParsed[4], lineParsed[5]), //local result
                                            0 //away result (there are not)
                                        ),
                                        new goal.Goal(
                                            [
                                                lineParsed[4], //local goals
                                                -lineParsed[5]  //away goals
                                            ],
                                            0
                                        )
                                    );
        } else {
            allTeams[lineParsed[2]].setPropertiesLocal(
                math.myMath.whoIsBigger(lineParsed[4], lineParsed[5]), //local result
                [
                    lineParsed[4], //local goals
                    -lineParsed[5]  //local -goals
                ]
            );
        }
        if (allTeams[lineParsed[3]] == undefined) {
            allTeams[lineParsed[3]] = new team.Team(
                                        lineParsed[3],//name
                                        lineParsed[0],//division
                                        new match.MatchResult(
                                            0, //local result (there are not)
                                            math.myMath.whoIsBigger(lineParsed[5], lineParsed[4]) //away result
                                        ),
                                        new goal.Goal(
                                            0,
                                            [
                                                lineParsed[5], //away goals
                                                -lineParsed[4]  //away - goals
                                            ]
                                        )
                                    );
        } else {
            allTeams[lineParsed[3]].setPropertiesAway(
                math.myMath.whoIsBigger(lineParsed[5], lineParsed[4]), //away result
                [
                    lineParsed[4], //away goals
                    -lineParsed[5]  //away - goals
                ]
            );
        }
        appendInAFile(lineParsed[0], 
                //Division         Date             LocalTeam           AwayTeam      localGoals        AwayGoals           winnings/tieds/loses   local                    winnings/tieds/loses aways                              winingStreak/tied local                        winingStreak/tied away                                             localgoals/-goals                             Away goals/-goals
                `${lineParsed[0]},${lineParsed[1]},${lineParsed[2]},${lineParsed[3]},${lineParsed[4]},${lineParsed[5]},${allTeams[lineParsed[2]].match.toStringLocal},${allTeams[lineParsed[3]].match.toStringAway},${allTeams[lineParsed[2]].match.toStringLocalStreak},${allTeams[lineParsed[3]].match.toStringAwayStreak},${allTeams[lineParsed[2]].goal.toStringLocalTotal},${allTeams[lineParsed[3]].goal.toStringAwayTotal},${allTeams[lineParsed[2]].goal.toStringLocalAverage},${allTeams[lineParsed[3]].goal.toStringAwayAverage};\n`
        );
    }
});
