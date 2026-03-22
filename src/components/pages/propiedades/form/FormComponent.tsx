"use client"

import { PropertyFormStateDTO } from "@/types/domain/property";
import { TitleDescriptionFields } from "./TitleDescriptionFields";


const FormComponent = ({ property, onChange }: { property: PropertyFormStateDTO, onChange: (property: PropertyFormStateDTO) => void}) => {
  return <form>
      <TitleDescriptionFields
      
      />
     

  </form>;
};

export default FormComponent;
