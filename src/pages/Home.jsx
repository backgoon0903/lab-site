export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <header>
        <div className="logo">
          <a href="/">AXT <span>PLAYGROUND</span></a>
        </div>
        <nav>
          <ul>
            <li><a href="/night">🌙 밤샘인증</a></li>
            <li><a href="/weather">🌡️ 랩실상황</a></li>
            <li><a href="/display">📺 전광판신청</a></li>
            <li><a href="/arcade">🎮 오락실랭킹</a></li>
            <li><a href="/bot">👂 봇의기록</a></li>
          </ul>
        </nav>
        <div className="auth-nav">
          <a href="/login" className="btn-login">로그인</a>
        </div>
      </header>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-content">
          🤖 AXT-Bot's Echo: "방금 랩실에서 교수님 성대모사 능력자 발견! ㅋㅋ" &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
          📢 "새벽 3시에 야식으로 치킨 시키신 분... 냄새가 너무 좋아요..." &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          💡 "누군가 '코딩 천재가 되고 싶다'고 외쳤습니다. 화이팅!"
        </div>
      </div>

      {/* MAIN */}
      <main>
        <div className="page-title">
          <h1>오늘도 AXT 랩실은 <span style={{ color: "var(--orange-fire)" }}>ON!</span> 🔥</h1>
          <p>오프라인 랩실의 열기를 이곳에서 실시간으로 느껴보세요.</p>
        </div>

        <div className="dashboard-grid">
          {/* CARD 1 */}
          <div className="card" style={{ borderColor: "var(--yellow-light)", position: "relative" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "20px" }}>
              🌡️ 실시간 랩실 상황 
              <span className="badge" style={{ background: "var(--yellow-light)", color: "#999000", position: "absolute", top: "20px", right: "20px" }}>Live</span>
            </h2>
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "25px" }}>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.8rem", fontWeight: 800, display: "block" }}>24°C</span>
                <span style={{ fontSize: "0.9rem", color: "#777" }}>온도 (쾌적)</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.8rem", fontWeight: 800, display: "block" }}>45%</span>
                <span style={{ fontSize: "0.9rem", color: "#777" }}>습도 (뽀송)</span>
              </div>
            </div>
            <p style={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
              현재 자리 현황 (총 3명 열일 중!)
            </p>

            <div className="seat-map-mini">
              <div className="seat" style={{ background: "var(--orange-fire)", boxShadow: "0 0 10px var(--orange-fire)" }}>🔥</div>
              <div className="seat">🪑</div>
              <div className="seat" style={{ background: "var(--orange-fire)", boxShadow: "0 0 10px var(--orange-fire)" }}>🔥</div>
              <div className="seat">🪑</div>
              <div className="seat" style={{ background: "var(--orange-fire)", boxShadow: "0 0 10px var(--orange-fire)" }}>🔥</div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card" style={{ borderColor: "var(--pink-light)", position: "relative" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "20px" }}>
              🌙 오늘 밤 우리들의 열정 
              <span className="badge" style={{ background: "var(--pink-light)", color: "var(--pink)", position: "absolute", top: "20px", right: "20px" }}>Sensor Data</span>
            </h2>
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <p style={{ fontSize: "1rem", color: "#666", marginBottom: "10px" }}>오늘 밤 누적 밤샘 시간 (센서 합산)</p>
              <div style={{ height: "25px", background: "#EEE", borderRadius: "20px", overflow: "hidden", position: "relative" }}>
                <div style={{ height: "100%", width: "65%", background: "linear-gradient(to right, var(--pink), #FF6B81)", borderRadius: "20px" }}></div>
              </div>
              <p style={{ marginTop: "10px", fontWeight: "bold", color: "var(--pink)" }}>현재 총 32시간 째 불타는 중! 🔥</p>
            </div>
            <a href="/night" className="btn btn-pink" style={{ display: "block", textAlign: "center", marginTop: "20px", textDecoration: "none" }}>
              📸 인증샷 올리러 가기
            </a>
          </div>

          {/* CARD 3 */}
          <div className="card" style={{ borderColor: "var(--purple-light)", background: "linear-gradient(135deg, white, var(--purple-light))" }}>
            <h2>🎮 금주의 오락실 챔피언</h2>
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <div style={{ fontSize: "2rem", marginBottom: "5px" }}>👑</div>
              <div style={{ width: "80px", height: "80px", background: "#DDD", borderRadius: "50%", margin: "0 auto 10px", border: "4px solid var(--purple)", backgroundImage: "url('https://i.pravatar.cc/150?img=53')", backgroundSize: "cover" }}></div>
              <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>픽셀마스터_킴</div>
              <p style={{ color: "#666" }}>Tetris Pro</p>
              <div style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "1.2rem", color: "var(--purple)", marginTop: "15px" }}>SCORE: 98,500</div>
            </div>
            <a href="/arcade" style={{ display: "block", textAlign: "center", color: "var(--purple)", fontWeight: "bold", marginTop: "15px", textDecoration: "none" }}>
              도전하시겠습니까? (랭킹 보기)
            </a>
          </div>
        </div>
      </main>

      <footer>
        Made to cultivate a vibrant culture of Art & Technology. <br /> AXT PLAYGROUND © 2025
      </footer>
    </div>
  );
}
