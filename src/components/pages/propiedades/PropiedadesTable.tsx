"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import ToggleButton from "@/components/pages/propiedades/ToggleButton";
import { PropertyTable } from "@/types/ui/property";
import { useState } from "react";

export type TogglePropertyKey = "isActive" | "isFeatured";

const initialProperties: PropertyTable[] = [
  {
    id: "id1",
    title: "Casa en la playa",
    isActive: true,
    isFeatured: false,
    interactions: 100,
    visualizations: 150,
    reach: 15,
  },
  {
    id: "id2",
    title: "Casa en la montaña",
    isActive: true,
    isFeatured: true,
    interactions: 100,
    visualizations: 150,
    reach: 15,
  },
  {
    id: "id3",
    title: "Casa en la patagonia",
    isActive: true,
    isFeatured: true,
    interactions: 100,
    visualizations: 150,
    reach: 15,
  },
];

export function PropiedadesTable() {
  
  const [properties, setProperties] =
    useState<PropertyTable[]>(initialProperties);

  const handleToggleProperty = (
    propertyId: string,
    type: TogglePropertyKey,
    value: boolean,
  ) => {
    setProperties((prev) =>
      prev.map((property) =>
        property.id === propertyId
          ? { ...property, [type]: value }
          : property,
      ),
    );
  };

  return (
    <Table>
      <TableCaption>Listado de Propiedades de la Inmobiliaria</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Nombre</TableHead>
          <TableHead className="text-center">Estado</TableHead>
          <TableHead className="text-center">Promocionado</TableHead>
          <TableHead className="text-center">Visualizaciones</TableHead>
          <TableHead className="text-center">Interacciones</TableHead>
          <TableHead className="text-center">Compartido</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {properties.slice(0, 19).map((property) => (
          <TableRow key={property.id}>
            <TableCell className="font-medium">
              {property.title}
            </TableCell>

            <TableCell className="text-center">
              <ToggleButton
                flag={property.isActive}
                type="isActive"
                propertyId={property.id}
                onToggle={handleToggleProperty}
              />
            </TableCell>

            <TableCell className="text-center">
              <ToggleButton
                flag={property.isFeatured}
                type="isFeatured"
                propertyId={property.id}
                onToggle={handleToggleProperty}
              />
            </TableCell>

            <TableCell className="text-center">
              {property.visualizations}
            </TableCell>

            <TableCell className="text-center">
              {property.interactions}
            </TableCell>

            <TableCell className="text-center">
              {property.reach}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
