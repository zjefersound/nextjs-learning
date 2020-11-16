import { NextPage } from "next";
import api from "../../services/api";

interface Props {
  _id: string;
  name: string;
}

const Details: NextPage<Props> = ({ _id, name }) => {
  return (
    <main>
      <h1>Details:</h1>
      <p>Name: {name}</p>
      <p>Id: {_id}</p>
    </main>
  );
}

export default Details;

Details.getInitialProps = async ({ query }) => {
  const { id } = query;
  const category = await api.get<Props>(`/category/${id}`);
  return { ...category.data };
}
