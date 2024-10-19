'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { getQuestions } from '@/source/Data'
import { ChevronLeft, ChevronRight, Flag, LayoutDashboard, Search, Inbox, BarChart2, Settings, Menu, Bell, User, MessageSquare } from 'lucide-react'
import { Questions, SelectedAnswer } from '@/types'
import Image from 'next/image'
import profimeImg from '../app/assets/istockphoto.jpg'
import { useRouter } from 'next/navigation'
import SubmitModal from './WarningModal'

export default function ExamQuestionPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer>({});
  const [timeLeft, setTimeLeft] = useState('00:59:59')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [Questions, setQuestions] = useState<Questions[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [unAnswerQuestion, setUnAnswerQuestion] = useState(0);
  const router = useRouter()


  useEffect(() => {
    fetchQuestions();
  }, []);

  // useEffect(() => {
  //     saveToLocalStorage();
  // }, []);

  useEffect(() => {
    const savedTime = localStorage.getItem('timeLeft');

    if (savedTime) {
      setTimeLeft(savedTime);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const [hours, minutes, seconds] = prev.split(':').map(Number);
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          clearInterval(timer);
          localStorage.removeItem('timeLeft');
          return '00:00:00';
        }

        const newTime = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;

        localStorage.setItem('timeLeft', newTime);

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft === '00:00:01') {
    router.push('/result')
  }

  const fetchQuestions = async () => {
    const questions = await getQuestions();
    console.log(questions);
    setQuestions(questions);

    if (typeof window !== undefined) {
      const savedSelectedAnswer = JSON.parse(localStorage.getItem('selectedAnswer') as string);
      const savedFlaggedQuestions = JSON.parse(localStorage.getItem('flaggedQuestions') as string);
      const savedCurrentQuestionIndex = JSON.parse(localStorage.getItem('currentQuestionIndex') as string);
      console.log(savedSelectedAnswer)
      setSelectedAnswer(savedSelectedAnswer);
      setFlaggedQuestions(savedFlaggedQuestions);
      setCurrentQuestionIndex(savedCurrentQuestionIndex);
      if(!savedSelectedAnswer && !savedFlaggedQuestions ){
        saveToLocalStorage();
      }
    }
  };

  const saveToLocalStorage = () => {
      localStorage.setItem('selectedAnswer', JSON.stringify(selectedAnswer));
      localStorage.setItem('flaggedQuestions', JSON.stringify(flaggedQuestions));
      localStorage.setItem('currentQuestionIndex', JSON.stringify(currentQuestionIndex));
    
  };

  if (!Questions.length) return <p className='flex justify-center mt-80 font-bold'>Loading questions...</p>;

  const isLessThanFiveMinutes = (time: string) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours === 0 && minutes < 5;
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleNext = () => {
    if (currentQuestionIndex < Questions?.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      saveToLocalStorage()
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      saveToLocalStorage()
    }
  }

  const handleSelectAnswer = (questionId: string, selectedOption: string) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleFlagQuestion = () => {
    setFlaggedQuestions(prev =>
      prev.includes(currentQuestionIndex)
        ? prev.filter(q => q !== currentQuestionIndex)
        : [...prev, currentQuestionIndex]
    )
  }

  const handleAnswerSelect = () => {
    checkAnswers()
    setIsModalVisible(true)
    console.log("Selected Answer:", selectedAnswer);
  };

  const checkAnswers = () => {
    const totalQuestions = Questions.length;
    const answeredQuestions = Object.keys(selectedAnswer).length;
    const percentageAnswered = (answeredQuestions / totalQuestions) * 100;
    const balaceQuestion = totalQuestions - answeredQuestions
    console.log(balaceQuestion)
    setUnAnswerQuestion(balaceQuestion);

    if (answeredQuestions === totalQuestions) {
      router.push("/result");
    } else if (percentageAnswered > 50) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(true);
      console.log("Less than 50% of the questions have been answered.");
    }
  };

  const getQuestionClasses = (index: number) => {
    const isCurrent = currentQuestionIndex === index;
    const isAnswered = !!selectedAnswer[Questions[index]?.id];
    const isFlagged = flaggedQuestions.includes(index);

    if (isFlagged) {
      return 'bg-orange-500 text-white';
    }
    if (isAnswered) {
      return 'bg-green-500 text-white';
    }
    if (isCurrent) {
      return 'border border-orange-500';
    }
    return 'bg-gray-100';
  };

  const onCancel = () => {
    setIsModalVisible(false);
  }

  const handleSubmit = () => {
    router.push('/result');
  }

  const onSubmit = () => {
    if (unAnswerQuestion === 0) {
      const minimumAnswers = Math.ceil(Questions.length * 0.5)
      console.log(minimumAnswers) 
      if (minimumAnswers > unAnswerQuestion) {
        handleSubmit()
      }
    }
  }

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
    localStorage.setItem('currentQuestionIndex', JSON.stringify(currentQuestionIndex)); // Save the current index to localStorage
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white w-64 fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:relative md:translate-x-0 z-30`}>
        <div className="flex items-center justify-between p-4 border-b">
          <div className="text-xl font-bold">ELT Global</div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-4">GENERAL</div>
          <nav className="space-y-2">
            <Button variant="ghost" className="bg-orange-500 hover:bg-orange-400 text-white w-full justify-start">
              <LayoutDashboard className="text-white mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Search className="mr-2 h-4 w-4 text-orange-500" />
              Find
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Inbox className="mr-2 h-4 w-4 text-orange-500" />
              Inbox
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart2 className="mr-2 h-4 w-4 text-orange-500" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4 text-orange-500" />
              Settings
            </Button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
                  <Menu className="h-6 w-6" />
                </Button>
                <h1 className="text-xl font-bold ml-2">Heading</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                  <span className="sr-only">Messages</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Image height={25} width={25} src={profimeImg} alt='profileImage' className='rounded-full' />
                  <span className="sr-only">User profile</span>
                </Button>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="border-b">
            <nav className="-mb-px flex space-x-6 px-4 sm:px-6 lg:px-8">
              <Button variant="link" className="text-orange-500 border-b-2 border-orange-500 pb-2">Exam</Button>
              <Button variant="link">option1</Button>
              <Button variant="link">option2</Button>
              <Button variant="link">option3</Button>
            </nav>
          </div>
        </header>

        {/* Question area */}
        <main className="flex-1 overflow-y-auto p-2">
          <div className="max-w-7xl mx-auto grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* Overview column */}
            <Card className="md:col-span-1">
              <CardContent className="p-4">
                <h2 className="font-bold mb-2">Overview</h2>
                <div className="grid grid-cols-5 gap-1">
                  {Questions.map((_, i) => (
                    <div onClick={()=>handleQuestionClick(i)} key={i} className={`cursor-pointer w-6 h-6 flex items-center justify-center text-sm ${getQuestionClasses(i)} rounded-full`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Question column */}
            <Card className="w-full md:col-span-2 lg:col-span-3">
              {isModalVisible && <SubmitModal totalQuestions={Questions?.length} unansweredQuestions={unAnswerQuestion} onSubmit={onSubmit} onCancel={onCancel} />}
              <CardContent className="sm:p-2 md:p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    MCQ:
                    <span className='text-orange-500'>{currentQuestionIndex + 1}</span>
                  </div>
                  <div className={isLessThanFiveMinutes(timeLeft) ? 'text-red-500 font-bold blink sm:mr-5 md:mr-1' : 'font-bold md:mr-1 mr-5'}>{timeLeft}</div>
                </div>
                {Questions[currentQuestionIndex] && (
                  <>
                    <h3 className="text-lg font-bold mb-4">{Questions[currentQuestionIndex].question}</h3>
                    <RadioGroup
                      value={selectedAnswer[Questions[currentQuestionIndex].id] || ''}
                      onValueChange={(value) => handleSelectAnswer(Questions[currentQuestionIndex].id, value)}
                      className="space-y-2"
                    >
                      {Questions[currentQuestionIndex].options.map((option, ind) => (
                        <div
                          key={ind}
                          className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer 
                          ${selectedAnswer[Questions[currentQuestionIndex].id] === option.option ? 'bg-gray-200' : 'bg-white'}
                          hover:bg-gray-100`}
                          onClick={() => handleSelectAnswer(Questions[currentQuestionIndex].id, option.option)}
                        >
                          <RadioGroupItem value={option.option} id={option.option} />
                          <Label htmlFor={option.option}>{option.option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </>
                )}
                <div className="mt-8 flex justify-between items-center">
                  <Button onClick={handleAnswerSelect} variant="default">End and Submit</Button>
                  <div className="flex items-center space-x-2">
                    <Button onClick={handlePrevious} className='rounded-full' variant="outline">
                      <ChevronLeft className="h-4 w-4" /> 
                      <span className="hidden lg:inline">Previous</span>
                    </Button>
                    <Button
                      onClick={handleFlagQuestion}
                      className={`rounded-full ${flaggedQuestions.includes(currentQuestionIndex) ? 'bg-orange-500' : ''}`}
                      variant="outline"
                    >
                      Flag <Flag className="ml-1 h-4 w-4" />
                    </Button>
                    <Button onClick={handleNext} className='rounded-full' variant="outline">
                    <span className="hidden lg:inline">Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}