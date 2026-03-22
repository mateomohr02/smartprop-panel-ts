import ConsultsSummary from "./ConsultsSummary"
import Counter from "./Counter"
import { VisitsChart } from "./VisitsChart"


const InicioPageComponent = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <Counter quantity={10} label="Propiedades Activas" />
          <Counter quantity={125} label="Visitas en la última semana" />
          <Counter quantity={5} label="Consultas Recibidas" />
        </div>
        <div className="flex gap-4 justify-between ">
        <VisitsChart />
        <ConsultsSummary />
        </div>
    </div>
  )
}

export default InicioPageComponent