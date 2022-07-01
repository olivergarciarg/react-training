import Link from 'next/link';
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>News page</h1>
      <ul>
        <li><Link href='/news/art1'>art 1</Link></li>
        <li><Link href='/news/art2'>art 2</Link></li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;