import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/sections/ContactForm";

export default function ContactPage() {
    return (
        <>
          <div className="container">
               {/* Section Header */}
               <PageHeader
                 title="Contact"
                 highlight="Me"
               />
               {/* Contact Form */}
               <ContactForm />

            </div>
        </>
    );
}
