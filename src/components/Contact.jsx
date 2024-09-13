import React, { useState } from "react";
import { MakeApiCall, URLS } from "../utils/ApiURL"; // Adjust the import path as needed
import "../styles/components/contact.css";

const Contact = () => {
    // State to manage form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        requirment: "",
    });

    // State to manage submission status
    const [submissionStatus, setSubmissionStatus] = useState("");

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Define the configuration for the API call
        const config = {
            method: "POST",
            url: URLS.CreatingClient,
            data: formData,
        };

        try {
            const response = await MakeApiCall(config);
            setSubmissionStatus("Success! Your message has been sent.");
            // Optionally clear the form after successful submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                requirment: "",
            });
        } catch (error) {
            setSubmissionStatus("Error! There was a problem sending your message.");
            console.error("There was an error!", error);
        }
    };

    return (
        <div className="contact" id="contact-us">
            <div className="serviceInfo">
                <h1 className="serviceTitle">Book a Services</h1>
                <form onSubmit={handleSubmit} className="infoInputs">
                    <div className="nameAndMail">
                        <div>
                            <label className="inputLabel">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="inputBox"
                                placeholder="Enter your name.."
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="inputLabel">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="inputBox"
                                placeholder="Enter your email.."
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="nameAndMail">
                    <div className="numberContent">
                        <label className="inputLabel">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            className="inputBox"
                            placeholder="Enter your phone number.."
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="inputLabel">What service do you want?</label>
                        <select
                            name="requirment"
                            className="serviceDropdown"
                            value={formData.requirment}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Select a service --</option>{" "}
                            <option value="webDevelopment">Web Development</option>
                            <option value="mobileAppDevelopment">App Development</option>
                            <option value="uiUxDesign">UI/UX Design</option>
                            <option value="seo">SEO Optimization</option>
                            <option value="graphicdesign">Graphic design</option>
                            <option value="branding">Branding</option>
                            <option value="socialmediamarketing">Social media marketing</option>
                            <option value="videoediting">Video editing</option>
                            <option value="visualdubaig">Visualdub Aig</option>
                        </select>
                    </div>
                    </div>

                    <button type="submit" className="btn">
                        SUBMIT
                    </button>
                </form>
                {submissionStatus && <p>{submissionStatus}</p>}
            </div>
        </div>
    );
};

export default Contact;
