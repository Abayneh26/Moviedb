import React from "react";
import styles from "./Footer.module.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const footerLinks = [
  [
    "Audio Description",
    "Investor Relations",
    "Legal Notices",
  ],
  [
    "Help Centre",
    "Jobs",
    "Cookie Preferences",
  ],
  [
    "Gift Cards",
    "Terms of Use",
    "Corporate Information",
  ],
  [
    "Media Centre",
    "Privacy",
    "Contact Us",
  ],
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="/" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="/" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="/" aria-label="Twitter">
            <FaTwitter />
          </a>

          <a href="/" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.linksGrid}>
          {footerLinks.map((column, index) => (
            <div key={index} className={styles.linkColumn}>
              {column.map((link, idx) => (
                <a key={idx} href="/" className={styles.footerLink}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>
          © 1997-2026 Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;