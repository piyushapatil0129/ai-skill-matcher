<div className="hero">
  <h2>Find Skills That Match Your Dream Job</h2>
  <p>Instantly discover skills tailored to your ideal career path.</p>
  <button className="btn-primary">Get Started</button>
</div>
import './Dashboard.css';
<footer className="footer">
  <p>&copy; 2026 AI Skill Matcher</p>
</footer>
import { getRecommendations } from "../api";

useEffect(() => {
  const fetchRecs = async () => {
    const token = localStorage.getItem("token"); // or wherever you store JWT
    const recs = await getRecommendations(token);
    console.log(recs);
  };
  fetchRecs();
}, []);