// src/components/ContactForm.jsx
import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    gradeLevel: "",
    resourceType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // In a real application, you would send this data to your backend
    // which would then email you. For now, we'll simulate this process.

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically make a fetch request to your backend
      // Example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // For demonstration, we'll just show a success message
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        gradeLevel: "",
        resourceType: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="container">
        <h2>إضافات يريدها الزوار</h2>
        <p className="form-description">
          هل هناك موارد أو محتوى تعتقد أنه مفقود؟ نود أن نسمع منك! يرجى ملء
          النموذج أدناه بمقترحاتك، وسنقوم بمراجعتها للنظر في إضافتها إلى موقعنا.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">اسمك *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="ادخل اسمك"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">بريدك الالكتروني *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ادخل بريدك الالكتروني"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">الموضوع *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="شرح مختصر لمقترحك"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gradeLevel">المستوى</label>
              <select
                id="gradeLevel"
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleChange}
              >
                <option value="">اختر المستوى المطلوب</option>
                <option value="kindergarten">Kindergarten</option>
                <option value="grade1">Grade 1</option>
                <option value="grade2">Grade 2</option>
                <option value="grade3">Grade 3</option>
                <option value="grade4">Grade 4</option>
                <option value="grade5">Grade 5</option>
                <option value="grade6">Grade 6</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="resourceType">المورد</label>
              <select
                id="resourceType"
                name="resourceType"
                value={formData.resourceType}
                onChange={handleChange}
              >
                <option value="">اختر المورد</option>
                <option value="worksheet">Worksheet</option>
                <option value="lesson-plan">Lesson Plan</option>
                <option value="activity">Activity</option>
                <option value="reading-material">Reading Material</option>
                <option value="video">Video</option>
                <option value="game">Educational Game</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">اقتراحك *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="من فضلك قدم لنا شرحا وافيا حول مقترحك، حتى يتسنى لنا دراسته بشكل جيد."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Suggestion"}
          </button>

          {submitStatus === "success" && (
            <div className="status-message success">
              ✅ Thank you! Your suggestion has been received. We'll review it
              and consider adding it to our resources.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="status-message error">
              ❌ Sorry, there was an error sending your message. Please try
              again later or contact us directly at
              info@elementarylearninghub.com
            </div>
          )}
        </form>

        <div className="contact-alternative">
          <h3>يمكنك مراسلنا مباشرة</h3>
          <p>
            على البريد الالكتروني الآتي:{" "}
            <strong>info@elementarylearninghub.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
