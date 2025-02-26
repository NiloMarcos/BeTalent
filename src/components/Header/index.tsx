import Logo from "../../assets/LogoBe.png";

export function Header() {
  return (
    <header className="flex items-center h-[3.75rem] bg-[white] shadow-3xl mb-[24px] lg:mb-[32px]">
      <div className="max-w-[960px] w-full m-auto px-[20px] lg:px-[32px]">
        <img src={Logo} alt="Logo - Header" />
      </div>
    </header>
  );
}
