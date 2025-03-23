"use client"

import { useEffect, useState } from "react"

interface CircularProgressBarProps {
  percentage: number
}

export function CircularProgressBar({ percentage }: CircularProgressBarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  // Calculate the circumference of the circle
  const radius = 60
  const circumference = 2 * Math.PI * radius

  // Calculate the stroke-dashoffset based on the progress
  const strokeDashoffset = circumference - (progress / 100) * circumference

  // Determine color based on percentage
  const getColor = () => {
    if (progress >= 80) return "text-green-500"
    if (progress >= 60) return "text-blue-500"
    if (progress >= 40) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="150" height="150" viewBox="0 0 150 150">
        {/* Background circle */}
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="currentColor"
          strokeWidth="12"
          fill="transparent"
          className="text-muted-foreground/20"
        />
        {/* Progress circle */}
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="currentColor"
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`${getColor()} transition-all duration-1000 ease-out`}
          transform="rotate(-90 75 75)"
        />
      </svg>
      <div className="absolute text-3xl font-bold">{progress}%</div>
    </div>
  )
}

