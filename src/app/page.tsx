"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>Portfolio</Link>
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </nav>

      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to Jasmine Lam's Portfolio</h1>
      </div>

      <div style={styles.mainprojects}>
        <h2 style={styles.projectsHeading}>Projects</h2>

        {/* Language Study App Card */}
        <div style={styles.card}>
          <img src="homescreen.png" alt="Language Study App" style={styles.cardImage} />
          <h3 style={styles.cardTitle}>Language Study App</h3>
          <p style={styles.cardDescription}>An app to study languages with flashcards and virtual calls.</p>
          <Link href="">
            <button style={styles.button}>View Case Study</button>
          </Link>
        </div>

        {/* Sleepy Hollow Project Card */}
        <div style={styles.card}>
          <img src="sleepyhollow.png" alt="Sleepy Hollow" style={styles.cardImage} />
          <h3 style={styles.cardTitle}>Sleepy Hollow</h3>
          <p style={styles.cardDescription}>A website for children to keep track of their sleep.</p>
          <Link href="">
            <button style={styles.button}>View Case Study</button>
          </Link>
        </div>

        {/* Another Project Card */}
        <div style={styles.card}>
          <img src="mentalhealthapp.png" alt="Another Project" style={styles.cardImage} />
          <h3 style={styles.cardTitle}>Mental Health App</h3>
          <p style={styles.cardDescription}>An app that focuses on mental health.</p>
          <Link href="">
            <button style={styles.button}>View Case Study</button>
          </Link>
        </div>

      </div>

            {/* Footer Section */}
            <footer style={styles.footer}>
        <div style={styles.footerLeft}>
          <p style={styles.footerText}>Jasmine Lam</p>
          <p style={styles.footerText}>Email: jasmine@example.com</p>
        </div>
        <div style={styles.footerRight}>
          <p style={styles.footerText}>© 2025 Jasmine Lam | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#fff0f6", // Light pink background
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    padding: "20px",
    color: "#333",
  },
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f7c8d6", // Light pink background for the navbar
    zIndex: 1000,
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#fff",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "40px",
    marginTop: "60px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ff4d91", // Pink color for the heading
  },
  mainprojects: {
    marginTop: "40px",
    textAlign: "center",
  },
  projectsHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ff4d91", // Pink color for projects heading
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#fff", // White background for the card
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px", // Rounded corners for the card
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardImage: {
    width: "100%",
    borderRadius: "8px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#ff4d91", // Pink color for the project title
    fontWeight: "bold",
    marginTop: "15px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#ff4d91", // Pink button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  imageContainer: {
    marginTop: "20px",
  },
  additionalImage: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "10px",
    display: "block",
    margin: "0 auto",
  },
   // Footer Styles
   footer: {
    display: "flex",
    justifyContent: "space-between",  // Ensures items are on opposite sides
    alignItems: "center",
    backgroundColor: "#ff4d91", // Pink background for the footer
    padding: "20px",
    marginTop: "auto",          // Ensures the footer always sticks to the bottom
    width: "100%",
  },
  footerLeft: {
    display: "flex",
    flexDirection: "column",   // Aligns name and email vertically
    alignItems: "flex-start",  // Aligns items to the left
  },
  footerRight: {
    display: "flex",
    alignItems: "center",      // Center aligns the text
  },
  footerText: {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};