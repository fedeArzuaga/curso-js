// Old Method

function appoinment( complete, options ){

    let {paymentMethod, quantity, days} = options;

    console.log( paymentMethod, quantity, days );

}

appoinment(
    true,
    {
        paymentMethod: 'credit card',
        quantity: 2000,
        days: 3
    }
);