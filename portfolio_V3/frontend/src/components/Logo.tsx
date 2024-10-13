import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="assets/bilder/logo.png" className="logo" alt="logo" />
    </Link>
  );
}
