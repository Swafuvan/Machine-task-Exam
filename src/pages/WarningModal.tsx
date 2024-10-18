'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from 'lucide-react'

interface SubmitModalProps {
  unansweredQuestions: number
  onSubmit: () => void
  onCancel: () => void
}

export default function SubmitModal({ unansweredQuestions, onSubmit, onCancel }: SubmitModalProps) {
  const [isOpen, setIsOpen] = useState(true)

  const handleSubmit = () => {
    setIsOpen(false)
    onSubmit()
  }

  const handleCancel = () => {
    setIsOpen(false)
    onCancel()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-center py-4">
          You have ({unansweredQuestions}) Unanswered Questions,
          <br />
          Do you want to submit?
        </DialogDescription>
        <DialogFooter className="sm:justify-center">
          <Button
            type="submit"
            className="bg-black text-white hover:bg-gray-800"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}