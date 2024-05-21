function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        };
    }
    // This array will hold the functions returned by studentSeat.
    const students = [];

    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;
}