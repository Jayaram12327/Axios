import { getAllQoutes, addQuote, updateQuote, deleteQuote } from '../Services/fetchAPI';
import { useEffect, useState } from 'react'
const ComponentA = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        console.log('MOUNTING')
        getQuotesList();
    }, []);

   const getQuotesList = async () => {
        const quotesList = await getAllQoutes();
        console.log(quotesList.quotes)
        setQuotes(quotesList.quotes);
    }

    useEffect(() => {
            console.log('Quotes NOW: ', quotes);
        }, [quotes])


    return(
        <div>
            <h1>APIs using Fetch</h1>
            <div className="quotes-container">
            {quotes.length ? quotes.map((quote, i) => (
                <div key={i}>
                    <p>Quote: {quote.quote}</p>
                    <p>Auther: {quote.author}</p>
                </div>
            )): <div>Loading...</div>}
            </div>
            </div>

    )
}

export default ComponentA;