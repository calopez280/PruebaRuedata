import { Table } from "reactstrap";

const ListPets = ({ pets, destroy, getPet }) => {
  
  return (
    <div>
      <h2 className="text-center mb-4">Lista de Mascotas</h2>

      <Table bordered>
        <thead className="table-dark">
          <tr className="text-center">
            <th>#</th>
            <th>Edad</th>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pets && pets.length > 0
            ? pets.map((pet, i) => (
                <tr key={pet._id} className="text-center">
                  <th scope="row" >{i + 1}</th>
                  <td>{pet.age}</td>
                  <td>{pet.name}</td>
                  <td>{pet.species}</td>
                  <td>
                    <i title="Editar" className="mx-1 far fa-edit pointer text-warning" onClick={()=>getPet(pet._id)}></i>
                    <i title="Borrar" className="mx-1 fas fa-trash pointer text-danger" onClick={()=>destroy(pet._id)}></i>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
};

export default ListPets;
