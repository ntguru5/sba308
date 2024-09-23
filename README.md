# Process Learner Data for Courses
This application processes learner submission data for a given course, calculating average scores and handling special cases like late submissions and invalid input.

## Features:
- Validates assignment groups against course data.
- Applies a 10% penalty for late submissions.
- Ignores assignments not yet due.
- Handles potential division-by-zero and other errors.
- Outputs the average score per learner and the percentage score for each assignment.

## How to Use:
1. Run the `getLearnerData` function with the `CourseInfo`, `AssignmentGroups`, and `LearnerSubmissions` as parameters.
2. The function returns an array of learners' processed data.
3. Error handling will output issues such as invalid course IDs or zero points possible.

## Sample Usage:
`const result = getLearnerData(CourseInfo, AssignmentGroups, LearnerSubmissions);<br>
console.log(result);`
