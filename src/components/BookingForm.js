import { useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    VStack,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInput,
    Button,
    FormErrorMessage
} from "@chakra-ui/react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guest: 1,
        occasion: ""
    });

    const onChangeData = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        // formik.setFieldValue(name, value);
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "date") {
            dispatch({ type: 'UPDATE_TIMES', payload: { date: value } });
        }
    };

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guest: 1,
            occasion: ""
        },
        onSubmit: (values) => {
            submitForm(values);
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Date is required"),
            time: Yup.string().required("Time is required"),
            occasion: Yup.string().required("Occasion is required")
        }),
    });

    return (
        <Box style={{textAlign:"center"}}>
            <form onSubmit={formik.handleSubmit} style={{ width: "50vw", margin:"0 auto" }}>
                <h1>Let's Reserve a Table for You !</h1>

                <VStack spacing={12}>

                    <FormControl isInvalid={formik.touched.date && !!formik.errors.date}>
                        <FormLabel htmlFor="res-data">Choose date</FormLabel>
                        <Input
                            type="date"
                            id="res-date"
                            name="date"
                            value={formData.date}
                            onChange={onChangeData}
                            {...formik.getFieldProps('date')}
                        />
                        {formik.touched.date && formik.errors.date ? (
                            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                        ) : null}
                    </FormControl>

                    <FormControl isInvalid={formik.touched.time && !!formik.errors.time}>
                        <FormLabel htmlFor="res-time">Choose Time</FormLabel>
                        <Select
                            id="res-time"
                            name="time"
                            placeholder="Choose from below"
                            value={formData.time}
                            onChange={onChangeData}
                            {...formik.getFieldProps('time')}
                        >
                            {availableTimes.map((times) => (
                                <option key={times} value={times} >{times}</option>
                            ))}
                        </Select>
                        {formik.touched.time && formik.errors.time ? (
                            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                        ) : null}
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="guest">Number of guests</FormLabel>
                        <NumberInput defaultValue={1} min={1} max={10}>
                            <NumberInputField
                                id="guest"
                                name="guest"
                                value={formData.guest}
                                onChange={onChangeData}
                            />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <FormControl isInvalid={formik.touched.occasion && !!formik.errors.occasion}>
                        <FormLabel htmlFor="occasion">Occasion</FormLabel>
                        <Select
                            id="occasion"
                            name="occasion"
                            placeholder="Choose Occasion"
                            value={formData.occasion}
                            onChange={onChangeData}
                            {...formik.getFieldProps('occasion')}
                        >
                            <option value="Birthday" >Birthday</option>
                            <option value="Anniversary" >Anniversary</option>
                            <option value="Other" >Other</option>
                            <option value="Nothing_special" >Nothing special</option>
                        </Select>
                        {formik.touched.occasion && formik.errors.occasion ? (
                            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                        ) : null}
                    </FormControl>

                    <Button 
                        type="submit" 
                        style={{ backgroundColor: "#f4ce14" }} 
                        width="full"
                        isDisabled={!formik.isValid || !formik.dirty}
                    >
                        Make Your Reservation
                    </Button>

                </VStack>
            </form>
        </Box>
    );
};

export default BookingForm;