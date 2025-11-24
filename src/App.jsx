import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RankingNight from "./pages/RankingNight";
import RankingGame from "./pages/RankingGame";
import Weather from "./pages/Weather";
import Board from "./pages/Board";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>홈</Link>
        <Link to="/night" style={{ marginRight: "10px" }}>밤샘 랭킹</Link>
        <Link to="/game" style={{ marginRight: "10px" }}>게임 랭킹</Link>
        <Link to="/weather" style={{ marginRight: "10px" }}>랩실 날씨</Link>
        <Link to="/board">게시판</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>랩실 홈페이지</h1>} />
        <Route path="/night" element={<RankingNight />} />
        <Route path="/game" element={<RankingGame />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}
