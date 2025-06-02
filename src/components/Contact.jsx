import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email",
      content: "elkoualiilyas099@gmail.com",
      link: "mailto:elkoualiilyas099@gmail.com"
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Phone",
      content: "+212 634396990",
      link: "tel:+212634396990"
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Location",
      content: "CASABLANCA, MOROCCO",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading">Get In Touch</h2>
        <p className="text-tertiary max-w-2xl mb-12">
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-4 p-4 rounded-lg border border-tertiary/20 hover:border-secondary/50 transition-colors"
            >
              <div className="text-secondary">{info.icon}</div>
              <div>
                <h3 className="text-secondary font-medium">{info.title}</h3>
                <p className="text-tertiary">{info.content}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <form action="https://formspree.io/f/mqabklow" method="POST" className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-tertiary mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-primary/50 border border-tertiary/20 rounded-md px-4 py-2 text-light focus:outline-none focus:border-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-tertiary mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-primary/50 border border-tertiary/20 rounded-md px-4 py-2 text-light focus:outline-none focus:border-secondary"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-tertiary mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full bg-primary/50 border border-tertiary/20 rounded-md px-4 py-2 text-light focus:outline-none focus:border-secondary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-secondary text-primary font-medium px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 