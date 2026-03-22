import AvatarComponent from "./AvatarComponent";

const NavBar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-2">
      <span>Hola, $Nombre!</span>
      <AvatarComponent/>
    </nav>
  );
};

export default NavBar;
