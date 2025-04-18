export default function Home() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img
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

      {/* Education Section */}
      <h2 className="text-3xl font-bold mt-12 mb-6 border-b border-gray-300 pb-2">
        Education
      </h2>
      {/* (Education content unchanged, keep your full education JSX here) */}

      {/* Experience Section */}
      <h2 className="text-3xl font-bold mt-12 mb-6 border-b border-gray-300 pb-2">
        Experience
      </h2>
      {/* (Experience content unchanged, keep your full experience JSX here) */}
    </section>
  );
}
