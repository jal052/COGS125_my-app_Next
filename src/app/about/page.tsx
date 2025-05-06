"use client";
import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

export default function About() {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <Link href="./" >Portfolio</Link>
        <Link href="./about">About</Link>
        <Link href="./contact">Contact</Link>
      </nav>

      <div style={styles.container}>
        <h1 style={styles.heading}>🌸 About Me</h1>
        <Image
          src="/self-portrait.gif"
          alt="Self Portrait"
          style={styles.image}
          width={200}
          height={200}
        />
        <p style={styles.text}>
          Hi! I am <strong>Jasmine Lam</strong> — a creative developer passionate about building
          beautiful, interactive experiences on the web. ✨
        </p>
        <p style={styles.text}>
          I love blending art and code to tell stories, solve problems, and bring ideas to life.
          Whether it is coding, designing, or just doodling cute things, I am always creating!
        </p>
        <p style={styles.text}>
          When I am not coding, you will find me sipping matcha 🍵, collecting cute stationery ✏️, or
          listening to fun beats 🎧.
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
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
    maxWidth: "700px",
    margin: "60px auto",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "20px",
    color: "#ff69b4",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#444",
    marginBottom: "20px",
  },
  image: {
    margin: "0 auto 20px",
    display: "block",
    height: "200px",
  },
};