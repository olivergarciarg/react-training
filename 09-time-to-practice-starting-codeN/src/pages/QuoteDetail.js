import { Fragment } from 'react';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learn react'},
  { id: 'q2', author: 'Max2', text: 'Learn react 2'},
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>quote not found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;