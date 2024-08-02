export function Video() {
  return (
    <div className="relative hidden h-full overflow-hidden md:flex">
      <video autoPlay loop muted>
        <source src="/video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
