import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [tempScore, setTempScore] = useState(student.score);

  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>

      {/* Original Score */}
      <td>{student.score}</td>

      {/* Status */}
      <td className={isPass ? "pass" : "fail"}>
        {isPass ? "Pass" : "Fail"}
      </td>

      {/* Update Section */}
      <td>
        <input
          type="number"
          value={tempScore}
          onChange={(e) => setTempScore(e.target.value)}
        />

        <button onClick={() => updateScore(student.id, tempScore)}>
          Save
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;