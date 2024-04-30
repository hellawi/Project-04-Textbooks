import styles from '../searchbar/InputSrch.module.css';

function BookList({ books }) {
  return (
    <ul>
      {books.map(({ subject, cover, title, url, description }) => (
        <li key={subject} className={styles.ulBook}>
          <p className={styles.pSubject}>{subject}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.titleSrch}
          >
            {title}
          </a>
          <img className={styles.coverSrch} src={cover} alt="" />
          <li className={styles.descrRight}>
            <p className={styles.titleSrch}>{description}</p>
          </li>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
