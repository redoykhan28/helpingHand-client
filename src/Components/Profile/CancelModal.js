import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const CancelModal = ({ deleteOrder, setDeleteOrder, message, refetch }) => {

    //handle Delete
    const handleDelete = (cancelOrder) => {

        fetch(`http://localhost:5000/cancelOrders/${cancelOrder?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => {

                return res.json()
            })
            .then(data => {

                if (data.deletedCount > 0) {

                    console.log(data)
                    refetch()
                    toast.success('order Cancelled')
                    // setDeleteOrder(null)

                }
            })
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <p className="py-4">{message}</p>
                    <div className="modal-action flex justify-center">
                        <label onClick={() => setDeleteOrder(null)} htmlFor="my-modal" className="btn text-white btn-success">No</label>
                        <label onClick={() => handleDelete(deleteOrder)} htmlFor="my-modal" className="btn btn-error text-white">Yes</label>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default CancelModal;