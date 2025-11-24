export default function RankingNight() {
  const nightData = [
    { name: "민주", hour: 8 },
    { name: "지현", hour: 5 },
    { name: "도윤", hour: 6 },
    { name: "정우", hour: 4 }
  ].sort((a, b) => b.hour - a.hour);

  return (
    <div>
      <h2>밤샘 랭킹</h2>
      <ul>
        {nightData.map((p, i) => (
          <li key={i}>
            {i + 1}위 — {p.name} : {p.hour}시간
          </li>
        ))}
      </ul>
    </div>
  );
}
