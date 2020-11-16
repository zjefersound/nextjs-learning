import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.4rem;

  > * {
    justify-self: center;
    align-self: center;
  }
`;

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3.2rem var(--color-shadow);
  border-radius: var(--border);
  padding: 2.4rem;
`;
