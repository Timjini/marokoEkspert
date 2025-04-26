import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export const ContactPage = () => {
  // All contact content organized here
  const contactContent = {
    pageTitle: "Get in Touch",
    pageDescription: "We'd love to hear from you! Reach out for bookings, questions, or travel advice.",
    
    contactMethods: [
      {
        icon: <FaPhone className="text-2xl" />,
        title: "Call Us",
        details: "+212 123 456 789",
        description: "Available 9AM-6PM (GMT)",
        link: "tel:+212123456789"
      },
      {
        icon: <FaEnvelope className="text-2xl" />,
        title: "Email Us",
        details: "contact@moroccoexperts.com",
        description: "Response within 24 hours",
        link: "mailto:contact@moroccoexperts.com"
      },
      {
        icon: <FaMapMarkerAlt className="text-2xl" />,
        title: "Visit Us",
        details: "123 Sahara Avenue, Marrakech",
        description: "Office hours: Mon-Fri 9-5",
        link: "https://maps.google.com"
      }
    ],
    
    form: {
      title: "Send Us a Message",
      fields: [
        { name: "name", label: "Your Name", type: "text", required: true },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "phone", label: "Phone Number", type: "tel" },
        { name: "subject", label: "Subject", type: "text" },
        { name: "message", label: "Your Message", type: "textarea", required: true }
      ],
      submitText: "Send Message",
      successMessage: "Thank you! We'll get back to you soon."
    },
    
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What's the best time to visit Morocco?",
          answer: "Spring (March-May) and Fall (September-November) offer ideal temperatures."
        },
        {
          question: "Do you provide airport transfers?",
          answer: "Yes, we can arrange airport transfers for all our guests."
        },
        {
          question: "Are your tours suitable for children?",
          answer: "Many of our tours are family-friendly. We can customize itineraries for families."
        }
      ]
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-amber-800 mb-4">{contactContent.pageTitle}</h1>
        <p className="text-xl text-gray-600">{contactContent.pageDescription}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <div>
          <div className="space-y-8">
            {contactContent.contactMethods.map((method, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="bg-amber-100 p-4 rounded-full text-amber-600">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{method.title}</h3>
                  <a href={method.link} className="text-lg text-gray-700 hover:text-amber-600 transition">
                    {method.details}
                  </a>
                  <p className="text-gray-500 mt-1">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{contactContent.faq.title}</h2>
            <div className="space-y-4">
              {contactContent.faq.items.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-700">{item.question}</h3>
                  <p className="text-gray-600 mt-1">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{contactContent.form.title}</h2>
          
          {isSubmitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg">
              {contactContent.form.successMessage}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {contactContent.form.fields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-gray-700 mb-1">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      required={field.required}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  )}
                </div>
              ))}
              
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
              >
                <FaPaperPlane />
                {contactContent.form.submitText}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};