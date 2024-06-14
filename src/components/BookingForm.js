import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
    const [formData, setFormData] = useState({
        date : "",
        time : "",
        guest : 1,
        occasion : ""
    });

    // const [availableTimes, setAvailableTime] = useState(
    //     ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    // );

    // const onChangeTime = (e) => {
    //     e.preventDefault();
    //     setAvailableTime(
    //         availableTimes.filter(() => {

    //         })
    //     );
    // };

    const onChangeData = (e) => {
        e.preventDefault();
        
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        });

        if (name === "date") {
            dispatch({ type: 'UPDATE_TIMES', payload: { date: value } });
        }
    };

    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>

            <h1>Let's Reserve a Table for You !</h1>
            
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" value={formData.date} onChange={onChangeData} />

            <label htmlFor="res-time" >Choose Time</label>
            <select id="res-time" name="time" value={formData.time} onChange={onChangeData} >
                <option value="" ></option>
                {availableTimes.map((times) => (
                    <option key={times} value={times} >{times}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guest" value={formData.guest} onChange={onChangeData} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={onChangeData} >
                <option value="" ></option>
                <option value="Birthday" >Birthday</option>
                <option value="Anniversary" >Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" />
        
        </form>
    );
};

export default BookingForm;