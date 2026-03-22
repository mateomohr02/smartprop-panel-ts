import { Button } from "../../ui/button";
import LinkButton from "./LinkButton";
import { ThemeButton } from "./ThemeButton";

const AppSideBar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-60 bg-custom-primary text-color-custom-contrast flex flex-col justify-between">
      <div>
        <Button variant="sidebar" size="sidebar">
          <LinkButton linkTo="/panel" text="Inicio" />
        </Button>
        <Button variant="sidebar" size="sidebar">
          <LinkButton linkTo="/propiedades" text="Propiedades" />
        </Button>
        <Button variant="sidebar" size="sidebar">
          <LinkButton linkTo="/metricas" text="Métricas" />
        </Button>
        <Button variant="sidebar" size="sidebar">
          <LinkButton linkTo="/consultas" text="Consultas" />
        </Button>
        <Button variant="sidebar" size="sidebar">
          <LinkButton linkTo="/usuarios" text="Usuarios" />
        </Button>
        <Button variant="sidebar" size="sidebar">
          <LinkButton linkTo="/facturacion" text="Facturación" />
        </Button>
        <Button variant="sidebar" size="sidebar">
          Cerrar Sesión
        </Button>
      </div>
      <div className="w-full flex items-center justify-start p-2">
        <ThemeButton />
      </div>
    </div>
  );
};

export default AppSideBar;
