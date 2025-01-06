import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-coffee-600">Visítanos</h2>
          <p className="mt-4 text-gray-600">
            Nos encantaría servirte la taza perfecta.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <FiMapPin className="mx-auto h-8 w-8 text-coffee-500" />
            <h3 className="mt-4 text-xl font-semibold text-coffee-600">
              Ubicación
            </h3>
            <p className="mt-2 text-gray-600">
              123 Coffee Street
              <br />
              City, State 12345
            </p>
          </div>

          <div className="text-center p-6">
            <FiPhone className="mx-auto h-8 w-8 text-coffee-500" />
            <h3 className="mt-4 text-xl font-semibold text-coffee-600">
              Teléfono
            </h3>
            <p className="mt-2 text-gray-600">(569) 123-4567</p>
          </div>

          <div className="text-center p-6">
            <FiMail className="mx-auto h-8 w-8 text-coffee-500" />
            <h3 className="mt-4 text-xl font-semibold text-coffee-600">
              Email
            </h3>
            <p className="mt-2 text-gray-600">contacto@molino1925.com</p>
          </div>
        </div>

        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
