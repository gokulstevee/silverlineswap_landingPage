import React, { useState } from "react";
import Wallets from "./Wallets";

function Nav() {
  const [wallet, setWallet] = useState(false);

  function walletVisible() {
    setWallet(!wallet);
  }

  return (
    <div className="navbar">
      <div className="nav_img">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="silver_img"
        />
        <img
          src="data:image/png;base64,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"
          alt=""
          className="silver_img"
        />
      </div>
      <ul className="nav_links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li className="underline_white">
          <a href="#">Whitepaper</a>
        </li>
        <li className="underline_white">
          <a href="#">Audit Report</a>
        </li>
        <li>
          <a href="#">Tockenomics</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          {wallet ? (
            <button
              className="disconnect"
              onClick={() => {
                walletVisible();
              }}
            >
              Disconnect
            </button>
          ) : (
            <button
              onClick={() => {
                walletVisible();
              }}
            >
              Connect
            </button>
          )}
        </li>
      </ul>
      {wallet && <Wallets />}
    </div>
  );
}

export default Nav;
