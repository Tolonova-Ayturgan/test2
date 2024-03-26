import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://postive.tata.kg/api/v1/products/categories');
                setCategories(response.data);
            } catch (error) {
                setError(error); 
            } finally {
                setLoading(false); 
            }
        };

        fetchData(); 

    }, []);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
