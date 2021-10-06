import React from 'react'

// InitalState
import initialState from '../initialState';

// Components
import Products from '../components/Products';

const Home = () => (
    <Products products={initialState.products} />
)

export default Home;
