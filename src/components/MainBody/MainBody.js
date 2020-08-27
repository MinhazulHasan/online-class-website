import React from 'react';
import fakeData from '../../fakeData/fakeData';
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const MainBody = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);

    // Adding selected item to Cart + Removing selected item from Courses
    const addToCart = (selectedItem) => {
        const newCart = [...cart, selectedItem];
        setCart(newCart);

        const remainCourses = courses.filter(eachItem => eachItem.key !== selectedItem.key);
        setCourses(remainCourses);
    }

    // Removing removed item from Cart +  Adding removed item to  Courses
    const removeToCart = (removedItem) => {
        const totalCourse = [...courses, removedItem];
        setCourses(totalCourse);

        const remainCart = cart.filter(eachItem => eachItem.key !== removedItem.key);
        setCart(remainCart);
    }

    // get total price
    const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);

    return (
        <div className="row">

            <div className="col-md-9 row border-right">
                {courses.map(course => <Course course={course} key={course.key} addToCart={addToCart}></Course>)}
            </div>

            <div className="col-md-3">
                <h2 className="text-center">Item Select : {cart.length} </h2>
                <ul className="list-group">
                    {cart.map(item => <Cart item={item} key={item.key} removeToCart={removeToCart}></Cart>)}
                </ul>
                <button className="btn btn-dark btn-block">
                    Total Amount = <span className="badge badge-warning"> $ {totalPrice}</span>
                </button>
            </div>

        </div>
    );
};

export default MainBody;