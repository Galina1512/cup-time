import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [orderDelails, setOrderDetails] = useState({
        name: "",
        phone: "",
        address: "",
        payment: "cash",
    });

    console.log(orderDelails);

    const updateOrderDetails = (field, value) => {
        setOrderDetails((prevDetails) => ({
            ...prevDetails,
            [field]: value,
        }));
    };

    const clearOrderDetails = () => {
        setOrderDetails({
            name: "",
            phone: "",
            address: "",
            payment: "cash",
            });
    };

    return (
    <OrderContext.Provider 
        value={{orderDelails, updateOrderDetails, clearOrderDetails}}>
        {children}
    </OrderContext.Provider>)
}


export const useOrder = () => useContext(OrderContext);
