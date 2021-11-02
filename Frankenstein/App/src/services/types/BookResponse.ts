export default interface BookResponse {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    previewLink: string;
  };
}
