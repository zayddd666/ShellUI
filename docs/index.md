---
layout: home
hero:
  name: Mittens
  text: UI Framework
  tagline: A clean custom UI framework for Roblox.
  image:
    src: /logo.png
    alt: Mittens Logo
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
---

<style>
/* --- HOMEPAGE LAYOUT --- */
@media (min-width: 960px) {
  /* Keeps Text on the LEFT and Image on the RIGHT */
  .VPHero .container {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
  }
  
  .VPHero .main {
    flex: 1 !important;
    text-align: left !important;
    padding-right: 40px !important;
  }

  .VPHero .image {
    flex: 1 !important;
    display: flex !important;
    justify-content: center !important;
  }
}

/* --- MAXIMUM PURPLE GLOW EFFECT --- */
.VPHero .image {
  position: relative;
}

/* Cranked up the sizing, density, and opacity for a massive radiation effect */
.VPHero .image::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;  /* Blown up size */
  height: 500px;
  background: radial-gradient(
    circle, 
    rgba(192, 132, 252, 0.85) 0%,   /* Neon purple ultra-bright core */
    rgba(147, 51, 234, 0.4) 40%,    /* Rich purple mid-radiation */
    rgba(107, 33, 168, 0.1) 65%,    /* Deep violet fade */
    rgba(0, 0, 0, 0) 80%            /* Final edge blend */
  );
  filter: blur(45px);               /* Balanced heavy blurring */
  z-index: -1;
  pointer-events: none;
}

/* Optional: Injects a secondary sharp drop-shadow directly onto your PNG file */
.VPHero .image-src {
  max-height: 360px !important;
  max-width: 360px !important;
  width: 100% !important;
  height: auto !important;
  z-index: 2;
  filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.4)); 
}
</style>