const faqs = [
  {
    question : "1. What is the purpose of this database?",
    answer:
      "This database provides a curated collection of carbohydrate mimetics, protein mimetics, and carbohydrate-mimetic peptides (CMPs) discovered over the past 25 years (1999-2023), aiming to support research in drug discovery and therapeutic development.",
  },
  {
    question: "2. Who can benefit from using this database?",
    answer:
      "Researchers, scientists, students, pharmaceutical developers, and bioinformatics professionals working in molecular mimicry, glycomimetics, peptide design, or therapeutic targeting.",
  },
  {
    question: "3. What therapeutic areas are covered in the database?",
    answer:
      "The entries span applications in cancer, cardiovascular diseases, infectious diseases, diabetes, inflammatory disorders, and other relevant medical conditions.",
  },
  {
    question: "4. What types of data are included for each mimetic?",
    answer:
      "Each entry includes the name, class, function, activity, mimicked entity (e.g., sugar/protein), and known or proposed therapeutic applications.",
  },
  {
    question: "5. How is the data curated?",
    answer:
      "Data is manually reviewed and compiled from peer-reviewed literature, ensuring relevance and scientific reliability.",
  },
  {
    question: "6. Can I contribute to or suggest additions to the database?",
    answer:
      "Yes, you can share your suggestions or contributions by reaching out via the contact form or messaging me on LinkedIn.",
  },
  {
    question: "7. How can I connect with the database maintainer?",
    answer:
      "You can connect with Ms. Akanksha Kulshreshtha via email at akankshak@nsut.ac.in or visit the About section on this website to learn more.",
  },
  {
    question: "8. Is this database free to access?",
    answer:
      "Yes, it is publicly accessible for academic and non-commercial use.",
  },
  {
    question: "9. How do I search for specific mimetics or therapeutic applications?",
    answer:
      "You can use the search and filter tools available on the website to find mimetics by class, function, activity, therapeutic area, and publish year - enhancing the user experience and helping you find relevant data quickly.",
  },
  {
    question: "10. Can I use the data from this database in my research or publications?",
    answer:
      "Yes, the data can be used for academic and non-commercial research purposes. Please cite this database appropriately in your work.",
  },
  {
    question: "11. Is it possible to download the data in Excel or CSV format?",
    answer:
      "Yes, you can download the database entries in Excel (.xlsx) or CSV (.csv) file formats for offline use and analysis.",
  },
];

export default function Faqs() {
  return (
    <div className="min-h-6xl bg-white flex flex-col mx-auto items-center py-12 px-2">
      <div className="max-w-5xl w-full  rounded-lg  p-8">
        <h1 className="text-4xl font-extrabold text-black text-center mb-10">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-700 text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
