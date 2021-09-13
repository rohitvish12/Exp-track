import axios from 'axios';

const url = 'http://localhost:5000';
export const AddTransaction = async (expenseData)=>{
    try{
        
        return await axios.post(`${url}/`,expenseData);
    }catch (error){
        console.log('error while calling api')

    }

};

export const getTransactions = async () => {
    try {
        return await axios.get(`${url}/transaction`);
    } catch (error) {
        console.log('error while calling get transaction api')
    }
};