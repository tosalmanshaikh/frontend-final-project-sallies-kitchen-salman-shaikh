import React from 'react';
import { useForm } from 'react-hook-form';
import SubTitle from "../SubTitle/SubTitle";
import {Link} from "react-router-dom";


function Payment() {
    const { register, formState: { errors }, handleSubmit, watch } = useForm({
        mode: 'onChange',
    });

    const selectedFrequency = watch('delivery-frequency');

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <SubTitle>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="firstname-field">First name:</label>
            <input
                type="text"
                id="firstname-field"
                {...register("firstname", {
                    required: "firstname is compulsory",
                })}
            />
            {errors.firstname && <p>{errors.firstname.message}</p>}

            <label htmlFor="lastname-field">Last name:</label>
            <input
                type="text"
                id="lastname-field"
                {...register("lastname", {
                    required: "Lastname is compulsory",
                })}
            />
            {errors.lastname && <p>{errors.lastname.message}</p>}


            <label htmlFor="street-field">Street name:</label>
            <input
                type="text"
                id="street-field"
                {...register("street", {
                    required: "Street name is compulsory",
                })}
            />
            {errors.streetname && <p>{errors.streetname.message}</p>}


            <label htmlFor="zipcode-field">Phone:</label>
            <input
                type="text"
                {...register("phone", {
                    required: "Phone is compulsory",

                })}
            />
            {errors.phone && <p>{errors.phone.message}</p>}



            <label htmlFor="zipcode-field">Postcode:</label>
            <input
                type="text"
                {...register("zipcode", {
                    required: "Postcode is verplicht",
                    pattern: {
                        value: /^[0-9]{4}[a-zA-Z]{2}$/,
                        message: "Ongeldige postcode",
                    }
                })}
            />
            {errors.zipcode && <p>{errors.zipcode.message}</p>}

            <label htmlFor="frequency-field">Payment method:</label>
            <select {...register("delivery-frequency")}>
                <option value="week">ideal</option>
                <option value="two-week">credit card</option>
                <option value="month"> pay pal</option>
            </select>
            {selectedFrequency === "other" &&
            <>
                <label htmlFor="other-field">Specificeer:</label>
                <input
                    type="text"
                    id="other-field"
                    {...register("other")}
                />
            </>
            }
            <label htmlFor="comments-field">Message:</label>
            <textarea {...register("comments")} id="comments-field" cols="30" rows="10"></textarea>

            <label htmlFor="terms-and-conditions-field">
                <input
                    type="checkbox"
                    id="terms-and-conditions-field"
                    {...register("terms-and-conditions")}
                />
                I agree to the terms and conditions
            </label>

            <div className="payment"><Link to="/">Place your order </Link></div>


        </form>
        </SubTitle>
    );
}

export default Payment;

