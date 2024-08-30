import React from 'react';
import "../styles/components/contact.css";

const Contact = () => {

    // const [result, setResult] = React.useState("");

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     setResult("Sending....");
    //     const formData = new FormData(event.target);

    //     formData.append("access_key", "8b3a45f9-51aa-4a99-b341-f3f908bac9ce");

    //     const response = await fetch("https://api.web3forms.com/submit", {
    //         method: "POST",
    //         body: formData
    //     });

    //     const data = await response.json();

    //     if (data.success) {
    //         setResult("Form Submitted Successfully");
    //         event.target.reset();
    //     } else {
    //         console.log("Error", data);
    //         setResult(data.message);
    //     }
    // };

    return (
        <div className='contact'>
            <div className="offline">
                <h1>Contact Details </h1>
                <ul>
                    <p>Feel free to contact us through contact from or from the informations given. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our educational community</p>
                    <li> admin@victoryvidhyalaya.com</li>
                    <li>+91 9942987014</li>
                    <li>S.F.NO 76, Victory Nagar, Kapikadai Stop, Sathy Mainroad, saravanampatti(post), Coimbatore-641048</li>
                </ul>
            </div>
            <div className="online">
                <h1>Online Inquiry</h1>
                <form >
                    <label>Full Name</label>
                    <input type="text" name='name' placeholder='Enter your name..' required />
                    <label>Phone Number</label>
                    <input type="number" name='phone' placeholder='Enter your number..' required />
                    <label>Write your Messages here</label>
                    <textarea name='message' rows="6" placeholder='Enter your messages..' required></textarea>
                </form>
                <button type='submit' className='btn dark-btn'>Submit now</button>

                {/* <span>{result}</span> */}

            </div>

        </div>
    )
}

export default Contact