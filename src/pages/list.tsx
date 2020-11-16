import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import api from "../services/api";

export interface Category {
  _id: string;
  name: string;
}

interface Props {
  categories?: Category[];
}

const List: NextPage<Props> = ({ categories }) => {
  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <main>
        {categories?.map(i => (
          <Link as={`details/${i._id}`} href='details/[id]' >
            <button>
              Go to {i.name} detail
            </button>
          </Link>
        ))}
      </main>
    </>
  );
}

export default List;

List.getInitialProps = async () => {
  const categories = await api.get<Category[]>('/category');

  return { categories: categories.data }
};
