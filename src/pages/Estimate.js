import React, {useState} from 'react';
export default function Estimate(){
  const [status, setStatus] = useState('');
  function submit(e){
    e.preventDefault();
    setStatus('Request sent (demo) — we can wire a real email later.');
  }
  return (
    <section className="page">
      <h2>Request a Free Estimate</h2>
      <form onSubmit={submit} className="estimate-form">
        <input placeholder="Name" required />
        <input placeholder="Email" type="email" required />
        <input placeholder="Address" required />
        <textarea placeholder="Describe your project" required />
        <button className="btn" type="submit">Submit</button>
      </form>
      <p className="status">{status}</p>
    </section>
  );
}