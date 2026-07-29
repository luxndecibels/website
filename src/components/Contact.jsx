import { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send } from 'lucide-react';
import '../style/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top">
          <div className="section-label">GET IN TOUCH</div>
          <h2 className="section-title contact-heading">
            Let's Create Something<br />
            <span>Extraordinary Together</span>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon"><Phone size={17} /></div>
            <div>
              <span className="contact-item-label">PHONE</span>
              <span className="contact-item-val">+91 98410 08510</span>
              <span className="contact-item-val">+91 44 26253171</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><Mail size={17} /></div>
            <div>
              <span className="contact-item-label">EMAIL</span>
              <span className="contact-item-val">support@luxanddecibels.in</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><Globe size={17} /></div>
            <div>
              <span className="contact-item-label">WEBSITE</span>
              <span className="contact-item-val">www.luxanddecibels.in</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><MapPin size={17} /></div>
            <div>
              <span className="contact-item-label">HEAD OFFICE</span>
              <span className="contact-item-val">
                No. 1, Annexe, 1st Floor,<br />
                New Kuberaganapathy Street,<br />
                Mathialagan Nagar, Padi,<br />
                Chennai - 600 050, India.
              </span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><MapPin size={17} /></div>
            <div>
              <span className="contact-item-label">TECH CENTER</span>
              <span className="contact-item-val">
                Tech Center, Kochar Panchsheel,<br />
                Chennai Tiruvallur High Rd,<br />
                Mangalapuram, Sidco Industrial Estate,<br />
                Thirumalai Colony,<br />
                Chennai - 69, Tamil Nadu.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}