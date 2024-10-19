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
import { useRouter } from 'next/navigation'

interface SubmitModalProps {
  unansweredQuestions: number,
  totalQuestions: number,
  onSubmit: () => void
  onCancel: () => void
}

export default function SubmitModal({ unansweredQuestions, totalQuestions, onSubmit, onCancel }: SubmitModalProps) {
  const [isOpen, setIsOpen] = useState(true)
  const minimumRequired = Math.ceil(totalQuestions * 0.5);
  const router = useRouter();

  const handleSubmit = () => {
    if (unansweredQuestions < minimumRequired) {
      setIsOpen(false)
      onSubmit()
      router.push('/result');
    }
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
          {`${unansweredQuestions < minimumRequired ? `Do you want to submit?` : `Sorry you want to complete atleast 50%`}`}
        </DialogDescription>
        <DialogFooter className="sm:justify-center">
          {unansweredQuestions < minimumRequired && (
            <Button
              type="submit"
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
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