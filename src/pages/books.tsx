import { NextPage } from "next";
import Head from "next/head";
import api from "../services/api";

import { Container, BookContainer } from '../styles/pages/books';
import { Category } from "./list";

export interface Book {
  _id: string;
  name: string;
  description: string;
  price: number;
  sold: number;
  category: Category;
}

interface Props {
  books: Book[];
}

const Books: NextPage<Props> = ({ books }) => {
  return (
    <>
      <Head>
        <title>Livros</title>
      </Head>
      <main>
        <h1>Todos os livros</h1>
        <Container>
          {books?.map(item => (
            <BookContainer key={item._id}>
              <span>{item.name}</span>
              <span>{item.description}</span>
            </BookContainer>
          ))}
        </Container>
      </main>
    </>
  );
}

export default Books;

Books.getInitialProps = async () => {
  const books = await api.get('/products');
  return { books: books.data };
}
