// https://fsd-quotes-backend.onrender.com/api/quotes

import axios from 'axios'


export const getAllQoutes = async () => {
    const response = await axios.get('https://reqres.in/api/users/2');
    return response.data;
}

export const addQuote = () => {

}

export const updateQuote = () => {

}

export const deleteQuote = () => {
    
}