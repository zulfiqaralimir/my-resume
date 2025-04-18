import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <Image
          src="/profile.jpg"
          alt="Zulfiqar Ali Mir"
          className="w-32 h-32 rounded-full shadow-lg border-2 border-gray-300"
        />
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold mb-2 text-center">Zulfiqar Ali Mir</h1>

      <p className="mb-4 text-center">
        <a
          href="mailto:mir.global.academy@gmail.com"
          className="text-blue-600 hover:underline"
        >
          mir.global.academy@gmail.com
        </a>{" "}
        | Phone: +92 322 5150501
      </p>

      <ul className="space-y-2 mb-8 text-md text-center">
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/zulfiqar-ali-mir/"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            linkedin.com/in/zulfiqar-ali-mir
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/zulfiqaralimir"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            github.com/zulfiqaralimir
          </a>
        </li>
        <li>
          <strong>LeetCode:</strong>{" "}
          <a
            href="https://leetcode.com/u/xBe6uVINLF/"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            leetcode.com/u/xBe6uVINLF
          </a>
        </li>
      </ul>

      {/* Experience Section */}
      <h2 className="text-3xl font-bold mt-12 mb-6 border-b border-gray-300 pb-2">
        Experience
      </h2>

      <div className="space-y-10 text-gray-800">
        <div>
          <div className="flex justify-between font-semibold">
            <span>Turing</span>
            <span>Remote · Sept 2024 – Present</span>
          </div>
          <p>Quality Analyst / Team Lead</p>
          <p>Data / Business Analytics, LLM Trainer, Research Analyst – Advanced Mathematics Subject Matter Expert</p>
          <p>Client: Apple; Meta</p>
          <p className="mt-2">
            As an LLM Trainer and Research Analyst in Mathematics, I employ cutting-edge techniques like Reinforcement Learning with Human Feedback (RLHF) and Supervised Fine-Tuning (SFT) to refine AI models in solving advanced mathematical problems. I assess AI-generated mathematical solutions, deliver feedback, and shape models to meet human expectations. <span className="text-blue-600">I concentrate on enhancing</span> clarity, accuracy, and practicality.
            <br />
            <strong>Client:</strong> Anthropic (Data Science)
            <br />
            <strong>Skills:</strong> Maths, Statistics, Problem Solving, Data Analysis, Generative AI, Prompt Engineering, Markdown, LaTeX
          </p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>Mir Global Soft Private Limited</span>
            <span>Islamabad, PK · 2019 – Present</span>
          </div>
          <p>Director</p>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
            <li>Leading data analysis and analytics for the equity market</li>
            <li>Conducting economic research and market trend analysis</li>
            <li>Overseeing research and development in applied generative AI</li>
            <li>Engaged in AI software, fintech, and tech innovations</li>
            <li>Business intelligence initiatives and leadership</li>
            <li>Created a <strong>Stock Market Index</strong> for the Tech Sector</li>
            <li>Spearheaded <strong>Stock Market Analysis</strong> and <strong>Portfolio Management</strong> using 15+ years of expertise</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>Super Nova Academy</span>
            <span>Islamabad, PK · 2010 – Present</span>
          </div>
          <p>Teacher - Mathematics, Statistics & SAT</p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>Beaconhouse School System, BMI</span>
            <span>Islamabad, PK · Aug 2017 – Sept 2022</span>
          </div>
          <p>Teacher of Mathematics</p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>Bank Alfalah Limited</span>
            <span>Wah Cantt, PK · June 2008 – July 2010</span>
          </div>
          <p>Operations Officer</p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>UNIX Securities (Pvt.) Limited</span>
            <span>Islamabad, PK · May 2006 – May 2007</span>
          </div>
          <p>Equity Manager</p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>City Lights Trading</span>
            <span>Dubai, UAE · Jan 2005 – Dec 2005</span>
          </div>
          <p>Credit Controller</p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>Islamabad Stock Exchange</span>
            <span>Islamabad, PK · 1999 – 2004</span>
          </div>
          <p>Equity Investment and Portfolio Management</p>
        </div>
      </div>
    </section>
  );
}
