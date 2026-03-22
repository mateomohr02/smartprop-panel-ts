import { PropertyForm } from "@/types/ui/property/property.form";

export const createNewPropertyInitialStateForm = (): PropertyForm => {
  return {
    status: "draft",
    title: "",
    description: "",
    propertyType: "",
    price: 0,
    priceFIAT: "ARS",
    expenses: 0,
    expensesFIAT: "ARS",
    operation: "sale",
    financing: "",
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    garages: 0,
    surface: {
      covered: 0,
      total: 0,
    },
    services: {
      light: false,
      water: false,
      gas: false,
    },
    condition: "new",
    age: 0,
    availabilityType: "inmediate",
    availabilityDate: new Date(),
    address: "",
    mapLocation: {
      lat: 0,
      lng: 0,
    },
    country: "",
    province: "",
    city: "",
    neighborhood: "",
    multimedia: {
      images: [],
      videos: [],
    },
  };
};
