import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Quiz Master</CardTitle>
          <CardDescription>Test your knowledge with our interactive quiz!</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p>Ready to challenge yourself? This quiz contains multiple-choice questions on various topics.</p>
          <p>Try to answer all questions correctly and see your final score!</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/quiz" passHref>
            <Button size="lg" className="w-full sm:w-auto">
              Start Quiz
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

