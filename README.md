# Exam Application

## Project Description

The **Exam Application** is a web-based tool built with Next.js (TypeScript) that allows users to take an exam within a 1-hour duration. Users can select answers, flag questions for later review, and must complete at least 50% of the exam to submit. The application stores user answers and progress in `localStorage`, preventing data loss on page refresh. Once the timer hits zero, users are automatically redirected to a static result page that shows their completion status. The frontend is styled using Shadcn and Tailwind CSS, and the project is hosted on Vercel.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [Deployment](#deployment)
6. [Contact Information](#contact-information)

---

## Features

- **1-Hour Exam Timer:** The exam duration is fixed at 1 hour.
- **Answer Selection & Submission:** Users can select answers to questions and submit after completing at least 50% of the exam.
- **Flagging for Review:** Users can flag questions for review before submitting the exam.
- **Local Data Persistence:** Answers and flagged questions are saved in `localStorage`, ensuring data remains intact on page refresh.
- **Auto-Submission:** If the timer reaches zero, the exam is automatically submitted, and the user is redirected to a result page.
- **Responsive Design:** The interface is fully responsive, optimized for both desktop and mobile users.

---

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Swafuvan/Machine-task-Exam.git
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000/`.

---

## Usage

Once the application is running:

1. **Start the Exam:**
   - Visit `https://machine-task-exam.vercel.app/` to start the exam.
   - Select answers to the questions as you proceed through the exam.

2. **Flag Questions:** 
   - Flag any question you’d like to review before submitting by clicking the flag icon next to the question.

3. **Submit Exam:**
   - You must answer at least 50% of the questions before submitting the exam. The "Submit" button remains disabled until this condition is met.

4. **Persistent Data:**
   - Refreshing the page will not reset your progress. The selected answers and flagged questions are saved in `localStorage`.

5. **Auto-Submit on Timeout:**
   - If the exam timer reaches zero, your answers will be automatically submitted, and you'll be redirected to a static result page showing the completion status.

---

## Technologies Used

The following technologies were used in the development of this project:

- **Next.js (TypeScript):** For server-side rendering and a scalable front-end framework.
- **Shadcn:** For UI components and interactions.
- **Tailwind CSS:** For custom styling and responsive design.
- **localStorage:** For saving and persisting user progress during the exam.
- **Vercel:** For hosting and deployment.

---

## Deployment

This project is deployed on **Vercel**. You can access the live version of the application using the following link:
``` bash
https://machine-task-exam.vercel.app/
```

---

## Contact Information

If you have any questions or need further information, feel free to reach out:

- **Email:** swafuvancp@gmail.com
- **GitHub:** https://github.com/Swafuvan/


---
