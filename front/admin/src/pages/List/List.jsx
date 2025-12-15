import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './List.css';

const List = ({ url }) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const fetchList = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Error fetching data");
            }
        } catch (error) {
            console.error("Error fetching list:", error);
            toast.error("Error fetching data");
        } finally {
            setLoading(false);
        }
    };

    const removeFood = async (foodId) => {
        if (!window.confirm("Are you sure you want to delete this item?")) {
            return;
        }
        
        try {
            const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
            
            if (response.data.success) {
                toast.success(response.data.message);
                await fetchList();
            } else {
                toast.error("Error");
            }
        } catch (error) {
            console.error("Error removing food:", error);
            toast.error("Error removing item");
        }
    }

    useEffect(() => {
        fetchList();
    }, [url]); // Ajouter url comme dépendance

    return (
        <div className='list add flex-col'>
            <p>All Foods List</p>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='list-table'>
                    <div className='list-table-format title'>
                        <b>Image</b>
                        <b>Name</b>
                        <b>Category</b>
                        <b>Price</b>
                        <b>Action</b>
                    </div>
                    {list.map((item) => (
                        <div key={item._id} className='list-table-format'>
                            <img src={`${url}/images/${item.image}`} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={() => removeFood(item._id)} className='cursor'>
                                X
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default List;