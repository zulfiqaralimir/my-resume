export type DownloadableDocument = {
  id: string;
  title: string;
  org: string;
  description: string;
  category: string;
  fileUrl: string;
  fileLabel: string;
};

// Add new downloadable documents here — each entry renders as a card
// on the /documents page automatically.
export const downloadableDocuments: DownloadableDocument[] = [
  {
    id: "biqai-training-response",
    title: "AI, Data Science & Functional Training — Supplier Response",
    org: "Black Iron Quantum AI (Private) Limited",
    description:
      "Training and certification proposal covering AI, Data Science, and functional programs — spanning digital products, coding, machine learning, data analytics, cybersecurity, and data governance — across senior leadership, middle management, and individual-contributor audience tiers.",
    category: "Proposals & Response Documents",
    fileUrl: "/documents/BIQAI-Training-Certification-Response.docx",
    fileLabel: "Download .docx",
  },
];
