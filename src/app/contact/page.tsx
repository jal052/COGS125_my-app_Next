"use client";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>Portfolio</Link>
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </nav>

      <div style={styles.container}>
        <h1 style={styles.heading}>💌 Contact Me</h1>
        <p style={styles.subheading}>
          I'd love to hear from you! Let's connect and make something amazing.
        </p>

        <form style={styles.form}>
          <label style={styles.label}>Name</label>
          <input type="text" placeholder="Your name" style={styles.input} />

          <label style={styles.label}>Email</label>
          <input type="email" placeholder="Your email" style={styles.input} />

          <label style={styles.label}>Message</label>
          <textarea placeholder="Your message" style={styles.textarea}></textarea>

          <button type="submit" style={styles.button}>Send Message 💖</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#fffafc",
    minHeight: "100vh",
    fontFamily: "'Comic Sans MS', 'Comic Neue', cursive",
  },
  nav: {
    position: "sticky",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#ffe4ec",
    zIndex: 1000,
  },
  link: {
    color: "#ff69b4",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "60px 20px",
    maxWidth: "700px",
    margin: "40px auto",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
    color: "#ff69b4",
  },
  subheading: {
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "40px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  label: {
    fontWeight: "600",
    fontSize: "1rem",
    color: "#444",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "120px",
  },
  button: {
    padding: "14px",
    fontSize: "1rem",
    backgroundColor: "#ff69b4",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};