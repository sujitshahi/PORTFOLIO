import Image from "next/image";

export default function Hero() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <div className="badge">✦ OPEN FOR OPPORTUNITIES</div>

          <h1>
            Sujit Shahi
            <br />
            Full-Stack Developer
          </h1>

          <p>
            Motivated Front-End Developer with a full-stack foundation,
            specializing in responsive interfaces using HTML, CSS, and React.
          </p>

          <button type="button" className="btn-modern">
            View my work →
          </button>
        </div>

        <div className="profile-wrapper">
          <div className="profile-ring">
            <Image
              src="/profile.jpg"
              alt="Sujit Shahi"
              className="profile-pic"
            />
          </div>
        </div>
      </section>
    </div>
  );
}