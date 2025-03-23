"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { quizData } from "@/data/quiz-data"

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(quizData.length).fill(""))
  const [timeLeft, setTimeLeft] = useState(30)
  const [isAnswered, setIsAnswered] = useState(false)

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !isAnswered) {
      handleNext()
    }
  }, [timeLeft, isAnswered])

  useEffect(() => {
    setTimeLeft(30)
    setIsAnswered(false)
    setSelectedAnswer(answers[currentQuestion] || "")
  }, [currentQuestion, answers])

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    // Check if answer is correct and update score
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    setIsAnswered(true)

    if (currentQuestion < quizData.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 1000)
    } else {
      // Quiz completed, navigate to results
      setTimeout(() => {
        router.push(
          `/results?score=${score + (selectedAnswer === quizData[currentQuestion].correctAnswer ? 1 : 0)}&total=${quizData.length}`,
        )
      }, 1000)
    }
  }

  const progress = ((currentQuestion + 1) / quizData.length) * 100

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium">
              Question {currentQuestion + 1} of {quizData.length}
            </div>
            <div className="text-sm font-medium">Time left: {timeLeft}s</div>
          </div>
          <Progress value={progress} className="h-2" />
          <CardTitle className="mt-4 text-xl">{quizData[currentQuestion].question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect} className="space-y-3">
            {quizData[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 rounded-lg border p-4 transition-colors ${
                  isAnswered && option === quizData[currentQuestion].correctAnswer
                    ? "bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-800"
                    : isAnswered && option === selectedAnswer
                      ? "bg-red-100 border-red-500 dark:bg-red-900/30 dark:border-red-800"
                      : "hover:bg-muted"
                }`}
              >
                <RadioGroupItem value={option} id={`option-${index}`} disabled={isAnswered} />
                <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer font-medium">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={handleNext} disabled={!selectedAnswer || isAnswered} className="w-full">
            {currentQuestion < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

