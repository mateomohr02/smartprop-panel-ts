"use client";

// Hooks
import { JSX, useEffect, useState } from "react";

// Types
import { PropertyForm } from "@/types/ui/property/property.form";

// Creator
import { createNewPropertyInitialStateForm } from "@/lib/property/property.creators";

// Utils


//Components
import FormComponent from "../form/FormComponent";

const AddPropertyPageComponent = (property: PropertyForm) : JSX.Element => {
  const [formState, setFormState] = useState<PropertyForm>(() =>
  property
    ? createNewPropertyInitialStateForm()
    : createNewPropertyInitialStateForm()
);


  return (
    <div>
      <FormComponent property={formState} onChange={setFormState} />
    </div>
  );
};

export default AddPropertyPageComponent;
