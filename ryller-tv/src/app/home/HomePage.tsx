

export default function HomePage() {
  return (
    <div className="relative bg-black">
      <img
        src='../../../../img/background.png'
        alt='backgroundImage'
        className="w-full h-full object-cover"
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/10 to-black" />
      <div className="relative"></div>
    </div>
  );
}
