import { MdSearch } from "react-icons/md";

const Search = (placeholder) => {
  return (
    <div className={style.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input}/>
    </div>
  );
};
export default Search;
