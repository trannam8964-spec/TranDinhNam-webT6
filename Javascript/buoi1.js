const students = [
  { id: 1, name: "Nguyen Van An", age: 20, score: 8.5 },
  { id: 2, name: "Tran Thi Binh", age: 19, score: 6.5 },
  { id: 3, name: "Le Van Cuong", age: 21, score: 4.5 },
  { id: 4, name: "Pham Thi Dung", age: 20, score: 9.0 },
  { id: 5, name: "Hoang Van Em", age: 22, score: 5.5 },
  { id: 6, name: "Do Minh Anh", age: 19, score: 7.5 },
  { id: 7, name: "Bui Quang Huy", age: 20, score: 3.5 },
  { id: 8, name: "Nguyen Thi Lan", age: 21, score: 8.0 },
  { id: 9, name: "Tran Duc Long", age: 22, score: 6.0 },
  { id: 10, name: "Le Thu Ha", age: 20, score: 9.5 },
  { id: 11, name: "Pham Minh Khang", age: 19, score: 5.0 },
  { id: 12, name: "Vo Ngoc Mai", age: 21, score: 7.0 },
  { id: 13, name: "Dang Tuan Nam", age: 20, score: 4.0 },
  { id: 14, name: "Hoang Thu Phuong", age: 22, score: 8.8 },
  { id: 15, name: "Nguyen Gia Bao", age: 19, score: 6.8 },
  { id: 16, name: "Tran Minh Quan", age: 20, score: 7.8 },
  { id: 17, name: "Le Ngoc Son", age: 21, score: 2.5 },
  { id: 18, name: "Pham Hai Yen", age: 22, score: 9.2 },
  { id: 19, name: "Bui Thanh Tung", age: 20, score: 5.8 },
  { id: 20, name: "Do Khanh Linh", age: 19, score: 8.2 },
];
//yêu cầu 1
students.forEach((student) => {
  console.log(
    `ID: ${student.id}
     Name:${student.name}
     age:${student.age}
     score: ${student.score}   
    `,
  );
});
//yêu cầu 2
function isPassed(score) {
  return score >= 5;
}
students.forEach((student) => {
  let status = isPassed(student.score) ? "Đạt" : "Không Đạt";
  console.log(`
    ${student.name}: ${status}    
        `);
});
//yêu cầu 3
const passedStudents = students.filter((student) => isPassed(student.score));
console.log("Danh sách nhữnh sinh viên đã qua môn: ");
passedStudents.forEach((student) => {
  console.log(`
    Name:${student.name} 
    Score:${student.score}
    `);
});
//yêu cầu 4
const failedStudents = students.filter((student) => student.score < 5);
console.log("Danh sách nhữnh sinh viên trượt môn: ");
failedStudents.forEach((student) => {
  console.log(`
    Name:${student.name} 
    Score:${student.score}
    `);
});
//yêu cầu 5
const ageStudents = students.filter((student) => student.age >= 21);
console.log("Danh sách sinh vien theo tuổi: ");
ageStudents.forEach((student) => {
  console.log(`
        Name:${student.name}
        Age:${student.age}    
     `);
});
//yêu cầu 6
const highScore = students.filter((student) => student.score >= 8);
const Hsg = highScore.map((student) => {
  console.log(`
        ${student.name} -- Học Sinh Giỏi
        `);
});
//yêu cầu 7
const getClassification = (score) => {
  if (score >= 8) return "Giỏi";
  else if (score >= 6.5 && score < 8) return "Khá";
  else if (score >= 5 && score < 6.5) return "Trung Bình";
  else {
    return "Yếu";
  }
};
const xepLoai = students.map((student) => {
  console.log(
    `
        ${student.name} - ${getClassification(student.score)};
        `,
  );
});
//yêu cầu 8
const result = students
  .filter((student) => student.score >= 6.5)
  .map((student) => {
    console.log(
      `${student.name};
      ${student.score};
    `,
    );
  });
