import Order from "../EmployeePanel/components/Orders/Order";

const OrderExample = (props) => {
    // const emptyFunction2 = id => {
    //     console.log(`Order ${id} has been clicked`);
    // }
    
    var emptyFunction = function(id) {
        console.log(`Order ${id} has been clicked`);
    }

    return (
        <>
            <Order id={props.id}
            name={'Zamówienie '+props.id}
            delivery='Przesylka DHL'
            status='Wysłana'
            cost={312 * props.id}
            onSetEditOrderId = {emptyFunction}/>
        </>
    );
}

export default OrderExample