export function Video() {
  return (
    <div className="relative hidden h-full overflow-hidden md:flex">
      <iframe
        style={{
          width: "100%",
          height: "1000px",
        }}
        src="https://www.youtube.com/embed/Q4vhVNA_iso?si=uh1hBoBh1d5vTqhG&controls=0&autoplay=1&mute=1&loop=1&playlist=Q4vhVNA_iso&hd=1"
        title="YouTube video player"
        allowFullScreen={false}
      ></iframe>
    </div>
  );
}
