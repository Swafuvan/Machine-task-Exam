
export interface Questions {
    id: string;
    question: string;
    options: Array<{ id: string; option: string }>;
    answer: { id: string, option: string };
}

export interface SelectedAnswer{
    [questionId: string]: string;  
}