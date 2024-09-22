    // The provided course information.
    const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
    };

    // The provided assignment group.
    const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
        },
        {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
        },
        {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
        }
    ]
    };

    // The provided learner submission data.
    const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
        submitted_at: "2023-01-25",
        score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
        submitted_at: "2023-02-12",
        score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
        submitted_at: "2023-01-25",
        score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
        submitted_at: "2023-01-24",
        score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
        submitted_at: "2023-03-07",
        score: 140
        }
    }
    ];

    function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    // If assignmentGroup.course_id is not equal to course.id, throw an error
    // Create an empty map or object to store data for each learner
    // for each submission in submissions get leaner_id, assignment_id, submission details
    // find assignment in assignmentGroup.assignments list that matches assignment_id
    // if assignment due_at is in the future, skip
    // If assignment.points_possible is 0, throw an error
    // Compare submissionDetails.submitted_at date with the assignment.due_at date, if submission is late, subtract 10% from points_possible
    // Calculate percentageScore as submissionDetails.score / assignment.points_possible
    // Update Learner data: id, total points, total possible, % of score
    // Calculate averages
    // return results

    try {
        // check course_id in assignmentGroup matches courseInfo
        if (ag.course_id !== course.id) {
            throw new Error("Assignment group doesn't belong to the course.");
        }
    }
    catch (error) {
        console.error(error.message);
    }
    const learnerDataResults = {};
        submissions.forEach(submission => {
            const {learner_id, assignment_id, submission: subDetails } = submission;
            // find the assignment in AssignmentGroup
            const assignment = ag.assignments.find(assn => assn.id === assignment_id);

            // skip future assignments
            if (new Date(assignment.due_at) > new Date()) {
                return;
            }

            // make sure points_possible is greater than zero
            if (assignment.points_possible === 0) {
                throw new Error(`Assignment ${assignment_id} has points_possible of 0.`);
            }

            // check if learner submission is late, deduct 10%
            let score = subDetails.score;
            const submittedAt = new Date(subDetails.submitted_at);
            const dueAt = new Date(assignment.due_at);
            if (submittedAt > dueAt) {
                score = assignment.points_possible * 0.1;
            }

            // calculate percentage scored for assignment
            const percentageScore = score / assignment.points_possible;

            // if learner doesn't exist, create an entry
            if (!learnerDataResults[learner_id]) {
                learnerDataResults[learner_id] = {
                    id: learner_id,
                    totalPoints: 0,
                    totalPossible: 0,
                    description: `Learner ${learner_id} performance for ${course.name}`,
                };
            }

            // add learner score to results

        })



    const result = [
        {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
        },
        {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
        }
    ];

    return result;
    }

    const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

    console.log(result);
