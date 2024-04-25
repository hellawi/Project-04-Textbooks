import styles from '../searchbar/InputSrch.module.css';

function BookList({ books }) {
  return (
    <ul>
      {books.map(({ subject, cover, title, url }) => (
        <li key={subject}>
          <img className={styles.coverSrch} src={cover} alt="" />
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.titleSrch}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
