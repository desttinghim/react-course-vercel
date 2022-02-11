import QuoteForm from "../components/quotes/QuoteForm"

const QuoteAdd = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  );
};

export default QuoteAdd;
