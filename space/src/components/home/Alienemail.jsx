import axios from "axios";
import { useState } from "react";


const Alienemail = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')


    const sendEmail = async (e) => {
        e.preventDefault()
            try {
                const data = await axios.post('https://alien-email.onrender.com/api/email/AlienEmail', { email, name})
                console.log(`Mail sent successfully ${name}`)
            } catch (err) {
                console.log(err)
            }
    }

    return (
        <>
            <div className='mb-5'>
                <div className='text-center'>
                    <h2 className='txt-fnt text-light'>Connect  to  aliens</h2>
                </div>
                <form className='bg-dark p-md-5 p-3 rounded-3 border border-3 '>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="text-light font-monospace form-label">Email address</label>
                        <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text text-light">Give your email ID.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" value={name} className="text-light font-monospace form-label">Give me a Name</label>
                        <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" onClick={sendEmail} className="btn btn-primary">Connect</button>
                </form>
            </div>
        </>
    )
}

export default Alienemail