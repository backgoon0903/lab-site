export default function RankingGame() {
  const gameData = [
    { name: "윤호", score: 200 },
    { name: "정우", score: 150 },
    { name: "민주", score: 120 }
  ].sort((a, b) => b.score - a.score);

  return (
    <div>
      <h2>게임 점수 랭킹</h2>
      <ul>
        {gameData.map((p, i) => (
          <li key={i}>
            {i + 1}위 — {p.name} : {p.score}점
          </li>
        ))}
      </ul>
    </div>
  );
}
