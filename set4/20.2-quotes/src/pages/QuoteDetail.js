import { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail</h1>
      <p> {params.quoteId} </p>
      <HighlightedQuote text="hi" author="me" />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
