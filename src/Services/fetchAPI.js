export const getAllQoutes = async () => {
    const response = await fetch('https://fsd-quotes-backend.onrender.com/api/quotes');
    const data = await response.json();
    return data;
}

export const addQuote = () => {

}

export const updateQuote = () => {

}

export const deleteQuote = () => {
    
}