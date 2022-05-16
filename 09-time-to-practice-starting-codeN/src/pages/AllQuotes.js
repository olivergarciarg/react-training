import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learn react'},
  { id: 'q2', author: 'Max2', text: 'Learn react 2'},
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;