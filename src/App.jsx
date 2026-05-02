import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Riya", score: 80 },
    { id: 2, name: "Rohan", score: 35 },
  ]);

  // Update score
  const updateScore = (id, newScore) => {
    const updatedStudents = students.map((s) =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    );
    setStudents(updatedStudents);
  };

  // Add new student
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };
  const totalStudents = students.length;

const passedStudents = students.filter(
  (s) => s.score >= 40
).length;

const avgScore =
  students.reduce((sum, s) => sum + s.score, 0) /
    students.length || 0;

  return (
    <div className="app">
      <Header />
  <div className="stats">
  <div>Total: {totalStudents}</div>
  <div>Passed: {passedStudents}</div>
  <div>Avg: {avgScore.toFixed(0)}</div>
</div>
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;