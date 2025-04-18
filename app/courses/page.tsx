export default function CoursesPage() {
    const courses = [
      "Full Stack Web Development – Coursera",
      "Data Structures & Algorithms – Udemy",
      "Machine Learning – Stanford (Andrew Ng)",
      "Frontend Developer Capstone – Meta",
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    );
  }
  