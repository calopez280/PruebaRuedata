import { Button, FormGroup, Label, Card } from "reactstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const FormPets = ({ create, pet, update }) => {
  const { register, handleSubmit, reset } = useForm();

  async function onCreate(data) {
    await create(data);
    reset();
  }

  async function onUpdate(data) {
    let new_data = {
      _id: pet._id,
      age: data.age?.length > 0 ? data.age : pet.age,
      name: data.name?.length > 0 ? data.name : pet.name,
      species: data.species?.length > 0 ? data.species : pet.species,
    };
    await update(new_data);
    reset();
  }
  
  function onSubmit(data) {
    const new_data = data;
    if (pet._id) {
      return onUpdate(new_data);
    } else {
      return onCreate(new_data);
    }
  }

  return (
    <Card className="p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="my-4 text-center">Formulario de Mascotas</h2>
        <FormGroup className="mt-3">
          <Label>Edad</Label>
          <input
            defaultValue={pet.age ? pet.age : ""}
            className="form-control"
            type="number"
            name="age"
            placeholder="Edad de la mascota"
            {...register("age")}
          ></input>
        </FormGroup>
        <FormGroup className="mt-3">
          <Label>Nombre</Label>

          <input
            defaultValue={pet.name ? pet.name : ""}
            className="form-control"
            type="text"
            name="name"
            placeholder="Nombre de la mascota"
            {...register("name")}
          ></input>
        </FormGroup>
        <FormGroup className="mt-3">
          <Label>Especie</Label>
          <input
            defaultValue={pet.species ? pet.species : ""}
            className="form-control"
            type="text"
            name="species"
            placeholder="Especie de la mascota"
            {...register("species")}
          ></input>
        </FormGroup>
        <div className="text-center mt-3">
          <Button type="submit">{pet._id ? "Editar" : "Agregar"}</Button>
        </div>
      </form>
    </Card>
  );
};

export default FormPets;
