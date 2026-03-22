import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"

export function TitleDescriptionFields() {
  return (
    <FieldSet className="w-full max-w-xl">
      <FieldGroup>
        <div className="flex flex-col gap-4 w-full">
        <Field>
          <FieldLabel htmlFor="title">Título</FieldLabel>
          <Input id="title" type="text" placeholder="Casa en la playa" />
        </Field>
        <Field>
          <FieldLabel htmlFor="description">Descripción</FieldLabel>
          <Textarea id="description" placeholder="Descripción de la propiedad" />
        </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  )
}
