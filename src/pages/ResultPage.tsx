'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { ChartContainer } from "@/components/ui/chart"
import { LayoutDashboard, Search, Inbox, BarChart2, Settings, Menu, MessageSquare, Copy, Bell, Clock } from 'lucide-react'
import { getQuestions } from '@/source/Data'
import Image from 'next/image'
import profileImg from '../app/assets/istockphoto.jpg'
import { categoryChart, Questions } from '@/types'
import { useRouter } from 'next/navigation'
import Logo from '@/app/assets/ELT-Logo.png'


const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',]

export default function AssessmentResults() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [allQuestions,setAllQuestions] = useState<Questions[]>([])
  const [chartResult, setChartResult] = useState<categoryChart[]>([]);
  const router = useRouter()

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem('selectedAnswer') || '[]');
    const minimum = Math.ceil(allQuestions.length / 2)
    console.log(answers, minimum)
    if (Object.keys(answers).length < 14) {
      router.push('/');
      return;
    }
    const fetchedQuestions = getQuestions();
    fetchedQuestions.then(questions => {
      setAllQuestions(questions);
      const scores = calculateCategoryScores(answers, questions);
      setChartResult(scores)
    });
  }, []);

  const calculateCategoryScores = (answers: { [key: string]: string }, questions: Questions[]) => {

    const chartResult = [
      { name: 'Geography', value: 0 },
      { name: 'Science', value: 0 },
      { name: 'History', value: 0 },
      { name: 'Mathematics', value: 0 },
    ];


    for (const data in answers) {
      const question = questions.find(q => q.id === data);
      if (question?.answer.option === answers[data]) {
        const data = chartResult.find((item) => item.name === question.category)
        if (data) {
          data.value += 1
        }
      }
    }
    return chartResult

  };


  const completedExam = () => {
    localStorage.clear();
    router.push('/')
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <div className={`bg-white w-64 fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:relative md:translate-x-0 z-30`}>
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="ELT Global Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <div className="text-xl font-bold">ELT Global</div>
          </div>
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
              <Search className="text-orange-500 mr-2 h-4 w-4" />
              Find
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Inbox className="text-orange-500 mr-2 h-4 w-4" />
              Inbox
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart2 className="text-orange-500 mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="text-orange-500 mr-2 h-4 w-4" />
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

              {/* Right Side Icons */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="icon">
                  <Image
                    src={profileImg}
                    alt="Profilepic"
                    width={25}
                    height={25}
                    className="cursor-pointer rounded-full object-cover"
                  />
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b">
            <nav className="-mb-px flex space-x-6 px-4 sm:px-4 lg:px-8">
              <Button variant="link" className="text-orange-500 border-b-2 border-orange-500">Exam</Button>
              <Button variant="link">section1</Button>
              <Button variant="link">section2</Button>
              <Button variant="link">section3</Button>
            </nav>
          </div>
        </header>


        {/* Results content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Your results based on your answers:</h2>
            <Card>
              <CardContent className="p-6">
                <div className="md:flex">
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">You are most suitable for</h3>
                    <h4 className="text-xl font-bold mb-2">
                      Association of Chartered Certified Accountant <span className="text-orange-500">(ACCA)</span>
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Association of Chartered Certified Accountants are professionals who are responsible for the financial
                      management of companies, financial reporting, auditing, taxation, and other financial aspects of business. They
                      have a global recognition and are highly sought after in the finance industry for their expertise. Join this elite group and
                      make a global impact.
                    </p>
                  </div>
                  <div className="sm:w-full md:w-1/2">
                    <ChartContainer config={{}} className="mr-auto ml-0 h-64">

                      <PieChart>
                        <Pie
                          data={chartResult}
                          cx="35%"
                          cy="45%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {chartResult.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Legend className='ml-0' />
                      </PieChart>
                    </ChartContainer>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-center gap-2">
                <Button variant="default">View course details</Button>
                <Button variant="outline">
                  <MessageSquare className=" h-4 w-4" />
                  Consult Assistant
                </Button>
                <Button variant="outline">
                  <Copy className=" h-4 w-4" />
                  Copy URL
                </Button>
                <Button onClick={completedExam} variant="outline">
                  Completed
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}