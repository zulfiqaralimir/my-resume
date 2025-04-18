export default function Home() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-2">Zulfiqar Ali Mir</h1>

      <p className="mb-4">
        <a href="mailto:mir.global.academy@gmail.com" className="text-blue-600 hover:underline">
          mir.global.academy@gmail.com
        </a>{" "}
        | Phone: +92 322 5150501
      </p>

      <ul className="space-y-2 mb-8 text-md">
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

      {/* Education Section */}
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-10">
        <div>
          <div className="flex justify-between font-semibold">
            <span>World Quant University</span>
            <span>USA · Jan 2025</span>
          </div>
          <p>Master in Financial Engineering -In Progress</p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>Pakistan Institute of Development Economics (PIDE)</span>
            <span>Islamabad, PK · Aug 2016 – Aug 2022</span>
          </div>
          <p>Ph.D. in Econometrics. CGPA 3.50</p>
          <p>
            <strong>Thesis:</strong> Causal Discovery using Modified Riz-PC Algorithm from Observational and Latent Variables Data: A Monte Carlo Simulation Experiment And Application
          </p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>Pakistan Institute of Development Economics</span>
            <span>Islamabad, PK · Aug 2014 – Aug 2016</span>
          </div>
          <p>M.Phil. in Economics and Finance. CGPA 3.21</p>
          <p>
            <strong>Thesis:</strong>{" "}
            <a
              href="https://example.com"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              The Impact of Macroeconomic Volatility on Stock Returns Volatility: Evidence from Pakistani Stock Market
            </a>
          </p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>Allama Iqbal Open University</span>
            <span>Islamabad, PK · Aug 2006 – Sept 2009</span>
          </div>
          <p>MBA in Human Resource Management</p>
          <p><strong>Thesis:</strong> Report on Bank Alfalah Limited</p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>Institute of Cost and Management Accountants in Pakistan</span>
            <span>2006 – 2010</span>
          </div>
          <p>Master, Chartered Management Accountant</p>
        </div>

        <div>
          <div className="flex justify-between font-semibold">
            <span>F.G. Degree College</span>
            <span>Wah Cantt, PK · June 1990 – June 1992</span>
          </div>
          <p>B.Sc. in Mathematics & Statistics</p>
        </div>
      </div>
    </section>
  );
}
