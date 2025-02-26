import Logo from "../../assets/LogoBe.png";

export function Header() {
  return (
    <header className="flex items-center h-[3.75rem] bg-[white] shadow-3xl mb-[1.5rem] lg:mb-[2rem]">
      <div className="max-w-[60rem] w-full m-auto px-[1.25rem] lg:px-[2rem]">
        <img src={Logo} alt="Logo - Header" />
      </div>
    </header>
  );
}
