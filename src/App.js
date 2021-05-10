import "./App.css";
import NavBar from "./components/NavBar";
import FormPets from "./components/FormPets";
import ListPets from "./components/ListPets";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState({});
  const URL = "https://crudcrud.com/api/61f1dca43eef4daf8a6d0d7220940f81/pets";

  const create = async (data) => {
    await axios.post(URL, data);
    getPets();
    setPet({});
    return;
  };

  const destroy = async (id) => {
    let url = URL + "/" + id;
    await axios.delete(url);
    getPets();
    setPet({});
  };

  const getPets = () => {
    axios.get(URL).then((res) => {
      return setPets(res.data);
    });
    return;
  };

  const update = async (data) => {
    let url = URL + "/" + data._id+ "/";
    const headers =  {
        'content-type': "application/json ",
        'Access-Control-Allow-Origin': '*',
    };
    delete data._id
    await axios.put(url, {...data}, headers);
    setPet({});
    getPets();
    return;
  };

  const getPet = async(id) => {
    let url = URL + "/" + id;
    const res = await axios.get(url);
    setPet(res.data);
    return;
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <FormPets create={create} pet={pet} update={update} />
          </div>
          <div className="col-7">
            <ListPets pets={pets} destroy={destroy} getPet={getPet} />
          </div>
        </div>

        <p className="row mx-5"></p>
      </div>
    </div>
  );
}

export default App;
