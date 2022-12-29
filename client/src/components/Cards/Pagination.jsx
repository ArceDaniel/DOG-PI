import style from "./index.module.css";

export default function Pagination({
  dogsPerPage,
  currentPage,
  allDogs,
  paginado,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (currentPage > pageNumbers.length) paginado(1);

  return (
    <ul className={style.paginated}>
      {pageNumbers?.map((number) => (
        <li
          className={currentPage === number ? style.active : ""}
          key={number}
          onClick={() => paginado(number)}
        >
          <p>{number}</p>
        </li>
      ))}
    </ul>
  );
}
