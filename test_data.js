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
            due_at: "3156-11-15", // future assignment
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
          // Test Case: Future assignment not yet due
        {
            learner_id: 140,
            assignment_id: 3,
            submission: {
            submitted_at: "2024-01-10", // Future assignment
            score: 480
            }
        },
        // Test Case: Zero points possible
        {
            learner_id: 141,
            assignment_id: 1,
            submission: {
            submitted_at: "2023-01-24",
            score: 0
            }
        },
        // Test Case: Zero points assignment (invalid data)
        {
            learner_id: 142,
            assignment_id: 1,
            submission: {
            submitted_at: "2023-01-24",
            score: 50
            }
        }
        ];
