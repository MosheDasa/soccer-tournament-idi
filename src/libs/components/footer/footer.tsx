import React, { useState } from "react";
import "./footer.css";

function Footer() {
  const [linkToOpen, setLinkToOpen] = useState<string>();

  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <p>&copy; 2022 Barhon Moshe Dasa</p>
      </div>
    </footer>
  );
}

export default Footer;
