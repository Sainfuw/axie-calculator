import React, { useState } from "react";

export const AxieBoxEnemy = () => {
  const [enemyAxieId, setEnemyAxieId] = useState("");
  const [enemyAxies, setEnemyAxies] = useState({});

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    setEnemyAxieId(value);
  };

  const handleGetAxie = async () => {
    const body = {
      operationName: "GetAxieDetail",
      variables: { axieId: enemyAxieId },
      query:
        "query GetAxieDetail($axieId: ID!) {\n  axie(axieId: $axieId) {\n    ...AxieDetail\n    __typename\n  }\n}\n\nfragment AxieDetail on Axie {\n  id\n  image\n  class\n  chain\n  name\n  genes\n  owner\n  birthDate\n  bodyShape\n  class\n  sireId\n  sireClass\n  matronId\n  matronClass\n  stage\n  title\n  breedCount\n  level\n  figure {\n    atlas\n    model\n    image\n    __typename\n  }\n  parts {\n    ...AxiePart\n    __typename\n  }\n  stats {\n    ...AxieStats\n    __typename\n  }\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  ownerProfile {\n    name\n    __typename\n  }\n  battleInfo {\n    ...AxieBattleInfo\n    __typename\n  }\n  children {\n    id\n    name\n    class\n    image\n    title\n    stage\n    __typename\n  }\n  __typename\n}\n\nfragment AxieBattleInfo on AxieBattleInfo {\n  banned\n  banUntil\n  level\n  __typename\n}\n\nfragment AxiePart on AxiePart {\n  id\n  name\n  class\n  type\n  specialGenes\n  stage\n  abilities {\n    ...AxieCardAbility\n    __typename\n  }\n  __typename\n}\n\nfragment AxieCardAbility on AxieCardAbility {\n  id\n  name\n  attack\n  defense\n  energy\n  description\n  backgroundUrl\n  effectIconUrl\n  __typename\n}\n\nfragment AxieStats on AxieStats {\n  hp\n  speed\n  skill\n  morale\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  startingPrice\n  endingPrice\n  startingTimestamp\n  endingTimestamp\n  duration\n  timeLeft\n  currentPrice\n  currentPriceUSD\n  suggestedPrice\n  seller\n  listingIndex\n  state\n  __typename\n}\n",
    };

    const result = await fetch(
      "https://graphql-gateway.axieinfinity.com/graphql",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const data = await result.json();
    setEnemyAxies({ first: data.data.axie });
    console.log(enemyAxies);
  };

  return (
    <div className="axie-box">
      <div className="axie-info">
        {true && (
          <div className="axie-stats left">
            <div>
              <span className="badge bg-success">Health</span>
              <br />
              <span className="badge-stats health-color">
                {enemyAxies.first && enemyAxies.first.stats.hp}
              </span>
            </div>
            <div>
              <span className="badge bg-warning">Speed</span>
              <br />
              <span className="badge-stats speed-color">{}</span>
            </div>
          </div>
        )}
        <div
          className="axie-type-image"
          style={
            true
              ? {
                  backgroundImage: `url(${
                    enemyAxies.first && enemyAxies.first.image
                  })`,
                  backgroundSize: "70%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }
              : {}
          }
        ></div>
        {true && (
          <div className="axie-stats right">
            <div>
              <span className="badge bg-purple">Skill</span>
              <br />
              <span className="badge-stats skill-color">{}</span>
            </div>
            <div>
              <span className="badge bg-danger">Morale</span>
              <br />
              <span className="badge-stats morale-color">{}</span>
            </div>
          </div>
        )}
      </div>
      <div className="axie-options">
        <button className="btn btn-success mx-2" onClick={handleGetAxie}>
          Find
        </button>
        <input type="text" value={enemyAxieId} onChange={handleInputChange} />
        {/* <Select */}
        {/*   className="enemy-select-axie" */}
        {/*   options={axieSelect} */}
        {/*   placeholder="Please select Axie" */}
        {/*   onChange={handleSelectChange} */}
        {/* /> */}
        <button className="btn btn-warning mx-2">Kill</button>
      </div>
    </div>
  );
};
