import LinkButton from "@/components/other/Navigation/LinkButton";
import { PropiedadesTable } from "./PropiedadesTable";
import { Button } from "@/components/ui/button";

const PropiedadesPageComponent = () => {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
      <Button
        variant="actionButton"
      >
        <LinkButton
          linkTo="/propiedades/agregar"
          text="+ Añadir Nueva Propiedad"
        />{" "}
      </Button>

      </div>

      <PropiedadesTable />
    </div>
  );
};

export default PropiedadesPageComponent;
