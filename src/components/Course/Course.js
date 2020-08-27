import React from 'react';

const Course = (props) => {
    const { name, sponsor, instructor, url, price } = props.course;
    const addToCart = props.addToCart;
    return (
        <div className="col-md-4 col-sm-6">
            <div className="single-item  my-4">
                <div className="card border-0 p-2">
                    <img className="card-img-top img-fluid" style={{ height: '250px' }} src={url} alt="Not Found" />
                    <div className="card-body" style={{ lineHeight: '0.5rem' }}>
                        <h5 className="card-title"><u>{name}</u></h5>
                        <p className="text-muted">{sponsor}</p>
                        <h6>Instructor : {instructor}</h6>
                        <div className="card-footer bg-transparent d-flex justify-content-between pb-0">
                            <h4 className="price">${price}</h4>
                            <button onClick={() => addToCart(props.course)} className="btn btn-sm btn-danger">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;