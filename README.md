Project Name: Exam Application

Project Description: 
The Exam Application is a web-based tool built with Next.js (TypeScript) that allows users to take an exam within a 1-hour duration. Users can select answers, flag questions for later review, and must complete at least 50% of the exam to submit. The application stores user answers and progress in localStorage, preventing data loss on page refresh. Once the timer hits zero, users are automatically redirected to a static result page that shows their completion status. The frontend is styled using Shadcn and Tailwind CSS, and the project is hosted on Vercel.

Table of Contents:
1.Features
2.Installation
3.Usage
4.Technologies Used
5.Deployment
6.Contact Information


1.Features :-
1.1-Hour Exam Timer: The exam duration is fixed at 1 hour.
2.Answer Selection & Submission: Users can select answers to questions and submit after completing at least 50% of the exam.
3.Flagging for Review: Users can flag questions for review before submitting the exam.
4.Local Data Persistence: Answers and flagged questions are saved in localStorage, ensuring data remains intact on page refresh.
5.Auto-Submission: If the timer reaches zero, the exam is automatically submitted, and the user is redirected to a result page.
6.Responsive Design: The interface is fully responsive, optimized for both desktop and mobile users.

2.Installation
To set up and run the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone [repository URL]
Navigate to the project directory:

bash
Copy code
cd exam-application
Install the dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
The application will be available at http://localhost:3000.
 
3.Usage :-
Once the application is running:

Start the Exam:
Visit [http://localhost:3000](https://machine-task-exam.vercel.app/) to start the exam.
Select answers to the questions as you proceed through the exam.

Flag Questions:
Flag any question you’d like to review before submitting by clicking the flag icon next to the question.

Submit Exam:
You must answer at least 50% of the questions before submitting the exam. The "Submit" button remains disabled until this condition is met.

Persistent Data:
Refreshing the page will not reset your progress. The selected answers and flagged questions are saved in localStorage.

Auto-Submit on Timeout:
If the exam timer reaches zero, your answers will be automatically submitted, and you'll be redirected to a static result page showing the completion status.

4.Technologies Used :-
The following technologies were used in the development of this project:

1.Next.js (TypeScript): For server-side rendering and a scalable front-end framework.
2.Shadcn: For UI components and interactions.
3.Tailwind CSS: For custom styling and responsive design.
4.localStorage: For saving and persisting user progress during the exam.
5.Vercel: For hosting and deployment.

5.Deployment :-
This project is deployed on Vercel. You can access the live version of the application using the following link:

Live Demo: [https://vercel.com/swafuvans-projects/machine-task-exam](https://machine-task-exam.vercel.app/)

7.Contact Information :-
If you have any questions or need further information, feel free to reach out:

Email: swafuvancp@gmail.com
GitHub: https://github.com/Swafuvan/Machine-task-Exam

