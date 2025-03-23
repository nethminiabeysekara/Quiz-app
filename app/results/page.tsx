"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CircularProgressBar } from "@/components/circular-progress-bar"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const score = Number.parseInt(searchParams.get("score") || "0")
  const total = Number.parseInt(searchParams.get("total") || "0")
  const percentage = Math.round((score / total) * 100)

  const getFeedback = () => {
    if (percentage >= 80) {
      return "Excellent! You're a quiz master!"
    } else if (percentage >= 60) {
      return "Good job! You know your stuff!"
    } else if (percentage >= 40) {
      return "Not bad! Keep learning!"
    } else {
      return "Keep practicing! You'll get better!"
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <CircularProgressBar percentage={percentage} />

          <div className="text-center">
            <p className="text-2xl font-bold">
              {score} / {total} correct
            </p>
            <p className="mt-2 text-muted-foreground">{getFeedback()}</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-center">
          <Link href="/quiz" passHref>
            <Button variant="outline" className="w-full sm:w-auto">
              Try Again
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button className="w-full sm:w-auto">Back to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

