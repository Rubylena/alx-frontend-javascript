const updateStudentGradeByCity = (arr, city, newGrades) => {
  const dev = newGrades.map((ve) => ve.studentId);
  arr.forEach((item) => item.grade = 'N/A');
  const sameCities = arr.filter((item) => item.location === city)
    .map((v) => {
      if (dev.includes(v.id)) {
        const result = newGrades.map((ve) => ve.grade);
        v.grade = result;
        return v;
      }
      return v;
    });
  return sameCities;
//   ({ ...v, grade: 'N/A' })
};

export default updateStudentGradeByCity;
