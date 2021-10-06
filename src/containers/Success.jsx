import React, { useContext } from 'react'

// Styles
import '../styles/components/Success.css';

// Contexts
import AppContext from '../context/AppContext';

// CustomHooks
import useGoogleAddres from '../hooks/useGoogleAddres';

// Components
import Map from '../components/Map';

const Success = () => {

    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = useGoogleAddres(buyer[0].address);

    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer.name} Gracias por tu compra`}</h2>
                <span>Tu pedido llegara en 3 dias a tu dirección:</span>
                <div className="Success-map">
                    <Map data={location}/>
                </div>
            </div>
        </div>
    );
}

export default Success;