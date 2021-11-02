import { useGetBookQuery } from '../../services';

import './Book.scss';

const FRANKENSTEIN_BOOK_ID = 'WbNDDwAAQBAJ';

const Book = (): JSX.Element => {
  const { data, error, isLoading } = useGetBookQuery(FRANKENSTEIN_BOOK_ID);

  return (
    <div className="book">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.title}</h3>
          <img alt={data.title} className="book__img" src={data.image} />
          <p
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
          ></p>
          <a href={data.link} rel="noreferrer" target="_blank">
            Preview
          </a>
        </>
      ) : null}
    </div>
  );
};

export default Book;
