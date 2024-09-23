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
    },
    ];

    // Helper function to calculate percentage score
    function calculatePercentage(score, pointsPossible) {
        return score / pointsPossible;
    }

    // Helper function to initialize learner in the results
    function initializeLearner(learnerDataResults, learnerId, courseName) {
        if (!learnerDataResults[learnerId]) {
            learnerDataResults[learnerId] = {
                id: learnerId,
                totalPoints: 0,
                totalPossible: 0,
                description: `Learner ${learnerId} performance for ${courseName}`,
            };
        }
    }

// Helper function to check if submission is late and apply penalty
function checkLateSubmission(learner_id, assignment_id, submissionDate, dueDate, pointsPossible) {
    if (new Date(submissionDate) > new Date(dueDate)) {
        console.log(`Assignment ${assignment_id} for Learner ${learner_id} submitted late. Applying 10% penalty.`);
        return pointsPossible * 0.1;  // Deduct 10%
    }
    console.log(`Assignment ${assignment_id} for Learner ${learner_id} was submitted on time.`);
    return 0;  // No penalty
}

    function getLearnerData(course, ag, submissions) {

    try {
        // check course_id in assignmentGroup matches courseInfo
        if (ag.course_id !== course.id) {
            throw new Error("Assignment group doesn't belong to the course.");
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
            score -= checkLateSubmission(learner_id, assignment_id, subDetails.submitted_at, assignment.due_at, assignment.points_possible);

            // Use, calculatePercentage function, calculate percentage scored for assignment
            const percentageScore = calculatePercentage(score, assignment.points_possible);

            // Use initializeLearner function, if learner doesn't exist, create an entry
            initializeLearner(learnerDataResults, learner_id, course.name);

            // add learner score to results
            learnerDataResults[learner_id][assignment_id] = percentageScore;
            learnerDataResults[learner_id].totalPoints += score;
            learnerDataResults[learner_id].totalPossible += assignment.points_possible;
        }); console.log(learnerDataResults);

        // calculate average scores for each learner and return results
        const result = Object.values(learnerDataResults).map(learner => {
            const avg = learner.totalPoints / learner.totalPossible;
            return {
                ...learner,
                avg,
                summary: `Learner ${learner.id} has an average score of ${(avg * 100).toFixed(2)}% on their assignments.`
                };
        });console.log(result);

    return result;
    } catch (error) {
        console.error(error.message);
    }
}

    const results = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

    console.log(results);
